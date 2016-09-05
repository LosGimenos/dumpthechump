class Player {
  constructor() {
    this.currentPartAndMove = [];
    this.nailedIt = false;
    this.hotMoveActive = false;
  }
  grabCurrentPartAndMove() {
    this.currentPartAndMove = [];
    console.log(promptArray);
    const whichPart = document.querySelector('#' + promptArray[0]);
    this.currentPartAndMove.push(whichPart.id);
    this.currentPartAndMove.push(whichPart.className.replace('part ', ''));
  }
  reportState() {
    return this.currentPartAndMove;
  }
  checkMoxy() {
    if (game.statusBarView.statusBar.moxy === 3) {
      this.hotMoveActive = true;
    } else if (game.statusBarView.statusBar.moxy === 0) {
      this.hotMoveActive = false;
    }
  }
}
