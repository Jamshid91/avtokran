const filterLists = document.querySelectorAll('.filter-list');
const filterBtn = document.querySelector('.filter-btn');
const filter = document.querySelector('.filter-box');


filterLists.forEach(list => {
    let check = 0;
    list.addEventListener('click', () => {
        if(check == 0) {
            list.classList.add('checkList');
            const text = list.firstChild
            const close = document.createElement('img');
            close.setAttribute('src', 'assets/img/svg/close2.svg');
            list.appendChild(close);
            return check = 1;
        } else {
            list.classList.remove('checkList');
            list.lastChild.remove();
            return check = 0;
        }
    });
});

filterBtn.addEventListener('click', () => {
    filterBtn.classList.toggle('clickFilter')
    filter.classList.toggle('showFilter')
});


const category = new Swiper('.swiper-category', {
    loop: false,
    spaceBetween: 0,

    navigation: {
    nextEl: '.swiper-next-category',
    prevEl: '.swiper-prev-category',
  },
  
    breakpoints: {
      0: {
        spaceBetween: 24,  
        slidesPerView: 1,
        grid: {
            rows: 7,
            fill: 'row'
          },
      },
      767: {
        spaceBetween: 16,  
        slidesPerView: 2,
        grid: {
            rows: 8,
            fill: 'row'
          },
      },
      991: {
        spaceBetween: 16,  
        slidesPerView: 2,
        grid: {
            rows: 8,
            fill: 'row'
          },
      },
      1199: {
        spaceBetween: 20,  
        slidesPerView: 2,
        grid: {
            rows: 5,
            fill: 'row'
          },
      },
    }
  });



const pagination = document.querySelector('.pagination-head');
const bullets = document.querySelectorAll('.bullets .bullet');

pagination.addEventListener('click', () => {
  pagination.parentElement.classList.toggle('showBullet')
});

bullets.forEach(bullet => {
  bullet.addEventListener('click', () => {
      pagination.parentElement.classList.remove('showBullet');

      pagination.children[0].textContent = bullet.textContent
    });
})