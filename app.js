// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
const mobilePanel = document.getElementById('mobilePanel');

if (menuBtn && mobilePanel) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobilePanel.style.display === 'block';
    mobilePanel.style.display = isOpen ? 'none' : 'block';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  mobilePanel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobilePanel.style.display = 'none';
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form demo submit
function fakeSubmit(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  if (status) status.textContent = "Thanks! Your message has been captured (demo).";
  e.target.reset();
  setTimeout(() => { if (status) status.textContent = ""; }, 4500);
  return false;
}
window.fakeSubmit = fakeSubmit;

// Active nav highlighting (based on body data-page attr)
(() => {
  const page = document.body.getAttribute('data-page');
  if (!page) return;
  document.querySelectorAll(`[data-nav="${page}"]`).forEach(el => el.classList.add('active'));
})();
