window.addEventListener('keydown', checkKeyPressed, false);

const keyInputs = [81, 87, 69];
const parts = ['head', 'body', 'right-arm', 'left-arm', 'right-shoe', 'left-shoe'];
const moves = ['shake', 'bump', 'nene'];
let promptArray = [];
const hotMoves = ['mc-hammer', '360', 'keanu'];
const grabParts = document.querySelectorAll('.part');
const game = new Game();
let turnDone = false;
let counter = 0;

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
    turnTimer();
  }, 5000);

  function turnTimer() {
    if (turnDone === true) {
      clearInterval(promptTimer);
      return;
    } else if (counter === 0) {
      console.log('counter is 0');
      game.prompt.displayReady();
    } else if (counter > 1) {
        game.player.grabCurrentPartAndMove();
        game.nailedMove();
        game.moveConsequences();
        console.log('heres where I check things');
      }
    if (counter >= 1) {
      game.prompt.renderPrompt();
  }
      counter += 1;
    }

