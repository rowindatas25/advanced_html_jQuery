$(document).ready(function(){
	var canvas = $("#myCanvas").get(0);
	var context = canvas.getContext("2d");
	var bigX = 50, bigY = 100, bigLength = 50;
	var smallX = 0, smallY = 0, smallLength = 25;
	context.fillStyle = "maroon";
	context.fillRect(bigX, bigY, bigLength, bigLength);
	context.fillStyle = "lightgray";
	context.fillRect(smallX, smallY, smallLength, smallLength);

function moveTarget() {
	smallX = Math.floor(Math.random() * (canvas.width - smallX));
	smallY = Math.floor(Math.random() * (canvas.height - smallX));
	console.log(smallX + smallY);
}

moveTarget();
moveTarget();
moveTarget();

});