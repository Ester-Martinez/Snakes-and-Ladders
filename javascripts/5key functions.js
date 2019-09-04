const speed = 5; //Velocidad movimiento fichas
let numberOfPlayers = 2;
let jugadores = [1, 2]; //Número de jugadores
let numTurnos = jugadores.length;
let currentPos = 0;
let turn = 0; //Quien tira el dado.

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
        checkTurn();
        break;
    }
  };
}
