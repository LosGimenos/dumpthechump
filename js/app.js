window.addEventListener('keydown', checkKeyPressed, false);

const keyInputs = [81, 87, 69];
const parts = ['head', 'booty', 'right-arm', 'left-arm', 'right-shoe', 'left-shoe'];
const moves = ['shake', 'bump', 'nene'];
let promptArray = [];
const hotMoves = ['mc-hammer', '360', 'keanu'];
const grabParts = document.querySelectorAll('.part');
const game = new Game();

function keyInputsToMoves(keyPressed) {
  for (let i = 0; i < keyInputs.length; i++) {
    if (keyPressed.keyCode === keyInputs[i]) {
      return moves[i];
    }
  }
}

function checkKeyPressed(e) {
  const findActive = document.getSelection(e).focusNode.id;
  for (let i = 0; i < grabParts.length; i++) {
    if (grabParts[i].id === findActive) {
      grabParts[i].className = 'part';
      grabParts[i].className += ' ' + keyInputsToMoves(e);
    }
  }
}

const promptTimer = setInterval(function() {
  game.turnTimer();
}, 5000);

const stageTimer = setTimeout(function() {
  game.timeIsOut();
}, 65000);

