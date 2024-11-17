$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
	$("#l1").addClass("letra1"); 
	$("#l2").addClass("letra2"); 
	$("#l3").addClass("letra3"); 
		$("#c").addClass("cursor"); 
		
		setTimeout(function(){
		var audio = document.getElementById("clip");
audio.play();
	}, 1000);
	
	
});

$(window).scroll(function() { 
	var p1 = $( "#metodo1" );
var off1 = p1.offset();  
    if(((window.scrollY - off1.top) >-480)&&(window.scrollY > 20)) { 
	
	$(".sus1").removeClass("metodosadd2"); 
	$(".sus1").addClass("metodosadd"); 
	
	;} else {
		$(".sus1").removeClass("metodosadd"); 
		$(".sus1").addClass("metodosadd2"); 
		}
		
});	
$(window).scroll(function() { 
	var p1 = $( "#metodo2" );
var off1 = p1.offset();  
    if(((window.scrollY - off1.top) >-400)&&(window.scrollY > 20)) { 
	
	$(".sus2").removeClass("metodosadd2"); 
	$(".sus2").addClass("metodosadd"); 
	
	;} else {
		$(".sus2").removeClass("metodosadd"); 
		$(".sus2").addClass("metodosadd2"); 
		}
		
});	
