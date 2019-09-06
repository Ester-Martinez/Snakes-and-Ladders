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
ladder1Img.src = "./Images/ladder0-inverso.png";
const ladder2Img = new Image();
ladder2Img.src = "./Images/ladder0.png";
const snakeCoordinates = [
  [[20, 17], [21, 16], [22, 15], [23, 14]],
  [[41, 30], [42, 29], [43, 28]]
];
const ladderCoordinates = [
  [[5, 13], [6, 12], [7, 11], [8, 10]],
  [[32, 40], [33, 39], [34, 38]]
];
const snakeOffsets = [[-175, 15], [-100, 15]];
const ladderOffsets = [[-82, -145], [13, -145]];

class Snake {
  constructor(image, x, y, num) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.num = num;
    this.initialBox;
    this.finalBox;
  }
  drawSnake() {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, 269, 195);
    ctx.restore();
  }
  placeSnake() {
    let box = randomInt(0, snakeCoordinates[this.num].length - 1);
    this.initialBox = snakeCoordinates[this.num][box][0];
    this.finalBox = snakeCoordinates[this.num][box][1];
    board1[this.initialBox].snake = this;
    this.x = board1[this.initialBox].x + snakeOffsets[this.num][0];
    this.y = board1[this.initialBox].y + snakeOffsets[this.num][1];
  }
}
let snake0 = new Snake(snake1Img, w2, h2, 0);
let snake1 = new Snake(snake2Img, w2, h2, 1);

class Ladder {
  constructor(image, x, y, num) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.num = num;
    this.initialBox;
    this.finalBox;
  }
  drawLadder() {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, 180, 270);
    ctx.restore();
  }
  placeLadder() {
    let box = randomInt(0, ladderCoordinates[this.num].length - 1);
    this.initialBox = ladderCoordinates[this.num][box][0];
    this.finalBox = ladderCoordinates[this.num][box][1];
    board1[this.initialBox].ladder = this;
    this.x = board1[this.initialBox].x + ladderOffsets[this.num][0];
    this.y = board1[this.initialBox].y + ladderOffsets[this.num][1];
  }
}
let ladder0 = new Ladder(ladder1Img, w2, h2, 0);
let ladder1 = new Ladder(ladder2Img, w2, h2, 1);
