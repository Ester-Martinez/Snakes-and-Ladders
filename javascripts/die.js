// const minRolls = 2;
// const maxRolls = 3;
var finalPosR = 0; //Casilla para la roja
var finalPosY = 0; //Casilla para la amarilla.

const die1 = new Image();
die1.src = "./Images/die1.png";
const die2 = new Image();
die2.src = "./Images/die2.png";
const die3 = new Image();
die3.src = "./Images/die3.png";
const die4 = new Image();
die4.src = "./Images/die4.png";
const die5 = new Image();
die5.src = "./Images/die5.png";
const die6 = new Image();
die6.src = "./Images/die6.png";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Die {
  constructor(sides, widthPos, heightPos, sideDimension) {
    this.sides = sides;
    this.result = 0;
    this.widthPos = widthPos;
    this.heightPos = heightPos;
    this.sideDimension = sideDimension
  }
  roll() {
    let rollResult = Math.floor(Math.random() * this.sides) + 1
    finalPos += rollResult;
    if (finalPos>45) {finalPos=45}
    return this.result = rollResult;
  }
  drawDie() {
    switch (this.result) {
      case 1:
        ctx.drawImage(die1, this.widthPos, this.heightPos, this.sideDimension, this.sideDimension);
        break;
      case 2:
        ctx.drawImage(die2, this.widthPos, this.heightPos, this.sideDimension, this.sideDimension);
        break;
      case 3:
        ctx.drawImage(die3, this.widthPos, this.heightPos, this.sideDimension, this.sideDimension);
        break;
      case 4:
        ctx.drawImage(die4, this.widthPos, this.heightPos, this.sideDimension, this.sideDimension);
        break;
      case 5:
        ctx.drawImage(die5, this.widthPos, this.heightPos, this.sideDimension, this.sideDimension);
        break;
      case 6:
        ctx.drawImage(die6, this.widthPos, this.heightPos, this.sideDimension, this.sideDimension);
        break;
    }
  }
}
let die = new Die(6, w*0.825, h*0.65, 170)
