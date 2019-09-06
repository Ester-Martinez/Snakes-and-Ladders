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
const dieOffsets = [(dieSpace.width / 3) - 10, (dieSpace.height / 3) + 10];

class Die {
  constructor(sides, sideDimension) {
    this.x = 0;
    this.y = 0;
    this.sides = sides;
    this.result = 0;
    this.sideDimension = sideDimension;
  }
  roll(pawn) {
    let rollResult = Math.floor(Math.random() * this.sides) + 1;
    pawn.finalPos += rollResult;
    if (pawn.finalPos > 45) {
      pawn.finalPos = 45;
    }
    return (this.result = rollResult);
  }
  placeDie() {
    debugger
    this.x = dieSpace.x + dieOffsets[0];
    this.y = dieSpace.y + dieOffsets[1];
    dieSpace.die = this;
  }
  drawDieImg(dieImg) {
    ctx.drawImage(
      dieImg,
      this.x,
      this.y,
      this.sideDimension,
      this.sideDimension
    );
  }
  drawDie() {
    switch (this.result) {
      case 1:
        this.drawDieImg(die1);
        break;
      case 2:
        this.drawDieImg(die2);
        break;
      case 3:
        this.drawDieImg(die3);
        break;
      case 4:
        this.drawDieImg(die4);
        break;
      case 5:
        this.drawDieImg(die5);
        break;
      case 6:
        this.drawDieImg(die6);
        break;
    }
  }
}
let die = new Die(6, 170);
