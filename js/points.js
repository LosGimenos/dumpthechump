class Points {
  constructor() {
    this.points = 0;
  }
  addPoints() {
    this.points += 10;
  }
  takePoints() {
    this.points -= 5;
  }
  checkPoints() {
    return this.points;
  }
}
