if (window.AOS) {
  AOS.init({ once: true, offset: 70, duration: 800, easing: 'ease-out-cubic' });
}

if (window.Lenis) {
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  const lenis = new Lenis({
    duration: isTouchDevice ? 0.85 : 1.2,
    smoothWheel: !isTouchDevice,
    syncTouch: false
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
}

const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.type = 'button';
backToTop.setAttribute('aria-label', 'Volver al inicio');
backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
document.body.appendChild(backToTop);

const updateBackToTop = () => {
  backToTop.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
};

window.addEventListener('scroll', updateBackToTop, { passive: true });
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
updateBackToTop();

document.querySelectorAll('.belief-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const article = toggle.closest('article');
    const isOpen = article.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});
