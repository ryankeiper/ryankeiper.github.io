$(document).ready(function(){
	$("nav li a").click(function(event){
		event.preventDefault();
		$(".home").hide();
		$(".work").hide();
		$(".contact").hide();
	})

	$(".home-link").click(function(){
		$(".home").fadeToggle();
	})

	$(".work-link").click(function(){
		$(".work").fadeToggle();
	})

	$(".contact-link").click(function(){
		$(".contact").fadeToggle();
	})

})