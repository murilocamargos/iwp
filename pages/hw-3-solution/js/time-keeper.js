class TimeKeeper {
  constructor(container) {
    this.container = container;
    this.time = null;

    this.computeTimeSpent = this.computeTimeSpent.bind(this);

    this._initializeComponents();
  }

  _initializeComponents() {
    const section = document.createElement('section');
    section.className = 'time';
    const title = document.createElement('h1');
    title.textContent = 'Total Time Spent';
    this.time = document.createElement('h1');
    this.time.textContent = '0 days, 0 hours, 0 minutes'
    this.time.id = 'total-time-spent'
    section.appendChild(title);
    section.appendChild(this.time);
    this.container.appendChild(section);
  }

  computeTimeSpent() {
    const boxes = document.querySelectorAll('.episode[data-watched=true]');
    let newTime = 0;
    for (const box of boxes) {
      const time = parseInt(box.dataset.runtime);
      if (!isNaN(time))
      newTime += time;
    }    
    const days = Math.floor(Math.floor(newTime/60)/24);
    newTime -= days*24*60;
    const hours = Math.floor(newTime/60);
    newTime -= hours*60;
    this.time.textContent = `${days} days, ${hours} hours, ${newTime} minutes`;
  }
}