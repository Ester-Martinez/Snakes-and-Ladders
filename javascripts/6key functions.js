const speed = 5; //Velocidad movimiento fichas
let numberOfPlayers = 2;
let jugadores = [1, 2]; //Número de jugadores
let numTurnos = jugadores.length;
let turn = 0; //Quien tira el dado.

function userControls() {
  window.onkeydown = function(e) {
    switch (e.key) {
      case "ArrowLeft":
        ladder0.moveLeft();
        break;
      case "ArrowRight":
        ladder0.moveRight();
        break;
      case "ArrowUp":
        ladder0.moveUp();
        break;
      case "ArrowDown":
        ladder0.moveDown();
        break;
      case "Enter":
        checkTurn();
        break;
    }
  };
}
