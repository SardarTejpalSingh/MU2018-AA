var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  breakpoints: {
    1280: { slidesPerView: 4 },
    1024: { slidesPerView: 3 },
    800: { slidesPerView: 2 },
    480: { slidesPerView: 1 }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
