//my options for scroll spy and unveil

//gets jquery ready
$(document).ready(function() {
//for the image unveil plugin. I added a function to make the images fade in
  $("img").unveil(200, function() {  
  $(this).load(function() {
    this.style.opacity = 1;
  });
});

//activating bootstrap scrollspy
  $("body").scrollspy({ 
  		target: ".navbar", //making scrollspy happen with bootstrap navbar
  		offset: 70
  	})

});

