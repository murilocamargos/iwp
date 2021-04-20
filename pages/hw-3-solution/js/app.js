class App {
  constructor(info, container) {
    this.container = container;
    this.info = info;
    this.showList = [];
    
    this._initializeComponents();
  }

  _initializeComponents() {
    const header = new Header(this.container);
    const timeKeeper = new TimeKeeper(this.container);
    
    const showContainer = document.createElement('section');
    for (let showId = 0; showId < this.info.length; showId++) {
      const show = new TVShow(this.info[showId], showId + 1, showContainer, timeKeeper.computeTimeSpent);
      this.showList.push(show);
    }
    this.container.appendChild(showContainer);
  }
}

const container = document.querySelector('#app');
const app = new App(TV_SHOWS, container);