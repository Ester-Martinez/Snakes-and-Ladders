// Draw board in window
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
  ctx.font = "60px Chilanka";
  ctx.textAlign = "center";
  ctx.fillText("SNAKES & LADDERS", w2 * 0.7, h * 0.1);
  // ctx.restore();
}
// Draw the space where the die animation will be displayed
class DieSpace {
  constructor(
    x,
    y,
  ) {
    this.x = x;
    this.y = y;
    this.width = w * 0.3;
    this.height = h2 - 50;
    this.die = null;
  }
  drawDieSpace() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
}
let dieSpace = new DieSpace(w * 0.68, h2)

const dieInstructionsOffset = [dieSpace.width/2, 40]
// Draw die instructions to show the user how to use the die roll.
function throwDieInstructions() {
  ctx.save();
  ctx.translate(dieSpace.x + dieInstructionsOffset[0], h2 + 40);
  ctx.font = "32px Chilanka";
  ctx.textAlign = "center";
  ctx.fillText("Click anywhere", 0, 0);
  ctx.fillText("to THROW THE DIE", 0, 50);
  ctx.restore();
}
function nextTurnMessage() {
  if (redPawn.order === turn) {
  return ("Its your turn, red player")
  }
  if (yellowPawn.order === turn) {
    return ("Its your turn, yellow player")

  }}
  function drawingColor() {
    if (redPawn.order === turn) {
      return ("red")
      }
      if (yellowPawn.order === turn) {
        return ("yellow")
      }
  } 
function drawNextTurn() {
  ctx.save();
  ctx.beginPath();
  ctx.translate(w * 0.68, h2 - 110);
  ctx.fillStyle = drawingColor()
  ctx.fillRect(0, 0, dieSpace.width, 60);
  ctx.strokeRect(0, 0, dieSpace.width, 60)
  ctx.closePath();
  ctx.restore();
  ctx.save()
  ctx.beginPath()
  ctx.translate(w * 0.82, h2-70);
  ctx.font = "28px Chilanka";
  ctx.textAlign = "center";
  ctx.fillText(`${nextTurnMessage()}`, 0, 0);
  ctx.closePath()
  ctx.restore();
}
function drawGameSpace() {
  drawBoard();
  drawTitle();
  drawNextTurn();
  dieSpace.drawDieSpace();
  throwDieInstructions();
  snake0.drawSnake();
  snake1.drawSnake();
  ladder0.drawLadder();
  ladder1.drawLadder();
  drawNumbers();
}
function drawSquareInfo() {

}