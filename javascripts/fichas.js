

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
  moveLeft() {
    this.x -= speed;
    console.log(this.x)
    // if (this.position.x < 80) {
    //   this.position.x = 80;
    // }
  }
  moveRight() {
    this.x += speed;
    console.log(this.x)

    // if (this.position.x > w2 - (w2 * 1) / 5) {
    //   this.position.x = w2 - (w2 * 1) / 5;
    // }
  }
  moveUp() {
    this.y -= speed;
    console.log(this.y)

    // if (this.position.x < 80) {
    //   this.position.x = 80;
    // }
  }
  moveDown() {
    this.y += speed;
    console.log(this.y)

    // if (this.position.x > w2 - (w2 * 1) / 5) {
    //   this.position.x = w2 - (w2 * 1) / 5;
    // }
  }
}
let redPawn = new Pawn(redPawnImg, 70, 675);
let yellowPawn = new Pawn(yellowPawnImg, 100, 675);

function drawPawns() {
  redPawn.drawPawn();
  yellowPawn.drawPawn();
}




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
