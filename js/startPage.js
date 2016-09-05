class StartPage {
  constructor() {
    this.createSplash = document.createElement('div');
  }
  createSplashDiv() {
    this.createSplash.setAttribute('id', 'start');
    this.createSplash.innerHTML = 'When someone tells you that you ain\'t no Groover... You gotta..';
    document.body.appendChild(this.createSplash);
  }
  addTitle() {
    this.createSplash.innerHTML = '';
    this.createSplash.setAttribute('id', 'dump');
    this.createSplash.innerHTML = 'DUMP THE CHUMP!!';
    this.backgroundColorSwitch();
  }
  addClickToTutorial() {
    const createPressDiv = document.createElement('div');
    createPressDiv.setAttribute('id', 'press');
    createPressDiv.innerHTML = '<a href=\'#\'>click to start</a>';
    document.body.appendChild(createPressDiv);
    this.addStartGame();
  }
  backgroundColorSwitch() {
    document.body.className = 'color-switch';
  }
  addStartGame() {
    const grabAnchor = document.querySelector('a');
    grabAnchor.onclick = function () {
      document.body.backgroundColor = '#000';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundImage = 'url(\'./img/tutorial.png\')';
      document.querySelector('#dump').remove();
      grabAnchor.parentElement.remove();
      const newGroove = document.createElement('div');
      newGroove.setAttribute('id', 'next-page');
      newGroove.innerHTML = '<a href=\'#\'>click to groove</a>';
      document.body.appendChild(newGroove);
    };
  }
}

let a = new StartPage();
