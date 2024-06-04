const block5 = new Swiper('.swiper-block5', {
    loop: true,
  
    breakpoints: {
      0: {
        spaceBetween: 12,
        slidesPerView: 1.1,
      },
      767: {
        spaceBetween: 16,
        slidesPerView: 2,
      },
      991: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
      1199: {
        spaceBetween: 24,  
        slidesPerView: 4,
      },
    }
  });