/* ==================== UTILITY FUNCTIONS ==================== */

/**
 * Wrap a text with the given "element".
 */
function wrapText(element, text) {
  const htmlNode = document.createElement(element);
  htmlNode.textContent = text;
  return htmlNode;
}

/**
 * Create an "img" node with "src" and "alt" attributes.
 */
function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

/**
 * Create an "a" node with "href" attribute.
 */
function createLink(text, url) {
  const link = wrapText('a', text);
  link.href = url;
  return link;
}

/**
 * Change the date format from YYYY-MM-DD to DD/MM/YYYY.
 */
function formatDate(dateStr) {
  const dateList = dateStr.split('-');
  return `${dateList[2]}/${dateList[1]}/${dateList[0]}`;
}

/**
 * Format the episode title as SxxExx: Name
 */
function formatEpisodeTitle(season, episode, name) {
  // Transforms season in String, then add zeros at the beggining until
  // the number of chars is 2. Therefore, season=2 becomes "02".
  const seasonStr = String(season).padStart(2, '0');
  const episodeStr = String(episode).padStart(2, '0');
  return `S${seasonStr}E${episodeStr}: ${name}`;
}

/**
 * Go through all checked checkboxes to compute the total time spent
 */
function computeTimeSpent() {
  let totalTime = 0;
  // Find all checked checkboxes values
  const boxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (const box of boxes) {
    const time = parseInt(box.value);
    // Sum all not NaN values to totalTime
    if (!isNaN(time))
      totalTime += time;
  }

  // Find results container
  const timeSpentText = document.querySelector('#total-time-spent');
  if (timeSpentText) {
    // Split the totalTime in days, hours and minutes
    const days = Math.floor(Math.floor(totalTime/60)/24);
    totalTime -= days*24*60;
    const hours = Math.floor(totalTime/60);
    totalTime -= hours*60;
    timeSpentText.textContent = `${days} days, ${hours} hours, ${totalTime} minutes`;
  }
}


/* ==================== EVENT HANDLING ==================== */

/**
 * Show the selected season, hiding all the others for that specific show
 */
function showSeason(event) {
  let foundSeason = false;
  // Get showId
  const showId = event.currentTarget.dataset.showId;
  // Find all seasons related to this show
  const seasons = document.querySelectorAll(`.season[data-show-id="${showId}"]`);
  for (const season of seasons) {
    // Hide all seasons different from the chosen
    if (season.dataset.seasonId === event.currentTarget.value) {
      season.classList.add('active');
      foundSeason = true;
    } else {
      season.classList.remove('active');
    }
  }

  const showInfoContainer = document.querySelector(`#info-${showId}`);
  if (showInfoContainer) {
    if (foundSeason) {
      showInfoContainer.classList.remove('active');
    } else {
      showInfoContainer.classList.add('active');
    }
  }
}

/**
 * Select all checkboxes of a specific season from a specific show
 */
 function checkAll(event) {
  // Find all checkboxes related to a specific season from a specific show
  const data = event.currentTarget.dataset;
  const boxes = document.querySelectorAll(`#info-${data.showId}-${data.seasonId} input[type=checkbox]`);
  for (const box of boxes) {
    // Set the boxes' state as the state of the checkAll box
    box.checked = event.currentTarget.checked;
  }
  // Compute the total time spent
  computeTimeSpent();
}

/**
 * Select/unselect a specific episode
 */
 function checkEpisode(event) {
  // Find all checkboxes related to a specific season from a specific show
  const data = event.currentTarget.dataset;
  const checkAllBox = document.querySelector(`#info-check-${data.showId}-${data.seasonId}`);
  if (checkAllBox && !event.currentTarget.checked) {
    checkAllBox.checked = false;
  }
  // Compute the total time spent
  computeTimeSpent();
}


/* ==================== RENDERING ==================== */

/**
 * Create the HTML genres list.
 */
function createGenres(genreList) {
  const genreContainer = document.createElement('p');
  genreContainer.className = 'genres';

  const genreTitle = wrapText('strong', 'Genres');

  genreContainer.appendChild(genreTitle);
  genreContainer.appendChild(document.createTextNode(': '));
  
  for (const genre of genreList) {
    const genreItem = wrapText('span', genre);
    genreContainer.appendChild(genreItem);
    genreContainer.appendChild(document.createTextNode(' '));
  }

  return genreContainer;
}

/**
 * Create a season select box
 */
function createSeasonList(numberOfSeasons, showId) {
  const selectBox = document.createElement('select');
  selectBox.dataset.showId = showId;
  selectBox.addEventListener('change', showSeason);

  const firstOption = wrapText('option', 'Season');
  firstOption.value = '';
  selectBox.appendChild(firstOption);

  for (let seasonId = 1; seasonId <= numberOfSeasons; seasonId++) {
    const option = wrapText('option', `Season ${seasonId}`);
    option.value = seasonId;
    selectBox.appendChild(option);
  }

  return selectBox;
}

/**
 * Create the episode title (with a checkbox)
 */
function createEpisodeTitle(title, id, value, showId, seasonId) {
  const runtimeCheck = document.createElement('input');
  runtimeCheck.type = 'checkbox';
  runtimeCheck.value = value;
  runtimeCheck.id = id;
  runtimeCheck.className = '';
  runtimeCheck.dataset.showId = showId;
  runtimeCheck.dataset.seasonId = seasonId;
  runtimeCheck.addEventListener('change', checkEpisode);
  
  const titleLabel = wrapText('label', title);
  titleLabel.setAttribute('for', id);

  const episodeTitleContainer = document.createElement('h3');
  episodeTitleContainer.append(runtimeCheck, titleLabel);

  return episodeTitleContainer;
}

