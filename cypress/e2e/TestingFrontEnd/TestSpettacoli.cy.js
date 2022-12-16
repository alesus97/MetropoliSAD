describe("Test spettacoli", () => {
  it("Inserimento spettacolo in una sala già occupata", function () {
    //LOGIN
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="formEmail"]').type("alessiocarusio@gmail.com");

    cy.get('[data-cy="formPassword"]').type("Carlo000!");
    cy.get('[data-cy="loginButton"]').click();

    cy.get('[data-cy="addSpettacolo"]').click();
    cy.get('[data-cy="selFilm"]').click();
    cy.get('[data-cy="sceltaFilm-Pulp Fiction"]').click();

    cy.get('[data-cy="selSala"]').click();
    cy.get('[data-cy="sceltaSala-1"]').click();

    cy.get('[data-cy="data_spettacolo"]').type("2022-12-07T17:46");
    cy.get('[data-cy="prezzo_biglietto"]').type("10");
    cy.get('[data-cy="ok"]')
      .click()
      .then(() => {
        cy.get('[data-cy="AlertDialog"]').contains(
          "Impossibile inserire lo spettacolo. La sala selezionata è gia occupata negli orari indicati."
        );
      });
  });
});
