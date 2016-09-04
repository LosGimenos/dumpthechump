class Prompt {
  constructor() {
  }
  createPrompt() {
    promptArray = [];
    const randomizerParts = Math.floor(Math.random() * 6);
    const randomizerMoves = Math.floor(Math.random() * 3);
    promptArray.push(parts[randomizerParts]);
    promptArray.push(moves[randomizerMoves]);
    return promptArray;
}
  displayPrompt() {
    const disPrompt = this.createPrompt();
    const partPrompt = disPrompt[0].toUpperCase().replace('-', ' ');
    const movePrompt = disPrompt[1].toUpperCase();
    return `${movePrompt} that ${partPrompt}`;
}
  renderPrompt() {
    promptArray = [];
    const divRemove = document.querySelector('#prompt-div');
    if (divRemove !== null) {
      divRemove.innerHTML = '';
      divRemove.remove();
    }
    const createPromptDiv = document.createElement('div');
    document.body.insertBefore(createPromptDiv, document.body.firstChild);
    createPromptDiv.setAttribute('id', 'prompt-div');
    createPromptDiv.className = 'fadein';
    createPromptDiv.innerHTML = this.displayPrompt() + '!';
  }
  displayReady() {
    const createPromptDiv = document.createElement('div');
    document.body.insertBefore(createPromptDiv, document.body.firstChild);
    createPromptDiv.setAttribute('id', 'prompt-div');
    createPromptDiv.className = 'fadein';
    createPromptDiv.innerHTML = 'GET READY TO BOOGIE!!!';
  }
}
