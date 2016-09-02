class Game {
  constructor() {
    this.player = new Player();
    this.prompt = new Prompt();
    this.statusBarView = new StatusBarView();
  }
  stageTimer() {

  }
  moveTimer() {

  }
  nailedMove() {
    if (promptArray[1] == this.player.reportState()[1]) {
      this.player.nailedIt = true;
    }
  }
  moveConsequences() {
    if (this.player.nailedIt === true) {
      this.statusBarView.statusBar.addPoints();
      this.statusBarView.statusBar.addMoxy();
      this.statusBarView.updateBarValues();
      this.player.nailedIt = false;
    } else {
      this.statusBarView.statusBar.takePoints();
      this.statusBarView.statusBar.wipeMoxy();
      this.statusBarView.updateBarValues();
    }
  }
}
