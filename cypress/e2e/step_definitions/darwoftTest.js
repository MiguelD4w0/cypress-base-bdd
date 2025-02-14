import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const Darowft = require("../../pages/darwoftHomePage");
const DarwoftC = require("../../pages/darwoftCareerPage");
const DarowftB = require("../../pages/darwoftBlogPage");

//Test de boton Hamburguesa
When(`hace click en el boton hamburguesa`, () => {
  Darowft.hamburgerButton().click();
});

Then(`comprueba que el menu lateral es visible`, () => {
  Darowft.lateralMenu().should("be.visible");
});

//Test de busqueda carrear , falla siempre ya que en el link no tiene /careers tiene /darwoft
When(`el usuario clickea en la opcion {string}`, () => {
  Darowft.careerButton().invoke("removeAttr", "target").click();
  cy.url().should("include", "/darwoft");
  //Darowft.careerButton().should("have.attr", "href").and("include", "/darwoft");
});

When(`hace click en el boton Descubre`, () => {
  DarwoftC.descubreButton().click();
});

When(`el usuario ingresa SR QA en la barra de busqueda`, () => {
  DarwoftC.searchBar().type("SR QA");
});

When(`procede a hacer un click en el boton {string}`, () => {
  DarwoftC.searchButton().click();
});

Then(`valida que la opcion mostrada sea {string}`, () => {
  DarwoftC.resultText().should("contain.text", "SR QA Automation Engineer");
});

//Darwoft Blog Test
When(`hace click en el boton hamburguesa darwoft`, () => {
  Darowft.hamburgerButton().click();
});

When(`el usuario hace un click en la opcion {string}`, () => {
  Darowft.blogButton().invoke("removeAttr", "target").click();
  cy.url().should("include", "/blog");
  //Darowft.careerButton().should("have.attr", "href").and("include", "/darwoft");
});

Then(
  `valida que blog tenga Imagenes , links , titulos , fechas y botones`,
  () => {
    const titleText = [
      "Unlocking Business Growth Through Data Readiness",
      "Data Privacy: Ethical Responsibility Meets Business Strategy",
      "From Real-Time Insights to AI: The Data Revolution of 2025",
      "Buenas Prácticas de Analítica de Datos para E-commerce",
      "The Next Frontier of Retail: AI-Powered AR Shopping Experiences",
      "AI Unleashed: Transforming the Future of CPG Industry",
    ];

    titleText.forEach((txtTitulo, $index) => {
      DarowftB.titleBlog().eq($index).should("contain.text", txtTitulo);
    });

    const dateText = [
      "February 05,  2025",
      "January 28,  2025",
      "January 10,  2025",
      "December 11,  2024",
      "October 17,  2024",
      "October 10,  2024",
    ];

    dateText.forEach((txtDate, $index) => {
      DarowftB.dateText().eq($index).should("contain.text", txtDate);
    });

    const buttonText = [
      "Read on",
      "Read on",
      "Read on",
      "Read on",
      "Read on",
      "Read on",
    ];

    buttonText.forEach((txtButton, $index) => {
      DarowftB.buttonReadBlog().eq($index).should("contain.text", txtButton);
    });

    DarowftB.imgBlog().eq(0).should("be.visible");
    DarowftB.imgBlog().eq(1).should("be.visible");
    DarowftB.imgBlog().eq(2).should("be.visible");
    DarowftB.imgBlog().eq(3).should("be.visible");
    DarowftB.imgBlog().eq(4).should("be.visible");
    DarowftB.imgBlog().eq(5).should("be.visible");
  }
);
