var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var board = [ //The game board 1 = positions walls, 0 = all the free space, -1 = where the goal will be
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
  [-1, 0, 1, 0, 1, 1, 0, 0, 0, 0]
];
var player = { //makes player always start in specific area
  x: 0,
  y: 0
};
var width = canvas.width;
var blockSize = width / board.length;
document.addEventListener("keydown",keyDownHandler);

function drawWall(x, y) { //creates walls for the maze
  ctx.beginPath();
  ctx.rect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function drawPlayer(){ //creates player in the maze
  var half = blockSize / 2;
  ctx.beginPath;
  ctx.arc(player.x * blockSize + half, player.y * blockSize + half, half, 0, 2 * Math.PI);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.closePath;
}

function canMove(x, y) {
  if (y >= 0 &&
     y < board.length &&
     x >= 0 &&
     x < board[y].length &&
     board[y][x] != 1)
  return true;
}

function keyDownHandler(e) {
  if (e.which == 38 && canMove(player.x, player.y-1)) player.y--;
  else if (e.which == 40 && canMove(player.x, player.y+1)) player.y++;
  else if (e.which == 37 && canMove(player.x-1, player.y)) player.x--;
  else if (e.which == 39 && canMove(player.x+1, player.y)) player.x++;
  draw();
}

function drawGoal(x, y){ //creates goal which is the red X
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.moveTo(x*blockSize, y*blockSize);
  ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
  ctx.moveTo(x*blockSize, (y+1)*blockSize);
  ctx.lineTo((x+1)*blockSize, y*blockSize);
  ctx.stroke();
  ctx.closePath();
}

function draw() { //puts in place the positions where the player, walls and goal will be in the maze
  ctx.clearRect(0,0,canvas.width,canvas.height);
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
