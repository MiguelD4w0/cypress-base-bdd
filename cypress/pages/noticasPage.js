class noticasPage {
  //Elementos de la pagina Noticias
  noticiasButon() {
    return cy.get(".title_news");
  }

  noticiasTextDescription() {
    return cy.get("[data-size] li:nth-of-type() .news-wrapper p:nth-child(2)");
  }

  noticiasFecha() {
    return cy.get(
      "li:nth-of-type() > a > .content-block.content-block-full > .news-article > .news-wrapper  .date"
    );
  }

  noticiasTag() {
    return cy.get("[data-size] li:nth-of-type() .tags");
  }

  noticiasTitulo() {
    return cy.get(
      ".news-list-featured  ul > li:nth-of-type() > a > .content-block.content-block-full > .news-article > .news-wrapper > h3"
    );
  }

  //imagenes
}

module.exports = new noticasPage();
