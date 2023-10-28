class MenuMaestro extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */`
      <div class="container">
        <h1 class="brand" tabindex="0">Menu Maestro</h1>
        <button id="hamburger-button" tabindex="0" class="mobile-menu-toggle">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
        <nav id="menu-drawer" class="menu">
          <ul>
            <li><a href="#/daftar-restoran" tabindex="0">Home</a></li>
            <li><a href="#/favorite" tabindex="0">Favorite</a></li>
            <li><a href="#about-us" tabindex="0">AboutUs</a></li>
          </ul>
        </nav>   
      </div>
    `;
  }
}

customElements.define('menu-maestro', MenuMaestro);
