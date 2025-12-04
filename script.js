// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark mode toggle
const darkModeBtn = document.querySelector('.dark-mode-toggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeBtn.classList.toggle('active');
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});
