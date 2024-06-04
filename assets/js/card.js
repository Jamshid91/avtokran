
var productSlider = new Swiper('.big-card', {
    spaceBetween: 0,
    centeredSlides: false,
    loop:true,
    loopedSlides: 5,
    resizeObserver:true,

    
  breakpoints: {
    0: {
      spaceBetween: 4,
      slidesPerView: 1.1,
    },
    576: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
  }
});
var productThumbs = new Swiper('.small-card', {
    spaceBetween: 13,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 5,
    loopedSlides: 5,    
});
productSlider.controller.control = productThumbs;
productThumbs.controller.control = productSlider;