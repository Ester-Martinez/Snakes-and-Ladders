const myCanvasDOMEl = document.querySelector("#mycanvas");
const ctx = myCanvasDOMEl.getContext(`2d`);
const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;
const PI = Math.PI;
const PI_DOUBLE = Math.PI * 2;
const PI_HALF = Math.PI / 2;

// Set dimensions of the game space
function setCanvasDimensions() {
  myCanvasDOMEl.setAttribute(`width`, `${w * 0.99}px`);
  myCanvasDOMEl.setAttribute(`height`, `${h * 0.99}px`);
}
setCanvasDimensions();
window.onresize = setCanvasDimensions;

function resetCanvas() {
  ctx.clearRect(0, 0, w, h);
}