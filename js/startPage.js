class StartPage {
  constructor() {
    this.createSplash = document.createElement('div');
    this.showSplashDiv = this.createSplashDiv();
    this.showTitleTimer = this.createTitleTimer();
  }
  createSplashDiv() {
    this.createSplash.setAttribute('id', 'start');
    this.createSplash.innerHTML = 'When someone tells you that you ain\'t no Groover... You gotta..';
    document.body.appendChild(this.createSplash);
  }
  createTitleTimer() {
    const titleTimer = setTimeout(function () {
    startPage.addTitle();
    startPage.createTutorialTimer();
    }, 4000);
  }
  createTutorialTimer() {
    const tutorialTimer = setTimeout(function () {
    startPage.addClickToTutorial();
    }, 2000);
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
    let grabAnchor = document.querySelector('a');
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
      grabAnchor = document.querySelector('#next-page');
      grabAnchor.onclick = function () {
        document.body.style.backgroundImage = '';
        document.body.style.backgroundImage = 'url(\'http://vignette3.wikia.nocookie.net/neptunia/images/b/be/Back_Alley.PNG/revision/latest?cb=20130923181106\')';
        grabAnchor.remove();
        game = new Game();
      };
    };
  }
}
