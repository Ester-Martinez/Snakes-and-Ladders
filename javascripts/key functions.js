const speed = 10;
function userControls() {
  window.onkeydown = function(e) {
    switch (e.key) {
      case "ArrowLeft":
        redPawn.moveLeft();
        break;
      case "ArrowRight":
        redPawn.moveRight();
        break;
      case "ArrowUp":
        redPawn.moveUp();
        break;
      case "ArrowDown":
        redPawn.moveDown();
        break;
      case "Enter":
        die.roll();
        break;
    }
  };
}
