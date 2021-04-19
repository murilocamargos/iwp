class TVShow {
  constructor(albumContainer, imageUrl) {
    // Same as document.createElement('img');
    const image = new Image();
    image.src = imageUrl;
    albumContainer.append(image);
  }
}