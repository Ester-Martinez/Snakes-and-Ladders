const speed = 10; //Velocidad movimiento fichas
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
