var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//The game board 1 = walls, 0 = free space, and -1 = the goal
var board = [
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
var player = {
  x: 0,
  y: 0
};
var width = canvas.width;
var blockSize = width / board.length;
var time = 20; //in second
document.addEventListener("keydown", keyDownHandler);

function drawWall(x, y) {
  ctx.beginPath();
  ctx.rect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function drawGoal(x, y) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.moveTo(x * blockSize, y * blockSize);
  ctx.lineTo((x + 1) * blockSize, (y + 1) * blockSize);
  ctx.moveTo(x * blockSize, (y + 1) * blockSize);
  ctx.lineTo((x + 1) * blockSize, y * blockSize);
  ctx.stroke();
  ctx.closePath();
}

function drawPlayer() {
  var half = blockSize / 2;
  ctx.beginPath();
  ctx.arc(
    player.x * blockSize + half,
    player.y * blockSize + half,
    half,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.closePath();
}

function canMove(x, y) {
  return (
    y >= 0 &&
    y < board.length &&
    x >= 0 &&
    x < board[y].length &&
    board[y][x] != 1
  );
}

function winAlert(x, y) {
  if (board[y][x] == -1) {
    alert("How did you beat my game!?");
    clearInterval(a);
    return true;
  } else return true;
}

function keyDownHandler(e) {
  if (time > 0 && board[player.y][player.x] != -1) {
    if (
      e.which == 38 &&
      canMove(player.x, player.y - 1) &&
      winAlert(player.x, player.y - 1) //Up arrow
    )
      player.y--;
    else if (
      e.which == 40 &&
      canMove(player.x, player.y + 1) &&
      winAlert(player.x, player.y + 1) // down arrow
    )
      player.y++;
    else if (
      e.which == 37 &&
      canMove(player.x - 1, player.y) &&
      winAlert(player.x - 1, player.y)
    )
      player.x--;
    else if (
      e.which == 39 &&
      canMove(player.x + 1, player.y) &&
      winAlert(player.x + 1, player.y)
    )
      player.x++;
    draw();
  }
}

function timer() {
  if (time != 0) {
    time--;
  } else {
    alert("Game Over");
    document.location.assign(location);
  }
  document.getElementById("showTimer").innerHTML = "Time Left: " + time + "s";
}

function drawMask() {
  ctx.save();
  ctx.beginPath();
  ctx.arc(player.x * blockSize + blockSize / 2,
    player.y * blockSize + blockSize / 2, blockSize*2, 0, Math.PI * 2);
  ctx.closePath();
  // Clip to the current path
  ctx.clip();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMask();
  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < board[y].length; x++) {
      //Draw a wall
      if (board[y][x] === 1) {
        drawWall(x, y);
      } else if (board[y][x] === -1) {
        //Draw the goal
        drawGoal(x, y);
      }
    }
  }
  drawPlayer();
  ctx.restore();
}

draw();
var a = setInterval(timer, 1000);
