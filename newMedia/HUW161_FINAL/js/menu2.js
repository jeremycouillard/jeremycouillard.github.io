// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main').hasClass('open-nav-years')) {
        $('.main').removeClass('open-nav-years');
    } else {
        $('.main').addClass('open-nav-years');
    }
});

$('.main_h li a').click(function() {
    if ($('.main').hasClass('open-nav-years')) {
        $('.navigation').removeClass('open-nav-years');
        $('.main').removeClass('open-nav-years');
    }
});

//enable jquery lazyloading and then bootstrap scrollspy
$(document).ready(function() {
  $("img").unveil(200);
  $('body').scrollspy({ target: '.proj' })
});

