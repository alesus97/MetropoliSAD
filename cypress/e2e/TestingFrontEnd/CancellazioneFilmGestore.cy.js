
it('Cancellazione film da parte del GESTORE_CINEMA', function(){
    cy.visit('http://localhost:3000/');
    cy.get('#\\3Ar1\\3A').click();
    cy.get('#\\3Ar1\\3A').type('alessiocarusio@gmail.com');
    cy.get('#\\3Ar3\\3A').click();
    cy.get('#\\3Ar3\\3A').type('Carlo000!');
    cy.get('#\\3Ar5\\3A').click();
    cy.get('.MuiContainer-root').submit();


    cy.get('.MuiList-root > :nth-child(3)').click();

    cy.get('[data-cy="filmCard-Pulp Fiction-Lawrence Bender"] path').click();
    cy.get('[type="submit"]').click().then(()=>{
        cy.get('.MuiContainer-root > .MuiBox-root > .MuiPaper-root').contains("Forbidden");
    })

})