/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Test de servicio
When(`se llama al endpoint pokemon`, () => {
  //llamo al servicio
  cy.request("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
});

Then(`se valida que su respuesta es 200`, () => {
  cy.request("GET", "https://pokeapi.co/api/v2/pokemon/pikachu").then(
    (respuesta) => {
      cy.log(`Respuesta del servicio: ${JSON.stringify(respuesta)}`);
      expect(respuesta.status).to.eq(200);
      cy.writeFile(
        `cypress/fixtures/autogenerado/eventos.json`,
        respuesta["body"]
      );
    }
  );
});

//Validar pokemon inexistente
When(`se llama al endpoint pokemon con un pokemon que no existe`, () => {
  //llamo al servicio
  cy.request("GET", "https://pokeapi.co/api/v2/pokemon/");
});

Then(`se valida que su respuesta es un 404`, () => {
  cy.request({
    Method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/patamon",
    failOnStatusCode: false,
  }).as("pokemon");
  cy.get("@pokemon").its("status").should("equal", 404);
});

//Validar Nro inexistente
When(
  `se llama al endpoint pokemon con un numero de pokemon que no existe`,
  () => {
    //llamo al servicio
    cy.request("GET", "https://pokeapi.co/api/v2/pokemon");
  }
);

Then(`se valida que su respuesta no es un 200`, () => {
  cy.request({
    Method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/patamon",
    failOnStatusCode: false,
  }).as("pokemon");
  cy.get("@pokemon").its("status").should("not.equal", 200);
});

//Validar Body no Vacio
When(`se llama al body del endpoint pokemon`, () => {
  //llamo al servicio
  cy.request("GET", "https://pokeapi.co/api/v2/pokemon/starmie");
});

Then(`se valida que no viene vacio`, () => {
  cy.request("GET", "https://pokeapi.co/api/v2/pokemon/starmie").then(
    (respuesta) => {
      cy.log(`Respuesta del servicio: ${JSON.stringify(respuesta)}`);
      expect(respuesta.status).to.eq(200);
      cy.writeFile(
        `cypress/fixtures/autogenerado/stamina.json`,
        respuesta["body"]
      );
    }
  );
});
