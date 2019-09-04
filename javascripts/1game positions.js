function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let colors = [
  "rgb(103,191,207)",
  "rgb(203,239,101)",
  "rgb(240,115,100)",
  "rgb(165,148,203)",
  "rgb(248,236,136)",
];
function createRoll() {
  return Math.floor(Math.random() * colors.length-1) + 1;
}
var randomColors = function() {

  let rollResults = Array(46)
    .fill()
    .map(createRoll);
  return rollResults;
};
class Squares {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    let player1 = false;
    let player2 = false;
  }
}

const width = 100;
let board1 = Array(46)
  .fill()
  .map((x, idx) => {
    if (idx <= 8) {
      x = idx * width;
      y = h - 110;
      color = colors[randomColors()[idx]];
    }
    if (idx === 9) {
      x = 800 - (idx - 9) * width;
      y = h - 210;
      color = colors[randomColors()[idx]];
    }
    if (idx > 9 && idx <= 17) {
      x = 800 - (idx - 9) * width;
      y = h - 230;
      color = colors[randomColors()[idx]];
    }
    if (idx === 18) {
      x = (idx - 18) * width;
      y = h - 330;
      color = colors[randomColors()[idx]];
    }
    if (idx > 18 && idx <= 26) {
      x = (idx - 18) * width;
      y = h - 350;
      color = colors[randomColors()[idx]];
    }
    if (idx === 27) {
      x = 800 - (idx - 27) * width;
      y = h - 450;
      color = colors[randomColors()[idx]];
    }
    if (idx > 27 && idx <= 35) {
      x = 800 - (idx - 27) * width;
      y = h - 470;
      color = colors[randomColors()[idx]];
    }
    if (idx === 36) {
      x = (idx - 36) * width;
      y = h - 570;
      color = colors[randomColors()[idx]];
    }
    if (idx > 36 && idx <= 44) {
      x = (idx - 36) * width;
      y = h - 590;
      color = colors[randomColors()[idx]];
    }
    if (idx === 45) {
      x = 800 - (idx - 45) * width;
      y = h - 690;
      color = colors[randomColors()[idx]];
    }
    return new Squares(x, y, color);
  })
  

// const redMap = [
//   [163, 560],
//   [303, 560],
//   [443, 560],
//   [583, 560],
//   [723, 560],
//   [863, 560],
//   [1003, 560],
//   [1143, 560],
//   [1283, 560],
//   [1283, 595],
//   [1143, 565],
//   [1003, 565],
//   [863, 565],
//   [723, 565],
//   [583, 565],
//   [443, 565],
//   [303, 565],
//   [163, 565],
//   [163, 460],
//   [303, 435],
//   [443, 435],
//   [583, 435],
//   [723, 435],
//   [863, 435],
//   [1003, 435],
//   [1143, 435],
//   [1283, 435],
//   [1283, 330],
//   [1143, 300],
//   [1003, 300],
//   [863, 300],
//   [723, 300],
//   [583, 300],
//   [443, 300],
//   [303, 300],
//   [163, 300],
//   [163, 185],
//   [303, 165],
//   [443, 165],
//   [583, 165],
//   [723, 165],
//   [863, 165],
//   [1003, 165],
//   [1143, 165],
//   [1283, 165],
//   [1283, 55]
// ];

// const yellowMap = [
//   [108, 560],
//   [248, 560],
//   [388, 560],
//   [528, 560],
//   [668, 560],
//   [808, 560],
//   [948, 560],
//   [1088, 560],
//   [1228, 560],
//   [1228, 595],
//   [1088, 565],
//   [948, 565],
//   [808, 565],
//   [668, 565],
//   [528, 565],
//   [388, 565],
//   [248, 565],
//   [108, 565],
//   [108, 460],
//   [248, 435],
//   [388, 435],
//   [528, 435],
//   [668, 435],
//   [808, 435],
//   [948, 435],
//   [1088, 435],
//   [1228, 435],
//   [1228, 330],
//   [1088, 300],
//   [948, 300],
//   [808, 300],
//   [668, 300],
//   [528, 300],
//   [388, 300],
//   [248, 300],
//   [108, 300],
//   [108, 185],
//   [248, 165],
//   [388, 165],
//   [528, 165],
//   [668, 165],
//   [808, 165],
//   [948, 165],
//   [1088, 165],
//   [1228, 165],
//   [1228, 55]
// ];
