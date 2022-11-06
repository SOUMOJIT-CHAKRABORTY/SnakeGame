// Board Size
const blockSize = 25;
const rows = 20;
const cols = 20;
let board;
let context;

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); // For drawing

  update();
};

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.height, board.width);
  console.log("hii");
}
