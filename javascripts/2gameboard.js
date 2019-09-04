const myCanvasDOMEl = document.querySelector("#mycanvas");
const ctx = myCanvasDOMEl.getContext(`2d`);
const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;
const PI = Math.PI;
const PI_DOUBLE = Math.PI * 2;
const PI_HALF = Math.PI / 2;

// Set dimensions of the game space
function setCanvasDimensions() {
  myCanvasDOMEl.setAttribute(`width`, `${w*0.99}px`);
  myCanvasDOMEl.setAttribute(`height`, `${h*0.99}px`);
}
setCanvasDimensions();
window.onresize = setCanvasDimensions;

// Draw board in window
let board = new Image();
board.src = "./Images/template-snakes.png";

function drawBoard() {
board1.forEach((x) => {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = "black"
  ctx.fillStyle = x.color;
  ctx.rect(x.x, x.y, width, width);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
});
}

// Draw title
function drawTitle(){
// ctx.save();
ctx.font = "60px Verdana";
ctx.textAlign = "center"
ctx.fillText("SNAKES & LADDERS", w2*0.7, h*0.1);
// ctx.restore();
}

// Draw the space where the die animation will be displayed
function drawDieSpace() {
  ctx.beginPath();
  ctx.rect(w * 0.78, h2, w * 0.2, h2 - 50);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
}
// Draw die instructions to show the user how to use the die roll.
function throwDieInstructions() {
  ctx.save();
  ctx.translate(w * 0.88, h2 + 40);
  ctx.font = "28px Verdana";
  ctx.textAlign = "center";
  ctx.fillText("Click ENTER", 0, 0);
  ctx.fillText("to THROW THE DIE", 0, 50);
  ctx.restore();
}

// Draw snakes and ladders
// TODO: making them random

function drawGameSpace() {
  drawBoard();
  drawTitle()
  drawDieSpace();
  throwDieInstructions();
  
}
function resetCanvas() {
  ctx.clearRect(0, 0, w, h);
}
