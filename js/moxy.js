class Moxy {
  constructor() {
    this.moxy = null;
  }
  addMoxy() {
    this.moxy += 1;
  }
  wipeMoxy() {
    this.moxy = 0;
  }
  checkMoxy() {
    return this.moxy;
  }
}
