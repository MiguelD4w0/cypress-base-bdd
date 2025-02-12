class pokedexPage {
  //Elementos de la pagina Pokedex
  pokedexButton() {
    return cy.get(".title_pokeball");
  }

  searchBarPokedex() {
    return cy.get("#searchInput");
  }

  lupaSearchButton() {
    return cy.get("#search");
  }

  loadMoreButton() {
    return cy.get("a#loadMore > .button-lightblue");
  }

  descripcionPokemon() {
    return cy.get("li:nth-of-type  .id");
  }
}

module.exports = new pokedexPage();
