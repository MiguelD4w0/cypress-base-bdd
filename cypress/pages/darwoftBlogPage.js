class darwoftCareerPage {
  //Elementos de la pagina Blog Darwoft

  dateText() {
    return cy.get("div.date");
  }

  imgBlog() {
    return cy.get(
      ".article-picture"
      //"div:nth-of-type(2) > .article.row > .article-image.col-12 > a > img"
    );
  } // al cambar el type por un 4 o 5 cambia la fecha

  titleBlog() {
    return cy.get(".article-title");
  }

  buttonReadBlog() {
    return cy.get(".btn.btn-info.pb-4.pt-4");
  }

  linkBlog() {
    return cy.get(
      "div:nth-of-type(4) > .article.row > .article-info.col-12 > .article-title > a"
    );
  } // al cambar el type por un 4 o 5 cambia la fecha
}

module.exports = new darwoftCareerPage();
