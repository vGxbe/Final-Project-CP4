var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//The game board 1 = walls, 0 = free space, -1 = the goal, 2 = key
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 2, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
  [-1, 0, 1, 0, 1, 1, 0, 0, 0, 0]
];

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
ctx.moveTo(0, 120);
ctx.lineTo(40,80);
ctx.stroke();
ctx.closePath();
