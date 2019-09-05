function checkPosition() {
  function checkLadderActive() {
    if (
      this.x === board1[this.destinyPos].playerRedXPos &&
      this.y === board1[this.destinyPos].playerRedYPos
    ) {
      this.currentPos++;
      if (this.currentPos === this.finalPos) {
        this.ladderActive = !this.ladderActive;
        ++turn;
      }
    } else if (this.y < board1[this.finalPos].playerRedYPos) {
      this.moveDown();
    } else if (this.y > board1[this.finalPos].playerRedYPos) {
      this.moveUp();
    } else if (this.x < board1[this.finalPos].playerRedXPos) {
      this.moveRight();
    } else if (this.x > board1[this.finalPos].playerRedXPos) {
      this.moveLeft();
    }
  }
  function checkSnakeActive() {
    if (this.snakeActive) {
    }
  }
  function ActivOrDeactLadder() {
    if (board1[this.finalPos].ladderIsHere) {
      this.ladderActive = true;
      switch (this.finalPos) {
        case 5:
          this.finalPos = 13;
          break;
        case 6:
          this.finalPos = 12;
          break;
        case 7:
          this.finalPos = 11;
          break;
        case 8:
          this.finalPos = 10;
          break;
        case 31:
          this.finalPos = 41;
          break;
        case 32:
          this.finalPos = 40;
          break;
        case 33:
          this.finalPos = 39;
          break;
        case 34:
          this.finalPos = 38;
          break;
      }
    } else {
      this.ladderActive = false;
      ++turn;
    }
  }
  function checkCurrentPosFinal() {
    if (this.currentPos === this.finalPos) {
      ActivOrDeactLadder();
    }
  }
  function checkCurrentPosDest() {
    if (this.currentPos === this.destinyPos) {
      this.destinyPos++;
    } else {
      if (
        this.x === board1[this.destinyPos].playerRedXPos &&
        this.y === board1[this.destinyPos].playerRedYPos
      ) {
        this.currentPos++;
        checkCurrentPosFinal();
      }
    }
  }
  function checkX(playerX) {
    if (this.x < board1[this.destinyPos].playerX) {
      this.moveRight();
    } else if (this.x > board1[this.destinyPos].playerX) {
      this.moveLeft();
    }
  }
  function checkY(playerY) {
    if (this.y < board1[this.destinyPos].playerY) {
      this.moveDown();
    } else if (this.y > board1[this.destinyPos].playerY) {
      this.moveUp();
    }
  }
  if (this.color === "red") {
    checkLadderActive();
    checkSnakeActive();
    if (this.currentPos < this.finalPos) {
      checkCurrentPosDest();
      checkX(playerX);
      checkY(playerY);
    }
  }
  if (this.color === "yellow") {
    if (this.ladderActive) {
      if (
        this.x === board1[this.destinyPos].PlayerYellXPos &&
        this.y === board1[this.destinyPos].PlayerYellYPos
      ) {
        this.currentPos++;
        if (this.currentPos === this.finalPos) {
          this.ladderActive = false;
          ++turn;
        }
      } else if (this.y < board1[this.finalPos].PlayerYellYPos) {
        this.moveDown();
      } else if (this.y > board1[this.finalPos].PlayerYellYPos) {
        this.moveUp();
      } else if (this.x < board1[this.finalPos].PlayerYellXPos) {
        this.moveRight();
      } else if (this.x > board1[this.finalPos].PlayerYellXPos) {
        this.moveLeft();
      }
    }
    if (this.snakeActive) {
    } else {
      if (this.currentPos < this.finalPos) {
        if (this.currentPos === this.destinyPos) {
          this.destinyPos++;
        } else {
          if (
            this.x === board1[this.destinyPos].PlayerYellXPos &&
            this.y === board1[this.destinyPos].PlayerYellYPos
          ) {
            this.currentPos++;
            if (this.currentPos === this.finalPos) {
              if (board1[this.finalPos].ladderIsHere) {
                this.ladderActive = true;
                switch (this.finalPos) {
                  case 5:
                    this.finalPos = 13;
                    break;
                  case 6:
                    this.finalPos = 12;
                    break;
                  case 7:
                    this.finalPos = 11;
                    break;
                  case 8:
                    this.finalPos = 10;
                    break;
                  case 31:
                    this.finalPos = 41;
                    break;
                  case 32:
                    this.finalPos = 40;
                    break;
                  case 33:
                    this.finalPos = 39;
                    break;
                  case 34:
                    this.finalPos = 38;
                    break;
                }
              } else {
                ++turn;
              }
            }
          } else if (this.y < board1[this.destinyPos].PlayerYellYPos) {
            this.moveDown();
          } else if (this.y > board1[this.destinyPos].PlayerYellYPos) {
            this.moveUp();
          } else if (this.x < board1[this.destinyPos].PlayerYellXPos) {
            this.moveRight();
          } else if (this.x > board1[this.destinyPos].PlayerYellXPos) {
            this.moveLeft();
          }
        }
      }
    }
  }
}


