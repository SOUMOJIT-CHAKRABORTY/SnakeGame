// Board Size
const blockSize = 25;
const rows = 20;
const cols = 20;
let board;
let context;

// Snake Head
const snakeX = blockSize * 5;
const snakeY = blockSize * 5;

// Speed and Direction
const velocityX = 0;
const velocityY = 0;

// Food
let foodX; //= blockSize * 10;
let foodY; //= blockSize * 10;

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); // For drawing
  placeFood();
  document.addEventListener("keyup", changeDirection);

  update();
  //setInterval(update, 1000 / 10);
};

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.height, board.width);

  context.fillStyle = "lime";
  // snakeX += velocityX;
  // snakeY += velocityY;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

function changeDirection(e) {
  if (e.code == "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * rows) * blockSize;
  foodY = Math.floor(Math.random() * cols) * blockSize;
}
