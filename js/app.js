window.addEventListener('keydown', checkKeyPressed, false);

const keyInputs = [81, 87, 69];
const moves = ['shake', 'bump', 'nene'];
const hotMoves = ['move'];
const grabParts = document.querySelectorAll('.part');

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
