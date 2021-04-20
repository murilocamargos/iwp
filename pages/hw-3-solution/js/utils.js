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