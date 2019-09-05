function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let colors = [
  "rgb(103,191,207)",
  "rgb(203,239,101)",
  "rgb(240,115,100)",
  "rgb(165,148,203)",
  "rgb(248,236,136)",
  "white"
];
function randomColors() {
  function createRoll() {
    return Math.floor(Math.random() * colors.length - 1) + 1;
  }
  let rollResults = Array(400)
    .fill()
    .map(createRoll);
  function noDuplicates(this_array) {
    var i = 1;
    while (i < this_array.length) {
      if (
        this_array[i] === this_array[i - 1] ||
        this_array[i] === this_array[i - 2] ||
        this_array[i] === this_array[i - 3] ||
        this_array[i] === this_array[i - 4]
      ) {
        this_array.splice(i, 1);
      } else {
        i++;
      }
    }
    return this_array;
  }
  return noDuplicates(rollResults);
}
let randomColorsToPaint = randomColors();

class Squares {
  constructor(
    x,
    y,
    color
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.playerRedXPos = x + 20;
    this.playerRedYPos = y + 27;
    this.PlayerYellXPos = x + 59;
    this.PlayerYellYPos = y + 27;
    this.snakeIsHere = false;
    this.ladderIsHere = false;
    this.snakeXPosition = 0;
    this.snakeYPosition = 0;
    this.ladderXPosition = x - 17;
    this.ladderYPosition = y - 95;

  }
}

const width = 100;
const padding = 60;
let board1 = Array(46)
  .fill()
  .map((x, idx) => {
    if (idx <= 8) {
      x = idx * width + padding;
      y = h - 110;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx === 9) {
      x = 800 - (idx - 9) * width + padding;
      y = h - 210;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx > 9 && idx <= 17) {
      x = 800 - (idx - 9) * width + padding;
      y = h - 230;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx === 18) {
      x = (idx - 18) * width + padding;
      y = h - 330;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx > 18 && idx <= 26) {
      x = (idx - 18) * width + padding;
      y = h - 350;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx === 27) {
      x = 800 - (idx - 27) * width + padding;
      y = h - 450;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx > 27 && idx <= 35) {
      x = 800 - (idx - 27) * width + padding;
      y = h - 470;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx === 36) {
      x = (idx - 36) * width + padding;
      y = h - 570;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx > 36 && idx <= 44) {
      x = (idx - 36) * width + padding;
      y = h - 590;
      color = colors[randomColorsToPaint[idx]];
    }
    if (idx === 45) {
      x = 800 - (idx - 45) * width + padding;
      y = h - 690;
      color = colors[randomColorsToPaint[idx]];
    }
    return new Squares(
      x,
      y,
      color,
    );
  });
