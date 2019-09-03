window.onload = function() {
  startGame();
};
function startGame() {
  let counter = 0;
  this.intervalID = setInterval(() => {
    resetCanvas();
    userControls();
    drawGameSpace();
    drawPawns();
    drawDie();
    counter++;
  }, 1000 / 60);
  
}
