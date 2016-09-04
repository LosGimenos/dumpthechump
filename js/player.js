class Player {
  constructor() {
    this.currentPartAndMove = [];
    this.nailedIt = false;
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
}
