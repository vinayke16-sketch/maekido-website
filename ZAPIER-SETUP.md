# Wiring the website's forms to Zapier

This site has three forms that need to send their submissions somewhere:

1. **Contact form** (`contact.html`) — name, email, role, message
2. **Partner / Enroll form** (`partner.html`) — school details + program interest
3. **Newsletter signup** (`blog.html`, two places on the page)

Each one posts to its own Zapier webhook URL, configured in
`assets/js/config.js`. Right now those URLs are placeholders — follow the
steps below to replace them with real ones, once per form.

## 1. Create a Zap for each form

Repeat this for **Contact**, **Partner**, and **Newsletter** (3 separate Zaps):

1. Go to [zapier.com](https://zapier.com) and click **Create Zap**.
2. For the trigger, search for **Webhooks by Zapier** and choose **Catch Hook**.
3. Zapier will show you a custom webhook URL like
   `https://hooks.zapier.com/hooks/catch/123456/abcdef/`. Copy it.
4. Click **Test trigger** — Zapier will wait for a sample submission. You can
   submit the live form on your site once it's deployed (or send a test
   request) to capture sample data.
5. Add an action step — **Zapier Tables → Create Record** is the simplest way
   to get submissions into a spreadsheet-like table. Map each incoming field
   (e.g. `firstName`, `email`, `message`) to a column in your table.
6. Turn the Zap **on**.

## 2. Paste the URLs into `config.js`

Open `assets/js/config.js` and replace each placeholder with the webhook URL
Zapier gave you:

```js
const ZAPIER_WEBHOOKS = {
  contact: 'https://hooks.zapier.com/hooks/catch/123456/your-contact-id/',
  partner: 'https://hooks.zapier.com/hooks/catch/123456/your-partner-id/',
  newsletter: 'https://hooks.zapier.com/hooks/catch/123456/your-newsletter-id/'
};
```

## 3. What gets sent to each webhook

**Contact** (`contact.html`):
`firstName`, `lastName`, `email`, `role`, `interest`, `message`, `page`, `submittedAt`

**Partner** (`partner.html`):
`name`, `role`, `email`, `phone`, `school`, `city`, `size`, `grades`,
`programs` (array of selected program names), `format`, `notes`, `page`, `submittedAt`

**Newsletter** (`blog.html`):
`email`, `page`, `submittedAt`

## 4. Test it on the live site

Once the site is deployed and the URLs are in place, submit each form for
real. You should see:

- A confirmation toast on the page ("Message sent! ...", "Subscribed! ...", etc.)
- A new row appear in your Zapier Table within a few seconds

If a submission doesn't show up, open your browser's developer console
(F12 → Console) while submitting — any request errors will be logged there,
and Zapier's **Zap History** page will show whether the webhook was received.
