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
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, 0, 0, 28 * 1.5, 52 * 1.5);
    ctx.restore();
  }
  moveLeft() {
    this.x -= speed;
    console.log(this.x)
  }
  moveRight() {
    this.x += speed;
    console.log(this.x)
  }
  moveUp() {
    this.y -= speed;
    console.log(this.y)
  }
  moveDown() {
    this.y += speed;
    console.log(this.y)
  }
}
let redPawn = new Pawn(redPawnImg, 163, 700);
let yellowPawn = new Pawn(yellowPawnImg, 108, 700);


function drawPawns() {
  redPawn.drawPawn();
  yellowPawn.drawPawn();
}