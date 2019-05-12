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
var width = canvas.width;
var blockSize = width / board.length;

function drawWall(){
  ctx.beginPath();
  ctx.rect(x*blockSize,y*blockSize,blockSize,blockSize);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < board[y].length; x++) {
      if (board[y][0] == 1) {
        drawWall(0, y);
      } else if (board[y][0] == -1) {
        //draw Goal
      } else if (board[y][0] == 2) {
        // draw Key
      }
    }
  }
}

draw();

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
