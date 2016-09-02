class StatusBarView {
  constructor() {
    this.statusBar = new StatusBar();
    this.test = 'testy testy';
    this.statusDiv = document.createElement('div');
    this.getWrapper = document.querySelector('#status-bar');
    this.showPointsAndMoxy = this.appendPointsAndMoxy();
    this.getPointsDiv = document.querySelector('#points-div');
    this.getMoxyDiv = document.querySelector('#moxy-div');
  }
  createBarWrapper() {
    this.statusDiv.setAttribute('id', 'status-bar');
    document.body.appendChild(this.statusDiv);
  }
  createPointsDiv() {
    const pointsDiv = document.createElement('div');
    pointsDiv.setAttribute('id', 'points-div');
    pointsDiv.innerHTML = '0';
    this.getWrapper.appendChild(pointsDiv);
  }
  createMoxyDiv() {
    const moxyDiv = document.createElement('div');
    moxyDiv.setAttribute('id', 'moxy-div');
    moxyDiv.innerHTML = 'No Moxy!';
    this.getWrapper.appendChild(moxyDiv);
  }
  appendPointsAndMoxy() {
    this.createPointsDiv();
    this.createMoxyDiv();
  }
  checkIt() {
    return this.statusBar.points;
  }
  updatePoints() {
    this.getPointsDiv.innerHTML = '';
    this.getPointsDiv.innerHTML = this.statusBar.points;
  }
  updateMoxy() {
    this.getMoxyDiv.innerHTML = '';
    this.getMoxyDiv.innerHTML = this.statusBar.moxy;
  }
  updateBarValues() {
    this.updatePoints();
    this.updateMoxy();
  }
}
