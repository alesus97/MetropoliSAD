describe("Test quiz", () => {
    it('Inserimento di due risposte uguali all\'interno di una domanda', function(){
        //LOGIN
        cy.visit('http://localhost:3000/login');

        cy.get('[data-cy="formEmail"]').type("alesus97@gmail.com");
        cy.get('[data-cy="formPassword"]').type("Gabeweaver96!");
        cy.get('[data-cy="loginButton"]').click();

        cy.get('.MuiList-root > :nth-child(4)').click();
        cy.get(':nth-child(5) > .MuiTableCell-alignCenter > a > [data-testid="ArrowCircleRightIcon"]').click();
      

      
        cy.get('[data-cy="addQuiz"]').click();
        cy.get('[data-cy="domanda"]').type('Quanti minuti dura il film?');
      
        cy.get('[data-cy="risposta_1"]').type('153');
        
        cy.get('[data-cy="risposta_2"]').type('180');
       
        cy.get('[data-cy="risposta_3"]').type('180');
        
        cy.get('[data-cy="risposta_corretta"]').type('178');
      
        cy.get('[data-cy="ok"]').click().then(()=>{
            cy.get('[data-cy="AlertDialog"]').contains('Check constraint \'CHK_risposta_unique\' is violated.')
        })

    })
}) 