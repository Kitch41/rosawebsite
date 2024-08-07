const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1500,
  slidesPerView: 5,
  spaceBetween: 60,
  mousewheel: false,
  parallax: false,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 10,
    slideShadows: true
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true
  },
  pagination: {
      el: ".swiper-pagination",
    },
  loopAdditionalSlides: 1, // Increase the number of additional slides
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 60
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    2300: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    2900: {
      slidesPerView: 4,
      spaceBetween: 60
    }
  }
});