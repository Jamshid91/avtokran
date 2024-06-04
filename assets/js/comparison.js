

const comparison = document.querySelector('.comparison'),
      comparison_close = document.querySelector('.comparison-close'),
      comparison_btn = document.querySelectorAll('.comparison-btn');


comparison_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    comparison.classList.add('showComparison')
  });
});

comparison_close.addEventListener('click', () => {
  comparison.classList.remove('showComparison');
});