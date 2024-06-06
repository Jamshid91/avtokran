const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('header'),
      body = document.querySelector('body');
      list = document.querySelector('.menu .nav-list-item');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
    menuBtn.classList.toggle('clickedBtn');
    body.classList.toggle('bodyStopScroll');
    header.classList.toggle('noShadow')
});


list.addEventListener('click', () => {
    list.classList.toggle('showNavItem');
});

$(document).ready(function () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('header').addClass('headerSticy')
      } else {
        $('header').removeClass('headerSticy')
      }
    });
  });

