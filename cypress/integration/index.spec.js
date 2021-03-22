/// <reference types="cypress" />

context('Index Page', () => {
  before(() => {
    cy.visit('/');

    // these are development mode only, for password entry.
    cy.get('input[type=password]').type('qqq111');
    cy.get('button[type=submit]').click();
  });

  describe('Announcement', () => {
    it('Should have and announcement text', () => {
      cy.get('[data-cy=announcement-text').should('exist');
    });
    
    it('Should have an announcement link', () => {
      cy.get('[data-cy=announcement-link').should('exist');
    });
  });
});