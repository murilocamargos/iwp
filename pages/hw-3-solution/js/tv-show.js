class TVShow {
  constructor(info, id, container, timeKeeperCallback) {
    this.container = container;
    this.info = info;
    this.id = id;
    this.seasonList = [];
    this.timeKeeperCallback = timeKeeperCallback;

    this._showSeason = this._showSeason.bind(this);

    this._initializeComponents();
  }

  _initializeComponents() {
    const img = createImg(this.info.image, this.info.name);
    const seasons = this._createSelectBox();
    
    const leftContainer = document.createElement('div');
    leftContainer.classList = 'show-image';
    leftContainer.append(img, seasons);

    const title = wrapText('h1', this.info.name);
    const summary = wrapText('p', this.info.summary);
    const genres = this._createGenres();
    const linkStr = `Premiered at ${this.info.channel} on ${formatDate(this.info.premiered)} (${this.info.status})`;
    const link = document.createElement('h2');
    link.appendChild(createLink(linkStr, this.info.officialSite));
    
    const showInfoContainer = document.createElement('div');
    showInfoContainer.className = 'show-data active';
    showInfoContainer.id = `info-${this.id}`;
    showInfoContainer.append(title, link, summary, genres);
    
    const rightContainer = document.createElement('div');
    rightContainer.className = 'show-info';
    rightContainer.appendChild(showInfoContainer);
    
    for (let seasonId = 0; seasonId < this.info.seasons.length; seasonId++) {
      const season = new Season(this.info.seasons[seasonId], seasonId + 1, this.id, rightContainer, this.timeKeeperCallback);
      this.seasonList.push(season);
    }
    
    const tvShowContainer = document.createElement('div');
    tvShowContainer.className = 'tv-show';
    tvShowContainer.append(leftContainer, rightContainer);

    this.container.appendChild(tvShowContainer);
  }

  _createGenres() {
    const genreContainer = document.createElement('p');
    genreContainer.className = 'genres';
  
    const genreTitle = wrapText('strong', 'Genres');
  
    genreContainer.appendChild(genreTitle);
    genreContainer.appendChild(document.createTextNode(': '));
    
    for (const genre of this.info.genres) {
      const genreItem = wrapText('span', genre);
      genreContainer.appendChild(genreItem);
      genreContainer.appendChild(document.createTextNode(' '));
    }
  
    return genreContainer;
  }

  _createSelectBox() {
    const selectBox = document.createElement('select');
    selectBox.dataset.showId = this.id;
    selectBox.addEventListener('change', this._showSeason);

    const firstOption = wrapText('option', 'Season');
    firstOption.value = '';
    selectBox.appendChild(firstOption);

    for (let seasonId = 1; seasonId <= this.info.seasons.length; seasonId++) {
      const option = document.createElement('option');
      option.textContent = `Season ${seasonId}`;
      option.value = seasonId;
      selectBox.appendChild(option);
    }

    return selectBox;
  }

  _showSeason(event) {
    event.preventDefault();
    let foundSeason = false;
    // Find all seasons related to this show
    const seasons = document.querySelectorAll(`.season[data-show-id="${this.id}"]`);
    for (const season of seasons) {
      // Hide all seasons different from the chosen
      if (season.dataset.seasonId === event.currentTarget.value) {
        season.classList.add('active');
        foundSeason = true;
      } else {
        season.classList.remove('active');
      }
    }

    const showInfoContainer = document.querySelector(`#info-${this.id}`);
    if (showInfoContainer) {
      if (foundSeason) {
        showInfoContainer.classList.remove('active');
      } else {
        showInfoContainer.classList.add('active');
      }
    }
  }
}