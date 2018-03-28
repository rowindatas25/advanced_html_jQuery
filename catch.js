$(document).ready(function(){
	var canvas = $("#myCanvas").get(0);
	var context = canvas.getContext("2d");
	var bigX = 50, bigY = 100, bigLength = 50;
	var smallX = 0, smallY = 0, smallLength = 25;
	var up = false, down = false, left = false, right = false;
	var frameDistance = 5;
	context.fillStyle = "maroon";
	context.fillRect(bigX, bigY, bigLength, bigLength);
	context.fillStyle = "lightgray";
	context.fillRect(smallX, smallY, smallLength, smallLength);

function moveTarget() {
	smallX = Math.floor(Math.random() * (canvas.width - smallLength));
	smallY = Math.floor(Math.random() * (canvas.height - smallLength));
	console.log(smallX + ":" + smallY);
}

$("#myCanvas").keydown(function (event) {
	if(event.keyCode == 37) 
		left = true;
	if(event.keyCode == 38) 
		up = true;
	if(event.keyCode == 39) 
		right = true;
	if(event.keyCode == 40) 
		down = true;
}).keyup(function() {
	if(event.keyCode == 37) 
		left = false;
	if(event.keyCode == 38) 
		up = false;
	if(event.keyCode == 39) 
		right = false;
	if(event.keyCode == 40) 
		down = false;
});

function redraw() {
	clearBackground();
	if(up) 
		bigY -= frameDistance;
	if(down) 
		bigY += frameDistance;
	if(left) 
		bigX -= frameDistance;
	if(right) 
		bigX += frameDistance;
	if(bigX < 0)
		bigX = 0;
	if(bigY < 0)
		bigY = 0;
	if(bigX + bigLength > canvas.width)
		bigX = canvas.width - bigLength;
	if(bigY + bigLength > canvas.height)
		bigY = canvas.height - bigLength;

context.fillStyle = "maroon";
context.fillRect(bigX, bigY, bigLength, bigLength);
context.fillStyle = "lightgray";
context.fillRect(smallX, smallY, smallLength, smallLength);
window.requestAnimationFrame(redraw);

}

function clearBackground() {
	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function startGame() {
	moveTarget();
	redraw();
	canvas.focus();
}

startGame();



});