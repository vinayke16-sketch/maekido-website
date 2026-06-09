// ── Form submission handlers ───────────────────────────────────

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwv9TewiHxt64vvBCgC8TISKFH_J9cM3W7p8a8B3MGM_TNeOOW122Qyp5L2YJJDSdhW/exec';

async function submitContact() {
  const fname = document.getElementById('c-fname')?.value.trim();
  const lname = document.getElementById('c-lname')?.value.trim();
  const email = document.getElementById('c-email')?.value.trim();
  const role = document.getElementById('c-role')?.value;
  const interest = document.getElementById('c-interest')?.value;
  const message = document.getElementById('c-msg')?.value.trim();

  if (!fname || !email) { showToast('Please fill in your name and email ✍️'); return; }

  const btn = document.querySelector('[onclick="submitContact()"]');
  const originalText = btn?.textContent;
  if (btn) btn.textContent = 'Sending...';

  try {
    await fetch(SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form_type: 'contact', first_name: fname, last_name: lname, email, role, interest, message })
    });
    showToast('Message sent! We\'ll respond within 24 hours 📬');
    ['c-fname', 'c-lname', 'c-email', 'c-msg'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  } catch {
    showToast('Something went wrong, please try again ⚠️');
  } finally {
    if (btn) btn.textContent = originalText;
  }
}

async function submitEnroll() {
  const name = document.getElementById('e-name')?.value.trim();
  const role = document.getElementById('e-role')?.value;
  const email = document.getElementById('e-email')?.value.trim();
  const phone = document.getElementById('e-phone')?.value.trim();
  const school = document.getElementById('e-school')?.value.trim();
  const city = document.getElementById('e-city')?.value.trim();
  const size = document.getElementById('e-size')?.value;
  const grades = document.getElementById('e-grades')?.value;
  const format = document.getElementById('e-format')?.value;
  const notes = document.getElementById('e-notes')?.value.trim();
  const programs = [...document.querySelectorAll('#prog-checks input:checked')].map(c => c.value).join(', ');

  if (!school || !email) { showToast('Please fill in your school name and email ✍️'); return; }
  if (!programs) { showToast('Please select at least one program 🎨'); return; }

  const btn = document.querySelector('[onclick="submitEnroll()"]');
  const originalText = btn?.textContent;
  if (btn) btn.textContent = 'Sending...';

  try {
    await fetch(SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form_type: 'partnership', name, role, email, phone, school_name: school, city, student_count: size, grades, programs_selected: programs, format, notes })
    });
    showToast('Partnership enquiry submitted! We\'ll be in touch within 24 hours 🎉');
    ['e-name', 'e-email', 'e-phone', 'e-school', 'e-city', 'e-notes'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.querySelectorAll('#prog-checks input:checked').forEach(c => c.checked = false);
  } catch {
    showToast('Something went wrong, please try again ⚠️');
  } finally {
    if (btn) btn.textContent = originalText;
  }
}

async function subNewsletter() {
  const field = document.getElementById('nl-email') || document.getElementById('nb-email');
  const email = field?.value.trim();
  if (!email) { showToast('Please enter your email 📧'); return; }

  const btn = document.querySelector('[onclick="subNewsletter()"]');
  const originalText = btn?.textContent;
  if (btn) btn.textContent = 'Sending...';

  try {
    await fetch(SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form_type: 'newsletter', email })
    });
    showToast('Subscribed! Welcome to the Maekido community 🎉');
    if (field) field.value = '';
  } catch {
    showToast('Something went wrong, please try again ⚠️');
  } finally {
    if (btn) btn.textContent = originalText;
  }
}
