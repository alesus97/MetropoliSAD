describe("Test quiz", () => {
    it('Inserimento di due risposte uguali all\'interno di una domanda', function(){
        //LOGIN
        cy.visit('http://localhost:3000/login');
        cy.get('#\\3Ar1\\3A').click();
        cy.get('#\\3Ar1\\3A').type('alesus97@gmail.com');
        cy.get('#\\3Ar3\\3A').click();
        cy.get('#\\3Ar3\\3A').type('Gabeweaver96!');
        cy.get('#\\3Ar5\\3A').click();
        cy.get('.MuiContainer-root').submit();

        cy.get('.MuiList-root > :nth-child(4)').click();
        cy.get(':nth-child(5) > .MuiTableCell-alignCenter > a > [data-testid="ArrowCircleRightIcon"]').click();
      

      
        cy.get('.MuiFab-root').click();
        cy.get('#\\:rd\\:').type('Quante definizioni della parola \'Pulp\' compaiono all\'inizio del film?');
      
        cy.get('#\\:rf\\:').type('3');
        
        cy.get('#\\:rh\\:').type('4');
       
        cy.get('#\\:rj\\:').type('5');
        
        cy.get('#\\:rl\\:').type('5');
      
        cy.get('.MuiContainer-root > .MuiBox-root').submit().then(()=>{
            cy.get('form.MuiBox-root > .MuiPaper-root').contains('Check constraint \'CHK_risposta_unique\' is violated.')
        })

    })
}) 