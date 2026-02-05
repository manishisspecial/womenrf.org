/**
 * Women's Rights First - womenrf.org replica
 * Basic interactivity: mobile menu, smooth scroll, form handling
 */

(function () {
  'use strict';

  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  // Mobile menu toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Footer newsletter - prevent default and show feedback (no backend)
  const footerNewsletter = document.querySelector('.footer-newsletter');
  if (footerNewsletter) {
    footerNewsletter.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = footerNewsletter.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        footerNewsletter.reset();
      }, 2000);
    });
  }
})();
