/**
 * Velda Morisco - Main JavaScript
 * Mobile navigation toggle functionality
 */

(function() {
  'use strict';

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      navToggle.setAttribute('aria-expanded', !isExpanded);

      // Toggle active classes
      navToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
      if (!navToggle.contains(event.target) && !mobileNav.contains(event.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        mobileNav.classList.remove('active');
      }
    });

    // Close mobile nav on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        navToggle.focus();
      }
    });
  }

  // Smooth scroll for anchor links (progressive enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();
