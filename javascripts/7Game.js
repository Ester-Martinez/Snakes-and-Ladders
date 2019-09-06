window.onload = function() {
  startGame();
};
// window.onload = function() {
//   coverImage();
// }
// function coverImage() {
// let coverImg = new Image();
// coverImg.src = "./Images/Portada.png";

// coverImg.onload = function() {
//   ctx.drawImage(coverImg, 0, 0, w, h);
//   }

// myCanvasDOMEl.onclick = function() {
//   ctx.clearRect(0, 0, w, h);
//   startGame();
// }
// }


snake0.placeSnake();
snake1.placeSnake();
ladder0.placeLadder();
ladder1.placeLadder();
redPawn.resetPawn();
yellowPawn.resetPawn();
die.placeDie();
function startGame() {
  let counter = 0;
  this.intervalID = setInterval(() => {
    resetCanvas();
    drawGameSpace();
    userControls();
    drawPawns();
    die.drawDie();
    checkPositionActivePlayer();
    drawNextTurn();

    if (redPawn.currentPos === 45 || yellowPawn.currentPos === 45) {
      clearInterval(intervalID);
    }
    counter++;
  }, 1000 / 60);
}
