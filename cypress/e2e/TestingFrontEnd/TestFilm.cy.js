describe("Test film", () => {
  it("Inserimento film da parte dell'ADMIN ", function () {
    //LOGIN
    cy.visit("http://localhost:3000");
   
    cy.get('#\\:r0\\:').type("alesus97@gmail.com");
   
    cy.get('#\\:r1\\:').type("Gabeweaver96!");
    cy.get('#\\:r2\\:').click();
    

    //CLICK SUL BOTTONE FILM NELLA SIDEBAR PER NAVIGARE
    cy.get(".MuiList-root > :nth-child(3)").click();

    //CREAZIONE NUOVO FILM
    cy.get(".MuiFab-root").click();
    cy.get("#\\:rd\\:").type("La fabbrica di cioccolato");
    cy.get("#\\:rf\\:").type("Commedia, fantastico, avventura");
    cy.get("#\\:rh\\:").type("Tim Burton");
    cy.get("#\\:rj\\:").type("Brad Grey, Richard D. Zanuck");
    cy.get("#\\:rl\\:").type("2005-09-23");
    cy.get(
      ".css-9v4aab-MuiStack-root:nth-child(4) > .MuiFormControl-root:nth-child(2)"
    ).click();
    cy.get("#\\:rn\\:").type("115");
   
    cy.get("#\\:rp\\:").type("L\'eccentrico Willy Wonka apre le porte della sua fabbrica di dolci a cinque fortunati bambini, che imparano così i segreti delle sue meravigliose creazioni");
    cy.get("#\\:rr\\:").type("https://pad.mymovies.it/filmclub/2005/05/058/locandina.jpg");
    cy.get('[type="submit"]').click().then(() => {
        //CONTROLLO SE ESISTE IL FILM APPENA CREATO
        cy.get('[data-cy="filmCard-La fabbrica di cioccolato-Brad Grey, Richard D. Zanuck"]');
      });
  });

  it("Cancellazione film da parte dell'ADMIN ", function () {
    cy.wait(500);
    //LOGIN
    cy.visit("http://localhost:3000");
    cy.get("#\\3Ar1\\3A").click();
    cy.get("#\\3Ar1\\3A").type("alesus97@gmail.com");
    cy.get("#\\3Ar3\\3A").click();
    cy.get("#\\3Ar3\\3A").type("Gabeweaver96!");
    cy.get("#\\3Ar5\\3A").click();
    cy.get(".MuiContainer-root").submit();

    //CLICK SUL BOTTONE FILM NELLA SIDEBAR PER NAVIGARE
    cy.get(".MuiList-root > :nth-child(3)").click();

    //ELIMINAZIONE FILM

    cy.visit("http://localhost:3000/film");
    cy.get('[data-cy="filmCard-La fabbrica di cioccolato-Brad Grey, Richard D. Zanuck"] path').click();
    cy.get('[type="submit"]').click();
    //CONTROLLO CHE IL FILM NON ESISTE
    cy.get('[data-cy="filmCard-La fabbrica di cioccolato-Brad Grey, Richard D. Zanuck"]').should(
      "not.exist"
    );
  });


  it('Inserimento film già esistente da parte dell\'ADMIN', function(){
    //LOGIN
    cy.visit('http://localhost:3000/');
    cy.get('#\\3Ar1\\3A').click();
    cy.get('#\\3Ar1\\3A').type('alesus97@gmail.com');
    cy.get('#\\3Ar3\\3A').click();
    cy.get('#\\3Ar3\\3A').type('Gabeweaver96!');
    cy.get('#\\3Ar5\\3A').click();
    cy.get('.MuiContainer-root').submit();

    //CLICK SUL BOTTONE FILM NELLA SIDEBAR PER NAVIGARE 
    cy.get('.MuiList-root > :nth-child(3)').click();
    
    //CREAZIONE NUOVO FILM
    cy.get('.MuiFab-root').click();
    cy.get('#\\:rd\\:').type('Pulp Fiction');
    cy.get('#\\:rf\\:').type('noir, gangaster, commedia, thriller, drammatico');
    cy.get('#\\:rh\\:').type('Quentin Tarantino')
    cy.get('#\\:rj\\:').type('Lawrence Bender');
    cy.get('#\\:rl\\:').type('1994-10-28');
    cy.get('#\\:rn\\:').type('154');
    cy.get('#\\:rp\\:').type('I destini di un killer, della sua compagna e di un pugile in declino s\'intrecciano in questa cruenta pellicola');
    cy.get('#\\:rr\\:').type('https://pad.mymovies.it/filmclub/2006/08/102/locandina.jpg');
    cy.get('[type="submit"]').click().then(()=>{
        cy.get('.MuiAlert-message').contains('Duplicate entry \'Lawrence Bender-Pulp Fiction\' for key \'film.produttore_titolo_unique\'')
        

    })

})

it("Inserimento film da parte del GESTORE CINEMA", function () {
  cy.visit("http://localhost:3000/");
  cy.get("#\\3Ar1\\3A").click();
  cy.get("#\\3Ar1\\3A").type("alessiocarusio@gmail.com");
  cy.get("#\\3Ar3\\3A").click();
  cy.get("#\\3Ar3\\3A").type("Carlo000!");
  cy.get("#\\3Ar5\\3A").click();
  cy.get(".MuiContainer-root").submit();

  cy.get(".MuiList-root > :nth-child(3)").click();
  
  cy.get('.MuiFab-root').click();
  
   cy.get('#\\:rd\\:').type('L\'uomo del labirinto');
  cy.get('#\\:rf\\:').type('Thriller');
  cy.get('#\\:rh\\:').type('Donato Carrisi')
  cy.get('#\\:rj\\:').type('Dustin Hoffman');
  cy.get('#\\:rl\\:').type('2019-10-28');
  cy.get('#\\:rn\\:').type('124');
  cy.get('#\\:rp\\:').type('Un investigatore e un famoso profiler devono rintracciare il criminale che ha tenuto prigioniera una giovane donna riapparsa dopo 15 anni di assenza.');
  cy.get('#\\:rr\\:').type('https://pad.mymovies.it/filmclub/2006/08/102/locandina.jpg');
  cy.get('[type="submit"]')
    .click()
    .then(() => {
      cy.get("form.MuiBox-root > .MuiPaper-root").contains("Forbidden");
    }); 
})
});
