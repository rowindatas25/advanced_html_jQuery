$(document).ready(function(){
	var canvas = $("#myCanvas").get(0);
	var context = canvas.getContext("2d");
	var bigX, bigY, bigLength;
	var smallX, smallY, smallLength;
	var up, down, left, right;
	var frameDistance; 
	var score; 
	var timer; 
	var id;
	context.fillStyle = "maroon";
	context.fillRect(bigX, bigY, bigLength, bigLength);
	context.fillStyle = "lightgray";
	context.fillRect(smallX, smallY, smallLength, smallLength);


function firstValues() {
	bigX = 50, bigY = 100, bigLength = 50;
	smallX = 0, smallY = 0, smallLength = 25;
	up = false, down = false, left = false, right = false;
	frameDistance = 5, score = 0, timer = 30, id = null;
}


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
	if(touch(smallX, bigX, bigX +  bigLength) || touch(smallX, smallLength, bigX, bigX + bigLength)) {
		if(touch(smallY, bigY, bigY +bigLength) || touch(smallY+smallLength, bigY, bigY + bigLength)) {
			moveTarget();
			score++;
		}
	}
context.fillStyle = "maroon";
context.fillRect(bigX, bigY, bigLength, bigLength);
context.fillStyle = "lightgray";
context.fillRect(smallX, smallY, smallLength, smallLength);
$("#result").text("Score: " + score + " " + "Time left: " + timer);
if(timer <= 0) {
	clearInterval(id);
	clearBackground();
	$("#result").text("Final Score: " + score);
}
else {
window.requestAnimationFrame(redraw);
}

}

function clearBackground() {
	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function touch(inside, first, second) {
		return(inside > first && inside < second)
}

function startGame() {
	id = setInterval(function () {
		timer--;
	}, 1000);
	moveTarget();
	redraw();
	canvas.focus();
}
$("#play").click(function () {
	alert("Use Arrow Keys to Play!");
	firstValues();
	startGame();
})


});