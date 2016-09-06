class PlayerView {
  constructor() {
    this.showMover = this.renderMoverDiv();
    this.showPlayer = this.renderPlayer();
  }
  renderMoverDiv() {
    const createMoverDiv = document.createElement('div');
    createMoverDiv.setAttribute('id', 'mover');
    document.body.appendChild(createMoverDiv);
  }
  renderMoverHead() {
    const grabMoverDiv = document.querySelector('#mover');
    const createMoverHead = document.createElement('div');
    createMoverHead.setAttribute('id', 'head');
    createMoverHead.tabIndex = '0';
    createMoverHead.className = 'part';
    grabMoverDiv.appendChild(createMoverHead);
  }
  renderMoverBooty() {
    const grabMoverDiv = document.querySelector('#mover');
    const createMoverBooty = document.createElement('div');
    createMoverBooty.setAttribute('id', 'booty');
    createMoverBooty.tabIndex = '0';
    createMoverBooty.className = 'part';
    grabMoverDiv.appendChild(createMoverBooty);
  }
  renderMoverRightArm() {
    const grabMoverDiv = document.querySelector('#mover');
    const createMoverRightArm = document.createElement('div');
    createMoverRightArm.setAttribute('id', 'right-arm');
    createMoverRightArm.tabIndex = '0';
    createMoverRightArm.className = 'part';
    grabMoverDiv.appendChild(createMoverRightArm);
  }
  renderMoverLeftArm() {
    const grabMoverDiv = document.querySelector('#mover');
    const createMoverLeftArm = document.createElement('div');
    createMoverLeftArm.setAttribute('id', 'left-arm');
    createMoverLeftArm.tabIndex = '0';
    createMoverLeftArm.className = 'part';
    grabMoverDiv.appendChild(createMoverLeftArm);
  }
  renderMoverRightShoe() {
    const grabMoverDiv = document.querySelector('#mover');
    const createMoverRightShoe = document.createElement('div');
    createMoverRightShoe.setAttribute('id', 'right-shoe');
    createMoverRightShoe.tabIndex = '0';
    createMoverRightShoe.className = 'part';
    grabMoverDiv.appendChild(createMoverRightShoe);
  }
  renderMoverLeftShoe() {
    const grabMoverDiv = document.querySelector('#mover');
    const createMoverLeftShoe = document.createElement('div');
    createMoverLeftShoe.setAttribute('id', 'left-shoe');
    createMoverLeftShoe.tabIndex = '0';
    createMoverLeftShoe.className = 'part';
    grabMoverDiv.appendChild(createMoverLeftShoe);
  }
  renderPlayer() {
    this.renderMoverHead();
    this.renderMoverBooty();
    this.renderMoverRightArm();
    this.renderMoverLeftArm();
    this.renderMoverRightShoe();
    this.renderMoverLeftShoe();
  }
  removePlayer() {
    const grabMoverDiv = document.querySelector('#mover');
    grabMoverDiv.remove();
  }
}
