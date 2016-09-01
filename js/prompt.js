const parts = ['head', 'body', 'right-arm', 'left-arm', 'right-shoe', 'left-shoe'];
let promptArray = [];

function createPrompt() {
  promptArray = [];
  const randomizerParts = Math.floor(Math.random() * 6);
  const randomizerMoves = Math.floor(Math.random() * 3);
  promptArray.push(parts[randomizerParts]);
  promptArray.push(moves[randomizerMoves]);
  return promptArray;
}

function displayPrompt() {
  const disPrompt = createPrompt();
  const partPrompt = disPrompt[0].toUpperCase().replace('-', ' ');
  const movePrompt = disPrompt[1].toUpperCase();
  return `${movePrompt} that ${partPrompt}`;
}

function renderPrompt() {
  promptArray = [];
  console.log(promptArray);
  const divRemove = document.querySelector('#prompt-div');
  if (divRemove !== null) {
    divRemove.innerHTML = '';
    divRemove.remove();
  }
  const createPromptDiv = document.createElement('div');
  document.body.insertBefore(createPromptDiv, document.body.firstChild);
  createPromptDiv.setAttribute('id', 'prompt-div');
  createPromptDiv.className = 'fadein';
  createPromptDiv.innerHTML = displayPrompt() + '!';
}

const timer = setInterval(function() {
  renderPrompt();
}, 5000);
