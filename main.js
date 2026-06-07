// Holistic by Cora — main.js

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(13, 13, 11, 0.97)';
  } else {
    nav.style.background = 'rgba(13, 13, 11, 0.85)';
  }
}, { passive: true });

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-label', isOpen ? '關閉選單' : '開啟選單');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll(
  '.service-card, .testimonial-card, .about__grid, .runes-feature__inner, .booking__option, .section__header'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => observer.observe(el));

// ---- Rune hover tooltip ----
document.querySelectorAll('.rune-grid span').forEach(span => {
  span.addEventListener('mouseenter', () => {
    span.style.transition = 'all 0.3s';
  });
});

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- Subtle parallax on hero rune ----
const heroRune = document.querySelector('.hero__rune');
if (heroRune) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroRune.style.transform = `translateY(calc(-50% + ${scrollY * 0.2}px))`;
  }, { passive: true });
}
