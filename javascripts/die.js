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
          ctx.translate(w * 0.84, h * 0.7);
          ctx.clearRect(0, 0, 160, 160);
          ctx.drawImage(die1, 0, 0, 160, 160);
          ctx.restore();
        break;
      case 2:
          ctx.save();
          ctx.translate(w * 0.84, h * 0.7);
          ctx.clearRect(0, 0, 160, 160);
          ctx.drawImage(die2, 0, 0, 160, 160);
          ctx.restore();
        break;
      case 3:
          ctx.save();
          ctx.translate(w * 0.84, h * 0.7);
          ctx.clearRect(0, 0, 160, 160);
          ctx.drawImage(die3, 0, 0, 160, 160);
          ctx.restore();
        break;
      case 4:
          ctx.save();
          ctx.translate(w * 0.84, h * 0.7);
          ctx.clearRect(0, 0, 160, 160);
          ctx.drawImage(die4, 0, 0, 160, 160);
          ctx.restore();
        break;
      case 5:
          ctx.save();
          ctx.translate(w * 0.84, h * 0.7);
          ctx.clearRect(0, 0, 160, 160);
          ctx.drawImage(die5, 0, 0, 160, 160);
          ctx.restore();
        break;
      case 6:
          ctx.save();
          ctx.translate(w * 0.84, h * 0.7);
          ctx.clearRect(0, 0, 160, 160);
          ctx.drawImage(die6, 0, 0, 160, 160);
          ctx.restore();
        break;
    }
  });
}
// let intervalDIE = setInterval();
// ;
function throwDie() {
  window.onkeydown = function(e) {
    switch (e.key) {
      case "Enter":
        drawDie();
        break;
    }
  };
  counter = 0;
}