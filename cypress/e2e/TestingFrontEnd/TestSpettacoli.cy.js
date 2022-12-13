describe("Test spettacoli", () => {

it('Inserimento spettacolo già esistente da parte del GESTORE_CINEMA', function(){
    //LOGIN
    cy.visit('http://localhost:3000/login');
    cy.get('#\\3Ar1\\3A').click();
    cy.get('#\\3Ar1\\3A').type('alessiocarusio@gmail.com');
    cy.get('#\\3Ar3\\3A').click();
    cy.get('#\\3Ar3\\3A').type('Carlo000!');
    cy.get('#\\3Ar5\\3A').click();
    cy.get('.MuiContainer-root').submit();
    
    cy.get('.MuiFab-root').click();
    cy.get('#\\:rd\\:').click();
    cy.get('.MuiButtonBase-root:nth-child(5)').click(); 
    cy.get('#\\:rf\\:').click();
    cy.get('#menu-sala > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click(); 

    cy.get('#standard-start-adornment').type('2022-12-07T17:46');
    cy.get('#\\:rj\\:').type('10');
    cy.get('[type="submit"]').click().then(()=>{
        cy.get('.MuiAlert-message').contains('Impossibile inserire lo spettacolo. La sala selezionata è gia occupata negli orari indicati.');
    })

   
})




})