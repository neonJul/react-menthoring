describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('http://localhost:8080');
      const genreButton = cy.get('button').eq(2);
      genreButton.should('have.class','button');
      genreButton.click();
      genreButton.should('have.class','clicked-button');
    })
  })