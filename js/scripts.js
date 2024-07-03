document.addEventListener('DOMContentLoaded', function() {
  console.log("heya");

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav__link');

  hamburger.addEventListener('click', () => {
    togglemenu();
  });

  // Get all video elements on the page
  var videos = document.querySelectorAll('video');

  // Loop through each video element
  videos.forEach(function(video) {
    // Set the volume to 0.5
    video.volume = 0.5;
  });

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px"; /* Adjust this value to hide the header completely */
      // Check if it's mobile
      if (window.innerWidth <= 768) {
        navLinks.forEach(function(navLink) {
          if (!navLink.classList.contains('hide')) {
            navLink.classList.toggle('hide');
          }
        });
      }
    }
    prevScrollpos = currentScrollPos;
  };

  function togglemenu() {
    navLinks.forEach(function(navLink) {
      navLink.classList.toggle('hide');
    });
  }


    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Find elements with the placeholder
    const elementsWithPlaceholder = document.querySelectorAll('[data-replace-year="year"]');
  
    // Replace the placeholder with the current year
    elementsWithPlaceholder.forEach(function(element) {
      element.textContent = currentYear;
    });


    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          const duration = parseFloat(entry.target.dataset.pop) || 0.5; // Default duration is 0.5s
          entry.target.style.transition = `opacity ${duration}s ease-in-out, transform ${duration}s ease-in-out`;
          entry.target.classList.add('popped');
          observer.unobserve(entry.target);
        }
      });
    });
  
    const popTextElements = document.querySelectorAll('.pop-text');
    popTextElements.forEach(element => {
      observer.observe(element);
    });
  

});