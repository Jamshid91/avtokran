const block13 = new Swiper('.swiper-block13', {
    loop: true,
  
    breakpoints: {
      0: {
        spaceBetween: 12,
        slidesPerView: 1.1,
        grid: {
          rows: 4,
          fill: 'row'
        },
      },
      767: {
        spaceBetween: 16,
        slidesPerView: 2.5,
        grid: {
          rows: 3,
          fill: 'row'
        },
      },
      991: {
        spaceBetween: 24,
        slidesPerView: 3,
        grid: {
          rows: 3,
          fill: 'row'
        },
      },
      1199: {
        spaceBetween: 24,  
        slidesPerView: 4,
        grid: {
          rows: 3,
          fill: 'row'
        },
      },
    }
  });