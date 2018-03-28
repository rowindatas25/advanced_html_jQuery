$(document).ready(function(){
	$("#slider").change(function () {
		var speed = $(this).val();
		$("#player").get(0).playbackRate = speed;
		$("#info").text("The current speed is " + (speed * 100) + " % of the normal speed");
	});
});