const TVMAZE_PATH = 'https://api.tvmaze.com/search/shows?q=';

class App {
  constructor() {
    this._onJsonReady = this._onJsonReady.bind(this);
    this._onSubmit = this._onSubmit.bind(this);

    this.showUrls = [];

    const form = document.querySelector('form');
    form.addEventListener('submit', this._onSubmit);
  }

  _onSubmit(event) {
    event.preventDefault();
    const textInput = document.querySelector('#tv-show-text');
    const query = encodeURIComponent(textInput.value);

    this.showUrls = [];
    fetch(TVMAZE_PATH + query)
      .then(this._onResponse)
      .then(this._onJsonReady);
  }

  _renderShows() {
    const showContainer = document.querySelector('#show-container');
    showContainer.innerHTML = '';
    for (const url of this.showUrls) {
      const show = new TVShow(showContainer, url);
    }
  }

  _onJsonReady(json) {
    for (const item of json) {
      if (item.show.image) {
        const url = item.show.image.medium;
        this.showUrls.push(url);
      }
    }
    this._renderShows();
  }

  _onResponse(response) {
    return response.json();
  }
}