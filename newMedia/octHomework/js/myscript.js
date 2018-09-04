$(document).ready(function(){
	$("#yes").click(function() {
  		$("#green").show("fold", 1000,
  			function(){
  				$("#yes").hide("fold","fast");
  				$("#no").hide("explode","fast");  		
  		});//close closing animations function
	});//close click function
	
	$("#no").click(function() {
		$("#red").show("explode",1000,
  			function(){
  				$("#yes").hide("fold","fast");
  				$("#no").hide("explode","fast");  		
  		});
	});
	
});