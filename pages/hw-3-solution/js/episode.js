class Episode {
  constructor(info, id, seasonId, showId, parentContainer, timeKeeperCallback) {
    this.info = info;
    this.id = id;
    this.seasonId = seasonId;
    this.showId = showId;
    this.parentContainer = parentContainer;
    this.timeKeeperCallback = timeKeeperCallback;

    this.originX = null;
    this._moveContainer = this._moveContainer.bind(this);
    this._startDrag = this._startDrag.bind(this);
    this._endDrag = this._endDrag.bind(this);

    this._initializeComponents();
  }

  _initializeComponents() {
    const epTitle = formatEpisodeTitle(this.info.season, this.info.number, this.info.name);
    
    // Episode image container
    const img = createImg(this.info.image, epTitle);
    const imgOverlay = document.createElement('div');
    imgOverlay.className = 'episode-watched';

    const imgContainer = document.createElement('div');
    imgContainer.append(img, imgOverlay);
    imgContainer.className = 'episode-image';
    
    // Episode info container
    const title = document.createElement('h3');
    title.textContent = epTitle;
    const date = wrapText('span', formatDate(this.info.airdate));
    const summary = wrapText('p', this.info.summary);

    const episodeInfoContainer = document.createElement('div');
    episodeInfoContainer.className = 'episode-info';
    episodeInfoContainer.append(title, date, summary);

    // Episode container
    this.container = document.createElement('div');
    this.container.className = 'episode';
    this.container.append(imgContainer, episodeInfoContainer);
    this.container.setAttribute('touch-action', 'none');
    this.container.addEventListener('pointerdown', this._startDrag);
    this.container.addEventListener('pointerup', this._endDrag);
    this.container.addEventListener('pointercancel', this._endDrag);
    this.container.addEventListener('pointermove', this._moveContainer);
    this.container.dataset.watched = false;
    this.container.dataset.runtime = this.info['runtime'];

    this.parentContainer.appendChild(this.container);
  }

  _changeState(watched) {
    this.container.dataset.watched = watched;

    if (!watched) {
      const checkAll = document.querySelector(`#info-check-${this.showId}-${this.seasonId}`);
      if (checkAll) {
        checkAll.dataset.checked = false;
        checkAll.classList.remove('active');
      }
    }

    this.timeKeeperCallback();
  }

  _startDrag(event) {
    event.preventDefault();
    event.stopPropagation();
    this.originX = event.clientX;
    event.target.setPointerCapture(event.pointerId);
    event.currentTarget.classList.remove('dragged');
  }

  _moveContainer(event) {
    if (this.originX) {
      const currentX = event.clientX;
      const delta = currentX - this.originX;
      event.currentTarget.style.transform = `translateX(${delta}px)`;
    }
  }

  _endDrag(event) {
    if (!this.originX) {
      return;
    }
  
    const currentX = event.clientX;
    const delta = currentX - this.originX;
    this.originX = null;
  
    if (Math.abs(delta) < 100) {
      event.currentTarget.style.transform = '';
      event.currentTarget.classList.add('dragged');
      return;
    }
  
    this._changeState(delta > 0);
    event.currentTarget.style.transform = '';
    event.currentTarget.classList.add('dragged');
  }
}