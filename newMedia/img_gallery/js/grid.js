


// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 300,
  fitWidth: true,
  gutter: 10
});


// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});


//masonry options

//$('.grid').masonry({
//  itemSelector: '.grid-item',
//  columnWidth: 300,
//  fitWidth: true,
//  gutter: 10
//});


//lightbox options
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
    })