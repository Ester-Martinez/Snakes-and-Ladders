
// Draw snakes and ladders
// TODO: making them random
const snake1Img = new Image();
snake1Img.src = "./Images/snake1.png";
const snake2Img = new Image();
snake2Img.src = "./Images/snake2.png";
const snake3Img = new Image();
snake3Img.src = "./Images/snake3.png";
const snake4Img = new Image();
snake4Img.src = "./Images/snake4.png";
const snake5Img = new Image();
snake5Img.src = "./Images/snake-red-green-cartoon-template-ladder-long.png"
const ladder1Img = new Image();
ladder1Img.src = "./Images/ladder1.png"

class Snake {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }
  drawSnake() {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, 269, 195);
    ctx.restore();
  }
}
let snake1 = new Snake(snake1Img, w2, h2);
let snake2 = new Snake(snake2Img, w2, h2);
let snake3 = new Snake(snake3Img, w2, h2);

class Ladder {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }
  drawLadder() {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, 167, 195);
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
}
let ladder = new Ladder(ladder1Img, w2, h2)