class Player {
  constructor() {
    this.currentPartAndMove = [];
    this.nailedIt = false;
  }
  grabCurrentPartAndMove() {
    this.currentPartAndMove = [];
    const whichPart = document.querySelector('#' + promptArray[0]);
    this.currentPartAndMove.push(whichPart.id);
    this.currentPartAndMove.push(whichPart.className.replace('part ', ''));
    console.log(this.currentPartAndMove);
  }
  reportState() {
    return this.currentPartAndMove;
  }
}
