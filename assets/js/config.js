// ── Zapier webhook configuration ───────────────────────────────
// Each form posts to its own Zapier "Catch Hook" URL, which then
// writes the submission into a Zapier Table (or wherever you route it).
//
// To wire these up:
//   1. In Zapier, create a Zap with trigger "Webhooks by Zapier" → "Catch Hook"
//   2. Copy the custom webhook URL Zapier gives you
//   3. Paste it below, replacing the placeholder for that form
//   4. Add an action step (e.g. "Zapier Tables" → "Create Record") and map fields
//   5. Turn the Zap on, then submit the form on the live site to test it
//
// See ZAPIER-SETUP.md in the project root for a full walkthrough.
const ZAPIER_WEBHOOKS = {
  contact: 'https://hooks.zapier.com/hooks/catch/REPLACE_WITH_CONTACT_WEBHOOK_ID/',
  partner: 'https://hooks.zapier.com/hooks/catch/REPLACE_WITH_PARTNER_WEBHOOK_ID/',
  newsletter: 'https://hooks.zapier.com/hooks/catch/REPLACE_WITH_NEWSLETTER_WEBHOOK_ID/'
};
