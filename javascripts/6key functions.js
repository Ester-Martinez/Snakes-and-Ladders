const speed = 5; //Velocidad movimiento fichas
let numberOfPlayers = 2;
let jugadores = [1, 2]; //Número de jugadores
let numTurnos = jugadores.length;
let turn = 0; //Quien tira el dado.

function userControls() {
  myCanvasDOMEl.onclick = function() {
    dieSound.play();
    checkTurn();
  };
}
