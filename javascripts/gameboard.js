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
  myCanvasDOMEl.setAttribute(`width`, `${w - 10}px`);
  myCanvasDOMEl.setAttribute(`height`, `${h - 30}px`);
}
setCanvasDimensions();
window.onresize = setCanvasDimensions;

// Draw board in window
function drawBoard() {
let board = new Image();
board.src = "./Images/template-snakes.png";

let positionX = 0;
let positionY = 0;
board.onload = () => {
  ctx.drawImage(board, positionX, positionY, (w / 5) * 4, h - 30);
};
}
// Draw title
// function drawTitle(){
// ctx.save();
// ctx.font = "80px Verdana";
// ctx.textAlign = "center"
// ctx.fillText("SNAKES & LADDERS", w2*0.8, h*0.12);
// ctx.restore();
// }
// Draw the space where the die animation will be displayed
function drawDieSpace() {
ctx.save();
ctx.translate((w / 5) * 4 - 30, h2);
ctx.beginPath();
ctx.rect(0, 0, w / 5 - 10, h2 - 30);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.restore();
}
// Draw die instructions to show the user how to use the die roll.
function drawDieInstructions() {
ctx.save();
ctx.translate(((w / 5) * 4) + 150, h2 + 50);
ctx.font = "30px Verdana";
ctx.textAlign = "center"
ctx.fillText("Click ENTER", 0, 0);
ctx.fillText("to THROW THE DIE", 0, 40);
ctx.restore();
}


// Draw snakes and ladders 
// TODO: making them random

function drawGameSpace() {
drawBoard();
// drawTitle()
drawDieSpace();
drawDieInstructions();
}
drawGameSpace();
