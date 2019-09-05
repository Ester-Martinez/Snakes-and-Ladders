// Draw board in window
// let board = new Image();
// board.src = "./Images/template-snakes.png";

function drawBoard() {
  board1.forEach((x) => {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = x.color;
    ctx.rect(x.x, x.y, width, width);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  });
}
function drawNumbers() {
board1.forEach((x, idx) => {
  ctx.font = "20px Verdana";
    ctx.fillStyle = "black";
    if (idx === 0) {
      ctx.fillText(`START`, x.x + 55, x.y + 25);
    } else if (idx === 45) {
      ctx.fillText(`HOME`, x.x + 50, x.y + 60);
    } else {
      ctx.fillText(`${idx}`, x.x + 20, x.y + 25);
    }
})
}

// Draw title
function drawTitle() {
  // ctx.save();
  ctx.font = "60px Verdana";
  ctx.textAlign = "center";
  ctx.fillText("SNAKES & LADDERS", w2 * 0.7, h * 0.1);
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

function drawGameSpace() {
  drawBoard();
  drawTitle();
  drawDieSpace();
  throwDieInstructions();
  snake0.drawSnake();
  snake1.drawSnake();
  // snake3.drawSnake();
  ladder0.drawLadder();
  ladder1.drawLadder();
  drawNumbers();
}
