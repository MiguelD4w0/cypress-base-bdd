import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que el usuario ingresa a la web definida como {string}`, (url) => {
  cy.visit("https://www.pokemon.com/el");
});
