$(document).ready(function()


$(window).scroll(function() { 
	var p1 = $( "#metodo1" );
var off1 = p1.offset();  
    if(((window.scrollY - off1.top) >-300)&&(window.scrollY > 20)) { 
	
	$(".sus1").removeClass("metodosadd2"); 
	$(".sus1").addClass("metodosadd"); 
	
	;} else {
		$(".sus1").removeClass("metodosadd"); 
		$(".sus1").addClass("metodosadd2"); 
		}
		
});	
