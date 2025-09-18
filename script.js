// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', a.getAttribute('href'));
    }
  });
});

// Reveal on scroll using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const obsOptions = { threshold: 0.12 };

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, obsOptions);

revealEls.forEach(el => revealObserver.observe(el));

// subtle hero art float on hover
const heroArt = document.querySelector('.hero-art');
if (heroArt) {
  heroArt.addEventListener('mouseenter', () => heroArt.style.transform = 'translateY(-6px) scale(1.01)');
  heroArt.addEventListener('mouseleave', () => heroArt.style.transform = 'translateY(0) scale(1)');
}

// small accessibility: enable focus outlines when keyboard used
(function() {
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
})();
