describe("Test di login", () => {
  it("Login con successo", function () {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="formEmail"]').type("alessiocarusio@gmail.com");
    cy.get('[data-cy="formPassword"]').type("Carlo000!");
    cy.get('[data-cy="loginButton"]')
      .click()
      .then(() => {
        cy.url().should("eq", "http://localhost:3000/");
      });
    cy.wait(1000);
  });

  it("Login fallito", function () {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="formEmail"]').type("federicaesposito1096@gmail.com");
    cy.get('[data-cy="formPassword"]').type("CaioPippo");
    cy.get('[data-cy="loginButton"]')
      .click()
      .then(() => {
        cy.get('[data-cy="alertLogin"]').contains(
          "Incorrect username or password."
        );
      });
    cy.wait(1000);
  });

  it("Recupero password fallito", function () {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy= "recPassLink"]').click();
    cy.get('[data-cy="emailRecPassword"]').type("alessiocarusio@gmail.com");
    cy.get('[data-cy="loginButton"]').click();
    cy.get('[data-cy="codice_verifica"]').type("123456");
    cy.get('[data-cy="new_password"]').type("CiaoMondo3!");
    cy.get('[data-cy="confirm_new_password"]').type("CiaoMondo3!");
    cy.get('[data-cy="loginButton"]')
      .click()
      .then(() => {
        cy.get('[data-cy="alertLogin"]').contains(
          "Invalid verification code provided, please try again."
        );
      });
  });
});
