import { Given } from "@badeball/cypress-cucumber-preprocessor";

/*Given(`que el usuario ingresa a la web definida como {string}`, (url) => {
  cy.visit("https://www.pokemon.com/el");
});*/

Given(`que el usuario ingresa a la web definida como {string}`, (urlName) => {
  const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
  cy.openWeb();
  cy.visit(url);
});

Given(
  `que el usuario ingresa a la web definida en internet como {string}`,
  (urlName) => {
    const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
    cy.viewport("iphone-xr");
    cy.visit(url);
  }
);

Given(`que el usuario ingresa a la web {string}`, (urlName) => {
  const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
  cy.viewport("iphone-xr", "landscape");
  cy.visit(url);
});

/*// Mapa de países y sus URLs
const urls = Cypress.env("urls");

Given("que el usuario ingresa a la web definida como {string}", (urlName) => {
  // Verifica si el título existe en el mapa de URLs
  if (urls[urlName]) {
    // Visita la URL correspondiente
    cy.visit(urls[urlName]);
  } else {
    throw new Error(`No se encontró una URL para el título: ${urlName}`);
  }
});*/
