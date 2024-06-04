const menuBtn = document.querySelector('.menu-btn'),
      header = document.querySelector('header'),
      body = document.querySelector('body');
      list = document.querySelector('.menu .nav-list-item');

menuBtn.addEventListener('click', () => {
    header.classList.toggle('showMenu');
    body.classList.toggle('bodyStopScroll')
});


list.addEventListener('click', () => {
    list.classList.toggle('showNavItem');
});