/**
 * Create the episode container with image and info
 */
function createEpisode(episode, episodeId, seasonId, showId) {
  const id = showId + '-' + seasonId + '-' + episodeId;
  const epTitle = formatEpisodeTitle(episode.season, episode.number, episode.name);
  
  // Episode image container
  const img = createImg(episode.image, epTitle);
  
  // Episode info container
  const title = createEpisodeTitle(epTitle, id, episode.runtime, showId, seasonId);
  const date = wrapText('span', formatDate(episode.airdate));
  const summary = wrapText('p', episode.summary);

  const episodeInfoContainer = document.createElement('div');
  episodeInfoContainer.className = 'episode-info';
  episodeInfoContainer.append(title, date, summary);

  // Episode container
  const episodeContainer = document.createElement('div');
  episodeContainer.className = 'episode';
  episodeContainer.append(img, episodeInfoContainer);
  
  return episodeContainer;
}

/**
 * Create the check-all box for a given show/season.
 */
function createSeasonCheckAll(seasonId, showId) {
  const id = `info-check-${showId}-${seasonId}`;

  const runtimeCheck = document.createElement('input');
  runtimeCheck.type = 'checkbox';
  runtimeCheck.value = 0;
  runtimeCheck.id = id;
  runtimeCheck.className = '';
  runtimeCheck.dataset.showId = showId;
  runtimeCheck.dataset.seasonId = seasonId;
  runtimeCheck.addEventListener('change', checkAll);
  
  const titleLabel = wrapText('label', 'Marcar todos');
  titleLabel.setAttribute('for', id);

  const checkAllContainer = document.createElement('div');
  checkAllContainer.className = 'check-all';
  checkAllContainer.append(runtimeCheck, titleLabel);

  return checkAllContainer;
}

/**
 * Create the season container
 */
function createSeason(season, seasonId, showId) {
  const title = wrapText('h1', `Season ${seasonId}`);
  const checkAllBox = createSeasonCheckAll(seasonId, showId);

  const seasonContainer = document.createElement('div');
  seasonContainer.className = 'season';
  seasonContainer.id = `info-${showId}-${seasonId}`;
  seasonContainer.dataset.showId = showId;
  seasonContainer.dataset.seasonId = seasonId;
  seasonContainer.append(title, checkAllBox);

  for (let episodeId = 0; episodeId < season.length; episodeId++) {
    const episode = createEpisode(season[episodeId], episodeId + 1, seasonId, showId);
    seasonContainer.appendChild(episode);
  }

  return seasonContainer;
}

/**
 * Create the tv show container with image, info and episode lists
 */
function createTVShow(show, showId) {
  const img = createImg(show.image, show.name);
  const seasons = createSeasonList(show.seasons.length, showId);
  
  const leftContainer = document.createElement('div');
  leftContainer.classList = 'show-image';
  leftContainer.append(img, seasons);

  const title = wrapText('h1', show.name);
  const summary = wrapText('p', show.summary);
  const genres = createGenres(show.genres);
  const linkStr = `Premiered at ${show.channel} on ${formatDate(show.premiered)} (${show.status})`;
  const link = document.createElement('h2');
  link.appendChild(createLink(linkStr, show.officialSite));
  
  const showInfoContainer = document.createElement('div');
  showInfoContainer.className = 'show-data active';
  showInfoContainer.id = `info-${showId}`;
  showInfoContainer.append(title, link, summary, genres);

  const rightContainer = document.createElement('div');
  rightContainer.className = 'show-info';
  rightContainer.appendChild(showInfoContainer);
  
  for (let seasonId = 0; seasonId < show.seasons.length; seasonId++) {
    const season = createSeason(show.seasons[seasonId], seasonId + 1, showId);
    rightContainer.appendChild(season);
  }
  
  const tvShowContainer = document.createElement('div');
  tvShowContainer.className = 'tv-show';
  tvShowContainer.append(leftContainer, rightContainer);

  return tvShowContainer;
}

/**
 * Iterate throug TV Shows to render them all
 */
function createTVShowList(container, showList) {
  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'items';
  for (let showId = 0; showId < showList.length; showId++) {
    itemsContainer.appendChild(createTVShow(showList[showId], showId + 1));
  }
  container.appendChild(itemsContainer);
}

/**
 * Create the page's header
 */
function createHeader(container) {
  const title = wrapText('h1', 'TV Show List');
  
  const header = document.createElement('header');
  header.appendChild(title);
  
  container.appendChild(header);
}

/**
 * Create the users's profile
 */
function createProfile(container) {
  const name = wrapText('strong', 'Murilo Camargos');

  const profileContainer = document.createElement('div');
  profileContainer.id = 'profile-pic';
  profileContainer.appendChild(createImg('images/profile.png', 'Profile Picture'));
  profileContainer.append(document.createElement('br'), name);

  container.appendChild(profileContainer);
}

/**
 * Create time keeper container
 */
function createTimeKeeper(container) {
  const title = wrapText('h1', 'Total Time Spent');
  const time = wrapText('h1', '0 days, 0 hours, 0 minutes');
  time.id = 'total-time-spent';

  const timeKeeperContainer = document.createElement('div');
  timeKeeperContainer.className = 'time';
  timeKeeperContainer.append(title, time);

  container.appendChild(timeKeeperContainer);
}

/**
 * Initialize each component in the correct order
 */
function initializeComponents(container) {
  createHeader(container);
  createProfile(container);
  createTimeKeeper(container);
  createTVShowList(container, TV_SHOWS);
}

const container = document.querySelector('#app');
initializeComponents(container);