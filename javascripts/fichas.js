function resetCanvas() {
  ctx.clearRect(0, 0, w, h);
}

const redPawnImg = new Image();
redPawnImg.src = "./Images/redPawn.png";
const yellowPawnImg = new Image();
yellowPawnImg.src = "./Images/yellowPawn.png";

class Pawn {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }
  drawPawn() {
    // this.image.onload = function() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, 0, 0, 28 * 1.5, 52 * 1.5);
    ctx.restore();
    // }
  }
  moveRight(){
    
  }
}
let redPawn = new Pawn(redPawnImg, 70, h * 0.8);
let yellowPawn = new Pawn(yellowPawnImg, 100, h * 0.8);

function drawPawns() {
  redPawn.drawPawn();
  yellowPawn.drawPawn();
}
redPawnImg.onload = drawPawns;

// var redX = 70;
// var redY = h * 0.8;
// var yellowX = 100;
// var yellowY = h * 0.8;
// function drawRedPawn() {
//   redPawn.onload = function() {
//     ctx.save();
//     ctx.translate(redX, redY);
//     ctx.drawImage(redPawn, 0, 0, 28 * 1.5, 52 * 1.5);
//     ctx.restore();
//   };
// }
// function drawYellowPawn() {
//   yellowPawn.onload = function() {
//     ctx.save();
//     ctx.translate(yellowX, yellowY);
//     ctx.drawImage(yellowPawn, 0, 0, 28 * 1.5, 52 * 1.5);
//     ctx.restore();
//   };
// }
