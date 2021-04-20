class Season {
  constructor(info, id, showId, container, timeKeeperCallback) {
    this.info = info;
    this.showId = showId;
    this.id = id;
    this.container = container;
    this.timeKeeperCallback = timeKeeperCallback
    this.episodeList = [];

    this._checkAll = this._checkAll.bind(this);

    this._initializeComponents();
  }

  _initializeComponents() {
    const title = wrapText('h1', `Season ${this.id}`);
    const checkAllBox = this._createSeasonCheckAll();

    const seasonContainer = document.createElement('div');
    seasonContainer.className = 'season';
    seasonContainer.id = `info-${this.showId}-${this.id}`;
    seasonContainer.dataset.showId = this.showId;
    seasonContainer.dataset.seasonId = this.id;
    seasonContainer.append(title, checkAllBox);

    for (let episodeId = 0; episodeId < this.info.length; episodeId++) {
      const episode = new Episode(this.info[episodeId], episodeId + 1, this.id, this.showId, seasonContainer, this.timeKeeperCallback);
      this.episodeList.push(episode);
    }

    this.container.appendChild(seasonContainer);
  }

  _createSeasonCheckAll() {
    const id = `info-check-${this.showId}-${this.id}`;

    const runtimeCheck = document.createElement('div');
    runtimeCheck.id = id;
    runtimeCheck.className = 'watch-btn'
    runtimeCheck.dataset.checked = false;
    runtimeCheck.dataset.value = 0;
    runtimeCheck.dataset.showId = this.showId;
    runtimeCheck.dataset.seasonId = this.id;

    const eyeGreen = createImg('./images/eye-green.png');
    runtimeCheck.appendChild(eyeGreen);

    runtimeCheck.addEventListener('click', this._checkAll);
    
    const titleLabel = wrapText('label', 'Marcar todos');
    titleLabel.setAttribute('for', id);
  
    const checkAllContainer = document.createElement('div');
    checkAllContainer.className = 'check-all';
    checkAllContainer.append(runtimeCheck, titleLabel);
  
    return checkAllContainer;
  }

  _checkAll(event) {
    const wasChecked = event.currentTarget.dataset.checked === 'true';

    // Change button state
    event.currentTarget.dataset.checked = !wasChecked;

    // Add/remove active class according to state
    if (!wasChecked) {
      event.currentTarget.classList.add('active');
    } else {
      event.currentTarget.classList.remove('active');
    }

    for (const episode of this.episodeList) {
      episode.container.dataset.watched = (!wasChecked);
    }

    this.timeKeeperCallback();
  }
}