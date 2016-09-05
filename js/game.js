class Game {
  constructor() {
    this.player = new Player();
    this.prompt = new Prompt();
    this.statusBarView = new StatusBarView();
    this.turnDone = false;
    this.counter = 0;
  }
  nailedMove() {
    if (promptArray[1] === this.player.reportState()[1]) {
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
  createHotMoveButton() {
    const hotMoveButton = document.createElement('button');
    hotMoveButton.innerHTML = 'GO HAM!!!';
    hotMoveButton.onclick = function () {
      game.activateHotMove();
    };
    document.body.appendChild(hotMoveButton);
  }
  activateHotMove() {
    if (this.player.hotMoveActive === true) {
      const grabMover = document.querySelector('#mover');
      grabMover.className = 'keanu';
    }
  }
  turnTimer() {
    if (this.turnDone === true) {
      clearInterval(promptTimer);
      setTimeout(function() {
        game.displayWinOrLose();
      }, 3000);
      return;
    } else if (this.counter === 0) {
      grabAudio.play();
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
    this.player.checkMoxy();
  }
  timeIsOut() {
    this.turnDone = true;
  }
  checkWin() {
    grabAudio.pause();
    return this.statusBarView.statusBar.points >= 100 ?
    'you win!!! you are a groove master!!' : 'you are a disgrace to grooving!!!';
  }
  displayWinOrLose() {
    this.prompt.clearPromptDiv();
    const createPromptDiv = document.createElement('div');
    document.body.insertBefore(createPromptDiv, document.body.firstChild);
    createPromptDiv.setAttribute('id', 'prompt-div');
    createPromptDiv.className = 'fadein';
    createPromptDiv.innerHTML = this.checkWin().toUpperCase();
  }
}
