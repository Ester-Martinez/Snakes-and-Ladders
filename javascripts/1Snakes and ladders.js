
// Draw snakes and ladders
// TODO: making them random
const snake1 = new Image();
snake1.src = "./Images/snake1.png";
const snake2 = new Image();
snake2.src = "./Images/snake2.png";
const snake3 = new Image();
snake3.src = "./Images/snake3.png";
const snake4 = new Image();
snake4.src = "./Images/snake4.png";
const snake5 = new Image();
snake5.src = "./Images/snake-red-green-cartoon-template-ladder-long.png"

class Snake {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }
  drawSnake() {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, 200, 200);
    ctx.restore();
  }
}
let snake = new Snake(snake3, w2, h2,);
