// ── Custom cursor ──────────────────────────────────────────────
const cur = document.getElementById('cursor'), cring = document.getElementById('cring');
if (cur && cring) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  });
  (function tick() {
    rx += (mx - rx) * .1; ry += (my - ry) * .1;
    cring.style.left = rx + 'px'; cring.style.top = ry + 'px';
    requestAnimationFrame(tick);
  })();
  document.querySelectorAll('a,button,[onclick]').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
  });
}

// ── Active nav link (based on data-page on <body>) ─────────────
const currentPage = document.body.dataset.page;
document.querySelectorAll('.nav-links a[data-page], .mob-menu a[data-page]').forEach(a => {
  a.classList.toggle('active-link', a.dataset.page === currentPage);
});

// ── Sticky nav scroll state ────────────────────────────────────
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu ────────────────────────────────────────────────
function toggleMob() {
  document.getElementById('mobMenu').classList.toggle('open');
}

// ── Toast ──────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 3200);
}

// ── Fade-up on scroll ──────────────────────────────────────────
const fuObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); fuObserver.unobserve(e.target); }
  });
}, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fu').forEach(el => fuObserver.observe(el));

// ── Program tabs (Summer Recap on Home) ────────────────────────
function switchProg(i) {
  document.querySelectorAll('.ppanel').forEach((p, j) => p.classList.toggle('active', j === i));
  document.querySelectorAll('.ptab').forEach((t, j) => t.classList.toggle('active', j === i));
}

// ── Gallery filter (Summer 2026 page) ──────────────────────────
function filterGallery(cat) {
  const cats = ['all', 'uiux', 'games', 'canvas', 'abhay'];
  document.querySelectorAll('.gf-btn').forEach((b, i) => {
    b.classList.toggle('active', cats[i] === cat);
  });
  document.querySelectorAll('.gallery-item').forEach(el => {
    if (cat === 'all') el.classList.remove('hidden');
    else el.classList.toggle('hidden', !el.classList.contains('g-' + cat));
  });
}

// ── Lightbox (Summer 2026 page) ─────────────────────────────────
function openLightbox(id) {
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  lb.style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
