class Game {
  constructor() {
    this.player = new Player();
    this.prompt = new Prompt();
    this.playerView = new PlayerView();
    this.statusBarView = new StatusBarView();
    this.hotMoves = new HotMoves();
    this.turnDone = false;
    this.counter = 0;
    this.promptTimer = setInterval(function () {
    game.turnTimer();
    }, 5000);
    this.stageTimer = setTimeout(function () {
    game.timeIsOut();
    }, 70000);
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
      this.hotMoves.wipeHotMove();
      this.statusBarView.updateBarValues();
    }
  }
  turnTimer() {
    if (this.turnDone === true) {
      clearInterval(game.promptTimer);
      setTimeout(function() {
        game.displayWinOrLose();
        game.displayPlayAgain();
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
    this.hotMoves.checkMoxy();
    this.hotMoves.createHotMoveButton();
  }
  timeIsOut() {
    this.turnDone = true;
  }
  checkWin() {
    grabAudio.pause();
    return this.statusBarView.statusBar.points >= 120 ?
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
  displayPlayAgain() {
    const againDiv = document.createElement('div');
    againDiv.setAttribute('id', 'next-page');
    againDiv.innerHTML = '<a href=\'#\'>click to groove again</a>';
    document.body.appendChild(againDiv);
    againDiv.onclick = function () {
      location.reload();
    };
  }
}
