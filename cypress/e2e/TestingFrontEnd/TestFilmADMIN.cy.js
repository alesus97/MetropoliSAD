describe("Test film ADMIN", () => {
  beforeEach( ()=>{
    //LOGIN
    cy.visit("http://localhost:3000");
   
    cy.get('[data-cy="formEmail"]').type("alesus97@gmail.com");
   
    cy.get('[data-cy="formPassword"]').type("Gabeweaver96!");
    cy.get('[data-cy="loginButton"]').click();
    //CLICK SUL BOTTONE FILM NELLA SIDEBAR PER NAVIGARE
    cy.get('[data-cy="page-/film"]').click();
   
  })

  it('Inserimento nuovo film', function(){
    
    cy.get('[data-cy="add_film"]').click();
    cy.get('[data-cy="titolo"]').type("La fabbrica di cioccolato");
    cy.get('[data-cy="genere"]').type("Commedia, fantastico, avventura");
    cy.get('[data-cy="regia"]').type("Tim Burton");
    cy.get('[data-cy="produttore"]').type("Brad Grey, Richard D. Zanuck");
    cy.get('[data-cy="data_di_uscita"]').type("2005-09-23");
    cy.get('[data-cy="durata"]').type("115");
   
    cy.get('[data-cy="trama"]').type("L\'eccentrico Willy Wonka apre le porte della sua fabbrica di dolci a cinque fortunati bambini, che imparano così i segreti delle sue meravigliose creazioni");
    cy.get('[name="locandina"]').type("https://pad.mymovies.it/filmclub/2005/05/058/locandina.jpg");
    cy.get('[data-cy="ok"]').click().then(() => {
        //CONTROLLO SE ESISTE IL FILM APPENA CREATO
        cy.get('[data-cy="filmCard-La fabbrica di cioccolato-Brad Grey, Richard D. Zanuck"]').should('be.visible')
      }); 
    
  });
 


  it("Cancellazione film", function () {
    cy.wait(500);

    //ELIMINAZIONE FILM

    cy.get('[data-cy="filmCard-La fabbrica di cioccolato-Brad Grey, Richard D. Zanuck"] path').click();
    cy.get('[data-cy="ok"]').click();
    //CONTROLLO CHE IL FILM NON ESISTE
    cy.get('[data-cy="filmCard-La fabbrica di cioccolato-Brad Grey, Richard D. Zanuck"]').should("not.exist");
  });


   


  it('Inserimento film già esistente', function(){
    
    
    //CREAZIONE NUOVO FILM
    cy.get('[data-cy="add_film"]').click();
    cy.get('[data-cy="titolo"]').type('Pulp Fiction');
    cy.get('[data-cy="genere"]').type('noir, gangaster, commedia, thriller, drammatico');
    cy.get('[data-cy="regia"]').type('Quentin Tarantino')
    cy.get('[data-cy="produttore"]').type('Lawrence Bender');
    cy.get('[data-cy="data_di_uscita"]').type('1994-10-28');
    cy.get('[data-cy="durata"]').type('154');
    cy.get('[data-cy="trama"]').type('I destini di un killer, della sua compagna e di un pugile in declino s\'intrecciano in questa cruenta pellicola');
    cy.get('[name="locandina"]').type('https://pad.mymovies.it/filmclub/2006/08/102/locandina.jpg');
    cy.get('[data-cy="ok"]').click().then(()=>{
        cy.get('[data-cy="AlertDialog"]').contains('Duplicate entry \'Lawrence Bender-Pulp Fiction\' for key \'film.produttore_titolo_unique\'')
        

    })

})
})
