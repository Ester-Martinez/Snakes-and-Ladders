const speed = 10; //Velocidad movimiento fichas
let jugadores = [1, 2]; //Número de jugadores
let numTurnos = jugadores.length;
let currentPos = 0;
let turno; //Quien tira el dado.
let turnRed = false;
let turnYellow = false;
let movimiento = 0; //Indica el avance o retroceso de la ficha que
// tiene el turno.

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
