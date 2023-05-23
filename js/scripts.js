class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();

    const header = document.querySelector("header");
    header.classList.toggle("mobile-menu-open");

  }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

// Obtém a lista de elementos de link do cabeçalho
var headerLinks = document.querySelectorAll('.nav-list li a');

// Obtém a URL da página atual
var currentPageURL = window.location.href;

// Itera sobre os elementos de link
for (var i = 0; i < headerLinks.length; i++) {
    var link = headerLinks[i];
    var linkURL = link.href;

    // Verifica se o link corresponde à página atual
    if (currentPageURL === linkURL) {
        link.classList.add('selected'); // Adiciona a classe 'selected' ao link correspondente
        break; // Encerra o loop, pois a opção foi encontrada
    }
}


