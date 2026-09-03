const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('scrollProgress');

const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  const h = document.documentElement;
  const scrolled = h.scrollHeight > h.clientHeight
    ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
    : 0;
  progressBar.style.width = scrolled + '%';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}
