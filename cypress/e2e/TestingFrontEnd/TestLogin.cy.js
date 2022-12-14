describe("Test di login", () => {
   it("Login con successo", function () {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="formEmail"]').type("alessiocarusio@gmail.com");
     cy.get('[data-cy="formPassword"]').type("Carlo000!");
     cy.get(".MuiContainer-root")
      .submit()
      .then(() => {
        cy.url().should("eq", "http://localhost:3000/");
      }); 
      cy.wait(1000);
  });

  //CIAO

   it("Login fallito", function () {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="formEmail"]').type("federicaesposito1096@gmail.com");
    cy.get('[data-cy="formPassword"]').type("CaioPippo");
   cy.get(".MuiContainer-root")
      .submit()
      .then(() => {
        cy.get(".MuiAlert-message").contains("Incorrect username or password.");
      });
    cy.wait(1000);
  });
 
 
  it("Recupero password fallito", function () {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy= "recPassLink"]').click();
    cy.get('[data-cy="emailRecPassword"]').type("alessiocarusio@gmail.com");
    cy.get('#\\:r4\\:').click();
    cy.get('#\\:r5\\:').type("123456");
    cy.get('#\\:r6\\:').type("CiaoMondo3!");
    cy.get('#\\:r7\\:').type("CiaoMondo3!");
    cy.get('#\\:r8\\:')
      .click()
      .then(() => {
        cy.get(".MuiAlert-message").contains(
          "Invalid verification code provided, please try again."
        );
      });
  }); 
});
 