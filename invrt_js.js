// Scroll behavior for navbar
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    // Initial check for page load
    if (window.scrollY > 50) {
      navbar.classList.add('nav-shadow', 'bg-opacity-98');
    } else {
      navbar.classList.remove('nav-shadow', 'bg-opacity-98');
    }
    
    // Add scroll listener
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('nav-shadow', 'bg-opacity-98');
      } else {
        navbar.classList.remove('nav-shadow', 'bg-opacity-98');
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to your server
      // For now, we'll just show a success message
      
      // Get form data
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // Log form data (for demonstration purposes)
      console.log('Form submitted:', formValues);
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'bg-green-100 border border-green-200 text-green-800 p-4 my-4';
      successMessage.innerHTML = '<p>Thank you for your message. We\'ll be in touch soon.</p>';
      
      contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
  }
  
  // Newsletter form handling
  const subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to your server
      // For now, we'll just show a success message
      
      // Get form data
      const formData = new FormData(subscribeForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // Log form data (for demonstration purposes)
      console.log('Subscription submitted:', formValues);
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'bg-green-100 border border-green-200 text-green-800 p-4 my-4';
      successMessage.innerHTML = '<p>Thank you for subscribing to our newsletter.</p>';
      
      subscribeForm.parentNode.insertBefore(successMessage, subscribeForm.nextSibling);
      
      // Reset form
      subscribeForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
  }
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
  
  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
