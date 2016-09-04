class Player {
  constructor() {
    this.currentPartAndMove = [];
    this.nailedIt = false;
  }
  grabCurrentPartAndMove() {
    this.currentPartAndMove = [];
    console.log(promptArray);
    const whichPart = document.querySelector('#' + promptArray[0]);
    console.log(whichPart);
    this.currentPartAndMove.push(whichPart.id);
    this.currentPartAndMove.push(whichPart.className.replace('part ', ''));
    console.log(this.currentPartAndMove);
  }
  reportState() {
    return this.currentPartAndMove;
  }
}
