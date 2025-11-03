document.addEventListener('DOMContentLoaded', () => {

  // === 1. Responsive Navigation Menu ===
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Simple hamburger icon animation
      hamburger.classList.toggle('active'); 
    });
  }

  // === 2. Contact Form Validation ===
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop the form from submitting
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
      } else {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Clear the form
      }
    });
  }

  // === 3. Reveal-on-Scroll Animation (IntersectionObserver) ===
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing once it's revealed
      }
    });
  }, {
    root: null, // observes relative to the viewport
    threshold: 0.1, // triggers when 10% of the element is visible
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

});