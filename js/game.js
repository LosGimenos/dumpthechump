class Game {
  constructor() {
    this.player = new Player();
    this.prompt = new Prompt();
    this.statusBarView = new StatusBarView();
    this.turnDone = false;
    this.counter = 0;
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
  turnTimer() {
    if (this.turnDone === true) {
      clearInterval(promptTimer);
      return;
    } else if (this.counter === 0) {
      this.prompt.displayReady();
    } else if (this.counter > 1) {
      this.player.grabCurrentPartAndMove();
      this.nailedMove();
      this.moveConsequences();
    }
    if (this.counter >= 1) {
      this.prompt.renderPrompt();
    }
    this.counter += 1;
  }
  timeIsOut() {
    this.turnDone = true;
  }
}
