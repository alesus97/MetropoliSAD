describe("Test film GESTORE_CINEMA", () => {
  beforeEach(() => {
    //LOGIN
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="formEmail"]').type("alessiocarusio@gmail.com");

    cy.get('[data-cy="formPassword"]').type("Carlo000!");
    cy.get('[data-cy="loginButton"]').click();
    //CLICK SUL BOTTONE FILM NELLA SIDEBAR PER NAVIGARE
    cy.get('[data-cy="page-/film"]').click();
  });

  it("Inserimento film ", function () {
    cy.get('[data-cy="add_film"]').click();

    cy.get('[data-cy="titolo"]').type("L'uomo del labirinto");
    cy.get('[data-cy="genere"]').type("Thriller");
    cy.get('[data-cy="regia"]').type("Donato Carrisi");
    cy.get('[data-cy="produttore"]').type("Dustin Hoffman");
    cy.get('[data-cy="data_di_uscita"]').type("2019-10-28");
    cy.get('[data-cy="durata"]').type("124");
    cy.get('[data-cy="trama"]').type(
      "Un investigatore e un famoso profiler devono rintracciare il criminale che ha tenuto prigioniera una giovane donna riapparsa dopo 15 anni di assenza."
    );
    cy.get('[name="locandina"]').type(
      "https://pad.mymovies.it/filmclub/2006/08/102/locandina.jpg"
    );
    cy.get('[data-cy="ok"]')
      .click()
      .then(() => {
        cy.get('[data-cy="AlertDialog"]').contains("Forbidden");
      });
  });

  it("Cancellazione film ", function () {
    cy.get('[data-cy="filmCard-Pulp Fiction-Lawrence Bender"] path').click();
    cy.get('[data-cy="ok"]')
      .click()
      .then(() => {
        cy.get('[data-cy="AlertDialog"]').contains("Forbidden");
      });
  });
});
