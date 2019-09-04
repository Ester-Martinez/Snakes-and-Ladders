const redPawnImg = new Image();
redPawnImg.src = "./Images/redPawn.png";
const yellowPawnImg = new Image();
yellowPawnImg.src = "./Images/yellowPawn.png";

class Pawn {
  constructor(image, x, y, order) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.currentPos = 0;
    this.destinyPos = 0;
    this.finalPos;
    this.order = order;
  }
  drawPawn() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, 0, 0, 28 * 1.2, 52 * 1.2);
    ctx.restore();
  }

  moveLeft() {
    this.x -= speed;
    console.log(this.x);
  }
  moveRight() {
    this.x += speed;
    console.log(this.x);
  }
  moveUp() {
    this.y -= speed;
    console.log(this.y);
  }
  moveDown() {
    this.y += speed;
    console.log(this.y);
  }
  checkPosition() {
    if (this.currentPos === this.destinyPos) {
      this.destinyPos++;
      if (this.destinyPos === this.finalPos) {
        return turn++;
      }
    } else if (this.currentPos < this.destinyPos) {
      if (this.x < this.map[this.destinyPos][0]) {
        this.moveRight();
      } else if (this.x > this.map[this.destinyPos][0]) {
        this.moveLeft();
      } else {
        if (this.y < this.map[this.destinyPos][1]) {
          this.moveDown();
        } else if (this.y > this.map[this.destinyPos][1]) {
          this.moveUp();
        }
      }
    }
  }
}
let redPawn = new Pawn(redPawnImg, 133, 560, 1);
let yellowPawn = new Pawn(yellowPawnImg, 93, 560, 2);

function drawPawns() {
  redPawn.drawPawn();
  yellowPawn.drawPawn();
}
function checkTurn() {
  if (turn === 0) {
    turn = 1;
  }
  if (turn > numberOfPlayers) {
    turn = 1;
  }
  if (redPawn.order === turn) {
    return die.roll(redPawn);
  }
  if (yellowPawn.order === turn) {
    return die.roll(yellowPawn);
  }
}
function checkPositionActivePlayer() {
  if (redPawn.order === turn) {
    return redPawn.checkPosition();
  }
  if (yellowPawn.order === turn) {
    return yellowPawn.checkPosition();
  }
}
