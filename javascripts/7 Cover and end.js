function coverImage() {
  ctx.drawImage(coverImg, w2 - 150, 40, 300, 300);
  ctx.font = "40px Chilanka";
  ctx.fillText("How to play:", 60, h2 - 50);
  ctx.font = "30px Chilanka";
  ctx.fillText(
    "✏︎  Take turns rolling the die. Your pawn will move forward the number of spaces shown on the die.",
    60,
    h2 + 60,
    w - 60
  );
  ctx.fillText(
    "✏︎  If your counter lands at the bottom of a ladder, you will move up to the top of the ladder.",
    60,
    h2 + 100,
    w - 60
  );
  ctx.fillText(
    "✏︎  If your counter lands on the head of a snake, you will slide down to the bottom of the snake.",
    60,
    h2 + 140,
    w - 60
  );
  ctx.fillText(
    "✏︎  The first player to get to the 'HOME' space is the winner.",
    60,
    h2 + 180
  );
  ctx.font = "55px Chilanka";
  ctx.textAlign = "center";
  ctx.fillText("Click to start and have fun!", w2, h2 + 270);


myCanvasDOMEl.onclick = function() {
  ctx.clearRect(0, 0, w, h);
  startGame();
};
}
