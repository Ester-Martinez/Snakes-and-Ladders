// Draw snakes and ladders
const snake1Img = new Image();
snake1Img.src = "./Images/snake1.png";
const snake2Img = new Image();
snake2Img.src = "./Images/snake2.png";
const snake3Img = new Image();
snake3Img.src = "./Images/snake3.png";
const snake4Img = new Image();
snake4Img.src = "./Images/snake4.png";
const ladder1Img = new Image();
ladder1Img.src = "./Images/ladder1.png";

class Snake {
  constructor(image, x, y, num) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.num = num;
  }
  drawSnake() {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, 269, 195);
    ctx.restore();
  }
  placeSnake() {
    let pos0 = randomInt(21, 24);
    let pos1 = randomInt(41, 43);
    let snakePositions = [pos0, pos1];
    switch (this.num) {
      case 0:
        board1[snakePositions[0]].snakeIsHere = true;
        board1[snakePositions[0]].snakeXPosition =
          board1[snakePositions[0]].x - 175;
        board1[snakePositions[0]].snakeYPosition =
          board1[snakePositions[0]].y + 15;
        this.x = board1[snakePositions[0]].snakeXPosition;
        this.y = board1[snakePositions[0]].snakeYPosition;
        break;
      case 1:
        board1[snakePositions[1]].snakeIsHere = true;
        board1[snakePositions[1]].snakeXPosition =
          board1[snakePositions[1]].x - 100;
        board1[snakePositions[1]].snakeYPosition =
          board1[snakePositions[1]].y + 15;
        this.x = board1[snakePositions[1]].snakeXPosition;
        this.y = board1[snakePositions[1]].snakeYPosition;
        break;
      // case 2:
      //   board1[snakePositions[2]].snakeIsHere = true;
      //   board1[snakePositions[2]].snakeXPosition = x - 170;
      //   board1[snakePositions[2]].snakeYPosition = y + 15;
      //   this.x = board1[snakePositions[2]].snakeXPosition;
      //   this.y = board1[snakePositions[2]].snakeYPosition;
      //   break;
    }
  }
}
let snake0 = new Snake(snake1Img, w2, h2, 0);
let snake1 = new Snake(snake2Img, w2, h2, 1);
// let snake2 = new Snake(snake3Img, w2, h2, 2);

class Ladder {
  constructor(image, x, y, numLad) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.numLad = numLad;
  }
  drawLadder() {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, 167, 195);
    ctx.restore();
  }
  placeLadder() {
    let posLad0 = randomInt(5, 8);
    let posLad1 = randomInt(31, 34);
    let ladderPositions = [posLad0, posLad1];
    switch (this.numLad) {
      case 0:
        board1[ladderPositions[0]].ladderIsHere = true;
        this.x = board1[ladderPositions[0]].ladderXPosition;
        this.y = board1[ladderPositions[0]].ladderYPosition;
        break;
      case 1:
        board1[ladderPositions[1]].ladderIsHere = true;
        this.x = board1[ladderPositions[1]].ladderXPosition;
        this.y = board1[ladderPositions[1]].ladderYPosition;
        break;
    }
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
}
let ladder0 = new Ladder(ladder1Img, w2, h2, 0);
let ladder1 = new Ladder(ladder1Img, w2, h2, 1);
