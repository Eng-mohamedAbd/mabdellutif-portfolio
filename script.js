// Footer year
document.getElementById('year')?.textContent = new Date().getFullYear();

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .hero-text, .hero-avatar').forEach(el => {
  observer.observe(el);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.getElementById('site-menu');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria