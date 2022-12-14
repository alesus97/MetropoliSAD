it('Test sale', function(){
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="formEmail"]').type("alessiocarusio@gmail.com");

    cy.get('[data-cy="formPassword"]').type("Carlo000!");
    cy.get('[data-cy="loginButton"]').click();
    //CLICK SUL BOTTONE FILM NELLA SIDEBAR PER NAVIGARE
    cy.get('[data-cy="page-/sale"]').click();

    cy.get('[data-cy="addSala"]').click();

    cy.get('[data-cy="numero_sala"]').type('6');
    cy.get('[data-cy="numero_file"]').type('10');
    cy.get('[data-cy="numero_posti_per_fila"]').type('5');

    cy.get('[data-cy="ok"]').click().then(()=>{
    cy.get('[data-cy="AlertDialog"]').contains('Duplicate entry \'6-10\' for key \'sale.sala_cinema_unique\''); 
    })

})

    

