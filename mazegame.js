var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//The game board 1 = walls, 0 = free space, -1 = the goal, 2 = key
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 2, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
  [-1, 0, 1, 0, 1, 1, 0, 0, 0, 0]
];
var player = {
  x: 0,
  y: 0,
};
var width = canvas.width;
var blockSize = width / board.length;

function drawWall(x, y) {
  ctx.beginPath();
  ctx.rect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function drawPlayer(){
  var half = blockSize / 2;
  ctx.beginPath;
  ctx.arc(player.x * blockSize + half, player.y * blockSize + half, half, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath;
}

function drawGoal(x, y){
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "gold";
  ctx.moveTo(x*blockSize, y*blockSize);
  ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
  ctx.moveTo(x*blockSize, (y+1)*blockSize);
  ctx.lineTo((x+1)*blockSize, y*blockSize);
  ctx.stroke();
  ctx.closePath();
}

function draw() {
  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < board[y].length; x++) {
      if (board[y][x] == 1) {
        drawWall(x, y);
      } else if (board[y][x] == -1) {
        drawGoal(x, y);
      }
    }
  }
  drawPlayer();
}

draw();
