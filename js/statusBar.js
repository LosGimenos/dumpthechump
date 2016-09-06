class StatusBar {
  constructor() {
    this.points = 0;
    this.moxy = 0;
    this.doublePoints = false;
  }
  addPoints() {
    if (this.doublePoints === true) {
      this.points += 20;
    } else {
      this.points += 10;
    }
  }
  addDoublePoints() {
    this.doublePoints = true;
  }
  takePoints() {
    this.points -= 5;
  }
  addMoxy() {
    if (this.moxy < 4) {
      this.moxy += 1;
    }
  }
  moxyIsW() {
    this.moxy = '';
    this.moxy = 'WEEEEE!! 2X POINTS!';
  }
  wipeMoxy() {
    this.moxy = 0;
    this.doublePoints = false;
    if (document.querySelector('button') != null) {
      game.hotMoves.removeHotMoveButton();
    }
  }
  statusClear() {
    this.points = 0;
    this.moxy = 0;
    this.doublePoints = false;
  }
}
