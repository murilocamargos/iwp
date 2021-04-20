class Header {
  constructor(container) {
    this.container = container;
    this._initializeComponents();
  }

  _initializeComponents() {
    // Header
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'TV Show List';
    header.appendChild(title);
    this.container.appendChild(header);

    // Profile
    const profileContainer = document.createElement('section');
    profileContainer.id = 'profile-pic';
    const picture = document.createElement('img');
    picture.src = './images/profile.png';
    const userName = document.createElement('strong');
    userName.textContent = 'Murilo Camargos';
    profileContainer.appendChild(picture);
    profileContainer.appendChild(document.createElement('br'));
    profileContainer.appendChild(userName);
    this.container.appendChild(profileContainer);
  }
}