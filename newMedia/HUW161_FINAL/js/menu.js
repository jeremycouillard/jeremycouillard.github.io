// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main').hasClass('open-nav')) {
        $('.main').removeClass('open-nav');
    } else {
        $('.main').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main').removeClass('open-nav');
    }
});

