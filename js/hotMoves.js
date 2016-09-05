class HotMoves {
  constructor() {
    this.moxyMoves = ['mc-hammer', 'keanu'];
    this.hotMoveActive = false;
  }
  checkMoxy() {
    if (game.statusBarView.statusBar.moxy === 4) {
      this.hotMoveActive = true;
    } else {
      this.hotMoveActive = false;
    }
  }
  createHotMoveButton() {
    if (this.hotMoveActive === true && document.querySelector('button') === null) {
      const hotMoveButton = document.createElement('button');
      hotMoveButton.innerHTML = 'GO HAM!!!';
      hotMoveButton.onclick = function () {
        game.hotMoves.activateHotMove();
        game.statusBarView.statusBar.addDoublePoints();
        game.statusBarView.statusBar.moxyIsW();
        game.statusBarView.updateBarValues();
        game.hotMoves.removeHotMoveButton();
      };
      document.body.appendChild(hotMoveButton);
    }
  }
  activateHotMove() {
    const grabMover = document.querySelector('#mover');
    grabMover.className = this.randomHotMoves();
  }
  randomHotMoves() {
    const randomizer = Math.floor(Math.random() * 10);
    return randomizer < 5 ? this.moxyMoves[0] : this.moxyMoves[1];
  }
  removeHotMoveButton() {
    const grabHotMoveButton = document.querySelector('button');
    grabHotMoveButton.remove();
  }
  wipeHotMove() {
    const grabMover = document.querySelector('#mover');
    grabMover.className = '';
  }
}
