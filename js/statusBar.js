class StatusBar {
  constructor() {
    this.points = 0;
    this.moxy = 0;
  }
  addPoints() {
    this.points += 10;
  }
  takePoints() {
    this.points -= 5;
  }
  addMoxy() {
    this.moxy += 1;
  }
  wipeMoxy() {
    this.moxy = 0;
  }
}
