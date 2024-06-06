const block1 = new Swiper('.swiper-block1', {
  loop: true,
  spaceBetween: 0,
  simulateTouch:false, 
  allowTouchMove: false,
  slidesPerView: 1,
      navigation: {
      nextEl: '.swiper-next-block1',
      prevEl: '.swiper-prev-block1',
    },
    pagination: {
      el: ".swiper-pagination-block1",
      clickable: true,
    },
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
});

const sliders = document.querySelectorAll('.swiper-slide');
const dotes = document.querySelectorAll('.item-box .dote');
const pagination = document.querySelector('.swiper-pagination-block1');
const next = document.querySelector('.swiper-next-block1');
const prev = document.querySelector('.swiper-prev-block1');

const [slider1, slider2, slider3, slider4, slider5, slider6, slider7] = sliders;
const [dote1, dote2, dote3] = dotes;

console.log(sliders)

next.addEventListener('click', () => {
  funcSwip();
});

prev.addEventListener('click', () => {
  funcSwip();
});

pagination.addEventListener('click', () => {
  funcSwip();
});

function funcSwip() {
  dotes.forEach(elem => {
    elem.classList.remove('active')
  })
  if(slider1.classList.contains('swiper-slide-active')) {
    dote3.classList.add('active')
  } 
  else if(slider2.classList.contains('swiper-slide-active')) {
    dote1.classList.add('active')
  } 
  else if(slider3.classList.contains('swiper-slide-active')) {
    dote2.classList.add('active')
  } 
  else if(slider4.classList.contains('swiper-slide-active')) {
    dote3.classList.add('active')
  } 
  else if(slider5.classList.contains('swiper-slide-active')) {
    dote1.classList.add('active')
  } 
}


const block5 = new Swiper('.swiper-block5', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
      navigation: {
      nextEl: '.swiper-next-block5',
      prevEl: '.swiper-prev-block5',
    },

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


