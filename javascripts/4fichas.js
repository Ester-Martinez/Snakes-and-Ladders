const redPawnImg = new Image();
redPawnImg.src = "./Images/redPawn.png";
const yellowPawnImg = new Image();
yellowPawnImg.src = "./Images/yellowPawn.png";

class Pawn {
  constructor(image, x, y, order, map) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.currentPos = 0;
    this.destinyPos = 0;
    this.finalPos;
    this.order = order;
    this.map = map;
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
    debugger
    switch (this.currentPos) {
      case this.currentPos === this.destinyPos:
        this.destinyPos++;
        if (this.destinyPos === this.finalPos) {
          return;
        }
        break;
      case this.currentPos < this.destinyPos:
        if (this.x < this.map[this.destinyPos][0]) {
          moveRight();
        } else if (this.x > this.map[this.destinyPos][0]) {
          moveLeft();
        } else {
          if (this.y < this.map[this.destinyPos][1]) {
            moveDown();
          } else if (this.y > this.map[this.destinyPos][1]) {
            moveUp();
          }
        }
    }
  }
}
let redPawn = new Pawn(redPawnImg, 133, 560, 1, redMap);
let yellowPawn = new Pawn(yellowPawnImg, 93, 560, 2, yellowMap);

function drawPawns() {
  redPawn.drawPawn();
  yellowPawn.drawPawn();
}
function checkTurn() {
  if (turn > numberOfPlayers) {
    turn = 1;
  }
  if (redPawn.order === turn) {
    turn++;
    return die.roll(redPawn);
  }
  if (yellowPawn.order === turn) {
    turn++;
    return die.roll(yellowPawn);
  }
}
