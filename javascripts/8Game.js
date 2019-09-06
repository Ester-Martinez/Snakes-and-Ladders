// window.onload = function() {
//   startGame();
// };
window.onload = function() {
  coverImage();
};
const coverImg = new Image();
coverImg.src = "./Images/logo1.png";
const endImg = new Image();
endImg.src = "./Images/We-have-a-winner.png"

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

    if (redPawn.currentPos === 45 || yellowPawn.currentPos === 45) {
      setTimeout(() => {
        clearInterval(intervalID);
        resetCanvas();
        ctx.drawImage(endImg, 0, 0, w, h);
      }, 1000)
    }
    counter++;
  }, 1000 / 60);
}
