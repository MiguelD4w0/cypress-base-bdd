class PokemonHomeWeb {
  //Botones de la Home

  inicioButton() {
    return cy.get(".title_home");
  }

  pokedexButton() {
    return cy.get(".title_pokeball");
  }

  aplicacionesButton() {
    return cy.get(".title_mobile");
  }

  cardGameButton() {
    return cy.vet(".title_cards");
  }

  pokemonTvButton() {
    return cy.get(".title_pokemontv");
  }

  eventPokemonButton() {
    return cy.get(".title_event");
  }

  noticiasButon() {
    return cy.get(".title_news");
  }

  //Futer Home Pokemon
  footerPokemonWebH2() {
    return cy.get(".global-footer-links h2");
  }
}

module.exports = new PokemonHomeWeb();
