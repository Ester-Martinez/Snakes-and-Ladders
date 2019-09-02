const minRolls = 8;
const maxRolls = 14;

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

function createRoll() {
  return Math.floor(Math.random() * die.sides) + 1;
}

var die = {
  sides: 6,
  roll: function() {
    let numberOfRolls = randomInt(minRolls, maxRolls);
    let rollResults = Array(numberOfRolls)
      .fill()
      .map(createRoll);
    return rollResults;
  }
};

function drawDie() {
  die.roll().forEach(function(result) {
    switch (result) {
      case 1:
          ctx.save();
          ctx.translate((w / 5) * 4 - 30, h2);
          die1.onload = () => {
          ctx.drawImage(die1, positionX, positionY, (w / 5) * 4, h - 30);}
          ctx.restore();
        break;
      case 2:
        console.log(2);
        break;
      case 3:
        console.log(3);
        break;
      case 4:
        console.log(4);
        break;
      case 5:
        console.log(5);
        break;
      case 6:
        console.log(6);
        break;
    }
  });
}
let intervalDIE = setInterval()
drawDie()
