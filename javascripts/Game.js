window.onload = function() {
  drawGameSpace();
    userControls();
    drawPawns();
    drawDie();
};
function startGame() {
  let counter = 0;
  this.intervalID = setInterval(() => {
    resetCanvas();
    drawGameSpace();
    userControls();
    drawPawns();
    drawDie();
    counter++;
  }, 1000 / 60);
  
}
