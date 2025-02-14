class darwoftHomePage {
  //Elementos de la pagina Home Darwoft

  titleDarwoft() {
    return cy.get(".darwoft-logo.darwoft-logo-gray");
  }

  hamburgerButton() {
    return cy.get("#nav-home [type]");
  }

  lateralMenu() {
    return cy.get("#navbarFixed");
  }

  careerButton() {
    return cy.get(":nth-child(1) > :nth-child(4) > .nav-link");
  }

  blogButton() {
    return cy.get(
      "div#navbarFixed > ul > li:nth-of-type(5) > .nav-link.nav-link--blog"
    );
  }
}

module.exports = new darwoftHomePage();
