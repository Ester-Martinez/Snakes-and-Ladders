var jugadores = [1, 2]; //Número de jugadores
var numTurnos = jugadores.length;
var r; //Casilla para la roja
var a; //Casilla para la amarilla.
var rojaX, rojaY, amarillaX, amarillaY; //Coordenadas de las fichas.
var turno; //Quien tira el dado.
var turnoRoja = false;
var turnoAmarilla = false;
var movimiento = 0; //Indica el avance o retroceso de la ficha que
// tiene el turno.

drawGameSpace();
drawRedPawn()

window.onload = function() {
  startGame();
};
function startGame() {
  let counter = 0;
  this.intervalID = setInterval(() => {
    counter++;
  }, 1000 / 60);
  throwDie();
}
