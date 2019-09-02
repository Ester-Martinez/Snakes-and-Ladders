drawGameSpace();


window.onload = function() {
  startGame();
}
function startGame() {
  let counter = 0;
  this.intervalID = setInterval(() => {
    counter++;
  }, 1000 / 60);
  throwDie();
}