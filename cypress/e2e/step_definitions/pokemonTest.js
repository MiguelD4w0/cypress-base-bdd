import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const Pokemon = require("../../pages/pokemonHomePage");
const Pokedex = require("../../pages/pokedexPage");
const Noticias = require("../../pages/noticasPage");

//Test de Buttons Home Pokemon Page
Then(
  `valida que en la parte inferior se encuentra el subtiutlo {string}`,
  () => {
    Pokemon.footerPokemonWebH2.should("contain.text", "The Pokémon Company");
  }
);

Then(
  `verifica en la home que el boton {string} tenga su texto correspondiente`,
  () => {
    Pokemon.inicioButton().should("contain.text", "Inicio");
  }
);

Then(`comprueba que el boton {string} contenga su texto apropiado`, () => {
  Pokemon.pokedexButton().should("contain.text", "Pokédex");
});

Then(`valida que el boton {string} tiene su texto propio`, () => {
  Pokemon.aplicacionesButton().should("contain.text", "Aplicaciones");
});

Then(`el usuario visualiza el boton {string} con su texto`, () => {
  Pokemon.cardGameButton().should(
    "contain.text",
    "Juego de Cartas Coleccionables"
  );
});

Then(`asegura que el boton {string} lleva si texto propio`, () => {
  Pokemon.aplicacionesButton().should("contain.text", "Dibujos Animados");
});

Then(`se visualiza el boton {string} con su texto establecido`, () => {
  Pokemon.eventPokemonButton().should(
    "contain.text",
    "Eventos de Play! Pokémon"
  );
});

Then(`se observa el boton {string} con su texto predefinido`, () => {
  Pokemon.noticiasButon().should("contain.text", "Noticias");
});

//busqueda de pokemon 93
When(`el usuario clickea en el boton {string}`, () => {
  Pokedex.pokedexButton().click();
});

When(`en el buscador ingresa el nro 93`, () => {
  Pokedex.searchBarPokedex().type("93");
});

When(`preciona el boton con forma de lupa`, () => {
  Pokedex.lupaSearchButton().click();
});

When(`preciona el boton {string}`, () => {
  Pokedex.loadMoreButton().click();
});

Then(
  `valida que todas las busquedas tengan incluyan {string} y {string}`,
  () => {
    const pokemonList = ["N.º", "93"];
    Pokedex.descripcionPokemon().each((description, $index) => [
      cy.wrap(description).should("contain.text,", pokemonList[$index]),
    ]);
  }
);

//Noticias Pokemon
When(`el usuario hace click en el boton {string}`, () => {
  Pokemon.noticiasButon().click();
});

Then(
  `valida que cada noticia tenga una imagen, fecha, categoria, titulo y una descripcion`,
  () => {
    Noticias.noticiasTextDescription().each((description) => [
      cy.wrap(description).should("exist"),
    ]);

    Noticias.noticiasFecha().each((fecha) => [cy.wrap(fecha).should("exist")]);

    Noticias.noticiasTitulo().each((titulo) => [
      cy.wrap(titulo).should("exist"),
    ]);

    Noticias.noticiasTag().each((tag) => [cy.wrap(tag).should("exist")]);
  }
);
