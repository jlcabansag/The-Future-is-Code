/* =========================================
   LUXURY ACADEMIC SITE JS
========================================= */

/* ===== BACK TO TOP BUTTON ===== */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

  // Reveal animations
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      el.classList.add('visible');
    }
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== SMOOTH SCROLL FOR NAV LINKS ===== */
document.querySelectorAll('.site-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== HERO ART FLOAT EFFECT ===== */
const heroArt = document.querySelector('.hero-art');
if (heroArt) {
  let floatDirection = 1;
  let offset = 0;
  setInterval(() => {
    offset += floatDirection * 0.2;
    if (offset > 5 || offset < -5) floatDirection *= -1;
    heroArt.style.transform = `translateY(${offset}px) scale(1.01)`;
  }, 30);
}

/* ===== OPTIONAL: FORM SUBMIT (FORMS USING FORMSUBMIT.CO) ===== */
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Oops! There was a problem.');
      }
    })
    .catch(error => {
      alert('Network error. Please try again.');
    });
  });
}

/* ===== REVEAL ON LOAD ===== */
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});
