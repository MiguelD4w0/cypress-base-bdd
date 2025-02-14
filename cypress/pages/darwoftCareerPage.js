class darwoftCareerPage {
  //Elementos de la pagina Home Darwoft

  descubreButton() {
    return cy.get(".btn.btn-lg.btn-outline-light.mt-4");
  }

  searchBar() {
    return cy.get(".search-keyword");
  }

  searchButton() {
    return cy.get(".btn.btn-apply.btn-secondary.width-100");
  }

  resultText() {
    return cy.get("[class='mt-0 mb-1 primary-color']");
  }
}

module.exports = new darwoftCareerPage();
