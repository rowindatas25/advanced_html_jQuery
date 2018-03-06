$(document).ready(function(){
	$("#box1").click(function(){
		$(this).animate({top:0, left:0});
	});
	$("#box2").click(function(){
		$(this).animate({top:0, right:0});
	});
	$("#box3").click(function(){
		$(this).animate({bottom:0, left:0});
	});
	$("#box4").click(function(){
		$(this).animate({bottom:0, right:0});
	});
});

