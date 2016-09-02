class StatusBarView {
  constructor() {
    this.statusBar = new StatusBar();
    this.pointsDiv = document.createElement('div');
    this.moxyDiv = document.createElement('div');
    this.statusDiv = document.createElement('div');
    this.getWrapper = document.querySelector('#status-bar');
  }
  createBar() {
    this.statusBar
  }
  createBarWrapper() {
    this.statusDiv.setAttribute('id', 'status-bar');
    document.body.appendChild(this.statusDiv);
  }
  createPointsDiv() {
    this.pointsDiv.setAttribute('id', 'points-div');
    this.getWrapper.appendChild(this.pointsDiv);
  }
  createMoxyDiv() {
    this.moxyDiv.setAttribute('id', 'moxy-div');
    this.getWrapper.appendChild(this.moxyDiv);
  }
  updatePoints() {
    this.pointsDiv.innerHTML = this.points;
  }
  updateMoxy() {
    this.moxyDiv.innerHTML = this.moxy;
  }
}

let a = new StatusBarView();
a.createBarWrapper();
a.createPointsDiv();
a.createMoxyDiv();
a.updatePoints();
a.updateMoxy();
