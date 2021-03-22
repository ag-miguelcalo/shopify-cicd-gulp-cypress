/// <reference types="cypress" />

context('Index Page', () => {
  before(() => {
    cy.visit('/');
    cy.get('input[type=password]').type('qqq111');
    cy.get('button[type=submit]').click();
  });

  describe('Announcement', () => {
    it('Should have announcement element', () => {
      cy.get('.ag-announcement h1').should('exist');
    });
  });
});