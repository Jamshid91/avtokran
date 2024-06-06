
$('.comparison-btn').click(function() {
  // event.preventDefault();
  $(this).toggleClass('active')
  $('.comparison-num .count').text($('.comparison-btn.active').length);
  if ($('.comparison-btn.active').length) {
    $('.comparison').addClass('showComparison');
} else {
    $('.comparison').removeClass('showComparison');
}
});


$('.comparison-close').click(function() {
  $('.comparison').removeClass('showComparison');
});