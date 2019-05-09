var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(40,40,40,0,2*Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "gold";
ctx.moveTo(0,80);
ctx.lineTo(40, 120);
ctx.stroke();
ctx.closePath();
