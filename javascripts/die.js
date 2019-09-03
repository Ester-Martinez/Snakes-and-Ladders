const minRolls = 2;
const maxRolls = 3;

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
var die = {
  sides: 6,
  result: 0,
  roll() {
    return this.result = Math.floor(Math.random() * die.sides) + 1;
  }
};

function drawDie() {
  switch (die.result) {
    case 1:
      ctx.drawImage(die1, w * 0.825, h * 0.68, 200, 200);
      break;
    case 2:
      ctx.drawImage(die2, w * 0.825, h * 0.68, 200, 200);
      break;
    case 3:
      ctx.drawImage(die3, w * 0.825, h * 0.68, 200, 200);
      break;
    case 4:
      ctx.drawImage(die4, w * 0.825, h * 0.68, 200, 200);
      break;
    case 5:
      ctx.drawImage(die5, w * 0.825, h * 0.68, 200, 200);
      break;
    case 6:
      ctx.drawImage(die6, w * 0.82, h * 0.68, 200, 200);
      break;
  }
}

