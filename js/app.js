window.addEventListener('keydown', checkKeyPressed, false);

const keyInputs = [81, 87, 69];
const parts = ['head', 'booty', 'right-arm', 'left-arm', 'right-shoe', 'left-shoe'];
const moves = ['shake', 'bump', 'nene'];
let promptArray = [];
const grabAudio = document.querySelector('audio');
const startPage = new StartPage();
let game;

function keyInputsToMoves(keyPressed) {
  for (let i = 0; i < keyInputs.length; i++) {
    if (keyPressed.keyCode === keyInputs[i]) {
      return moves[i];
    }
  }
}

function checkKeyPressed(e) {
  const grabParts = document.querySelectorAll('.part');
  const findActive = document.getSelection(e).focusNode.id;
  for (let i = 0; i < grabParts.length; i++) {
    if (grabParts[i].id === findActive) {
      grabParts[i].className = 'part';
      grabParts[i].className += ' ' + keyInputsToMoves(e);
    }
  }
}
