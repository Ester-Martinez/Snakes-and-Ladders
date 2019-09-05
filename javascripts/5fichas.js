const redPawnImg = new Image();
redPawnImg.src = "./Images/redPawn.png";
const yellowPawnImg = new Image();
yellowPawnImg.src = "./Images/yellowPawn.png";
const pawnOffsets = [[20, 27], [59, 27]];

class Pawn {
  constructor(image, order, color) {
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.color = color;
    this.currentPos = 0;
    this.finalPos = 0;
    this.order = order;
    this.ladderActive = false;
    this.snakeActive = false;
  }
  drawPawn() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, 0, 0, 28 * 1.2, 52 * 1.2);
    ctx.restore();
  }
  resetPawn() {
    this.x = board1[0].x + pawnOffsets[this.order][0];
    this.y = board1[0].y + pawnOffsets[this.order][1];
    if (this.color === "red") {
      board1[0].redPlayer = this;
    } else {
      board1[0].yellowPlayer = this;
    }
  }
  moveLeft() {
    this.x -= speed;
  }
  moveRight() {
    this.x += speed;
  }
  moveUp() {
    this.y -= speed;
  }
  moveDown() {
    this.y += speed;
  }
  checkPosition() {
    if (this.ladderActive) {
      let auxLadder = board1[this.currentPos].ladder;
      this.finalPos = auxLadder.finalBox;
      if (this.y < board1[this.finalPos].y + pawnOffsets[this.order][1]) {
        this.moveDown();
      } else if (
        this.y >
        board1[this.finalPos].y + pawnOffsets[this.order][1]
      ) {
        this.moveUp();
      }
      if (this.x < board1[this.finalPos].x + pawnOffsets[this.order][0]) {
        this.moveRight();
      } else if (
        this.x >
        board1[this.finalPos].x + pawnOffsets[this.order][0]
      ) {
        this.moveLeft();
      }
      if (
        this.x === board1[this.finalPos].x + pawnOffsets[this.order][0] &&
        this.y === board1[this.finalPos].y + pawnOffsets[this.order][1]
      ) {
        this.currentPos = this.finalPos;
        turn++;
        this.ladderActive = false;
      }
    } else if (this.snakeActive) {
      let auxSnake = board1[this.currentPos].snake;
      this.finalPos = auxSnake.finalBox;
      if (this.y < board1[this.finalPos].y + pawnOffsets[this.order][1]) {
        this.moveDown();
      } else if (
        this.y >
        board1[this.finalPos].y + pawnOffsets[this.order][1]
      ) {
        this.moveUp();
      }
      if (this.x < board1[this.finalPos].x + pawnOffsets[this.order][0]) {
        this.moveRight();
      } else if (
        this.x >
        board1[this.finalPos].x + pawnOffsets[this.order][0]
      ) {
        this.moveLeft();
      }
      if (
        this.x === board1[this.finalPos].x + pawnOffsets[this.order][0] &&
        this.y === board1[this.finalPos].y + pawnOffsets[this.order][1]
      ) {
        this.currentPos = this.finalPos;
        turn++;
        this.snakeActive = false;
      }
    } else {
      if (this.currentPos < this.finalPos) {
        if (
          this.x ===
            board1[this.currentPos + 1].x + pawnOffsets[this.order][0] &&
          this.y === board1[this.currentPos + 1].y + pawnOffsets[this.order][1]
        ) {
          this.currentPos++;
          if (
            this.x === board1[this.finalPos].x + pawnOffsets[this.order][0] &&
            this.y === board1[this.finalPos].y + pawnOffsets[this.order][1]
          ) {
            if (!this.checkLadder() && !this.checkSnake()) {
              turn++;
            }
          }
        } else {
          if (
            this.y <
            board1[this.currentPos + 1].y + pawnOffsets[this.order][1]
          ) {
            this.moveDown();
          } else if (
            this.y >
            board1[this.currentPos + 1].y + pawnOffsets[this.order][1]
          ) {
            this.moveUp();
          } else if (
            this.x <
            board1[this.currentPos + 1].x + pawnOffsets[this.order][0]
          ) {
            this.moveRight();
          } else if (
            this.x >
            board1[this.currentPos + 1].x + pawnOffsets[this.order][0]
          ) {
            this.moveLeft();
          }
        }
      }
    }
  }
  checkLadder() {
    debugger
    if (board1[this.currentPos].ladder != null) {
      this.ladderActive = true;
      return true;
    } else {
      return false;
    }
  }
  checkSnake() {
    if (board1[this.currentPos].snake != null) {
      this.snakeActive = true;
      return true;
    } else {
      return false;
    }
  }
}

let redPawn = new Pawn(redPawnImg, 0, "red");
let yellowPawn = new Pawn(yellowPawnImg, 1, "yellow");

function drawPawns() {
  redPawn.drawPawn();
  yellowPawn.drawPawn();
}
function checkTurn() {
  if (turn === -1) {
    turn = 0;
  }
  if (turn >= numberOfPlayers) {
    turn = 0;
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
