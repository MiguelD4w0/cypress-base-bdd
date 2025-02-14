// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.Commands.add("openWebSize", () => {
  beforeEach(() => {
    const tamPantalla = Cypress.env("viewportmobile").device;
    cy.viewport(tamPantalla);
  });
});*/

/**
 * Abre la la URL en tamaño de pantalla desktop  o mobile
 * @method {openWeb}
 */
Cypress.Commands.add("openWeb", () => {
  let tamPantalla;

  if (Cypress.env("type") === "mobile") {
    tamPantalla = Cypress.env("viewportmobile").device;
  } else {
    tamPantalla = Cypress.env("viewportdesktop").device;
  }

  cy.viewport(tamPantalla);
});
