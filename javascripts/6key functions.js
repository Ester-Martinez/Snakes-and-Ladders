const speed = 5; //Velocidad movimiento fichas
let numberOfPlayers = 2;
let jugadores = [1, 2]; //Número de jugadores
let numTurnos = jugadores.length;
let turn = 0; //Quien tira el dado.

function userControls() {
  window.onkeydown = function(e) {
    switch (e.key) {
      case "Enter":
        checkTurn();
        break;
    }
  };
}
