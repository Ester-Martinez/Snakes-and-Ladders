const redPawnImg = new Image();
redPawnImg.src = "./Images/redPawn.png";
const yellowPawnImg = new Image();
yellowPawnImg.src = "./Images/yellowPawn.png";

class Pawn {
  constructor(image, x, y, order, color) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.color = color;
    this.currentPos = 0;
    this.destinyPos = 0;
    this.finalPos = 0;
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
    if (this.color === "red") {
      if (this.currentPos < this.finalPos) {
        if (this.currentPos === this.destinyPos) {
          this.destinyPos++;
        } else {
          if (
            this.x === board1[this.destinyPos].playerRedXPos &&
            this.y === board1[this.destinyPos].playerRedYPos
          ) {
            this.currentPos++;
            if (this.currentPos === this.finalPos) {
              ++turn;
            }
          } else if (this.y < board1[this.destinyPos].playerRedYPos) {
            this.moveDown();
          } else if (this.y > board1[this.destinyPos].playerRedYPos) {
            this.moveUp();
          } else if (this.x < board1[this.destinyPos].playerRedXPos) {
            this.moveRight();
          } else if (this.x > board1[this.destinyPos].playerRedXPos) {
            this.moveLeft();
          }
        }
      }
    }
    if (this.color === "yellow") {
      if (this.currentPos < this.finalPos) {
        if (this.currentPos === this.destinyPos) {
          this.destinyPos++;
        } else {
          if (
            this.x === board1[this.destinyPos].PlayerYellXPos &&
            this.y === board1[this.destinyPos].PlayerYellYPos
          ) {
            this.currentPos++;
            if (this.currentPos === this.finalPos) {
              ++turn;
            }
          } else if (this.y < board1[this.destinyPos].PlayerYellYPos) {
            this.moveDown();
          } else if (this.y > board1[this.destinyPos].PlayerYellYPos) {
            this.moveUp();
          } else if (this.x < board1[this.destinyPos].PlayerYellXPos) {
            this.moveRight();
          } else if (this.x > board1[this.destinyPos].PlayerYellXPos) {
            this.moveLeft();
          }
        }
      }
    }
  }
}

let redPawn = new Pawn(
  redPawnImg,
  board1[0].playerRedXPos,
  board1[0].playerRedYPos,
  1,
  "red"
);
let yellowPawn = new Pawn(
  yellowPawnImg,
  board1[0].PlayerYellXPos,
  board1[0].PlayerYellYPos,
  2,
  "yellow"
);

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
    die.roll(redPawn);
  }
  if (yellowPawn.order === turn) {
    die.roll(yellowPawn);
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
