/// <reference types="cypress" />

context('Index Page', () => {
  before(() => {
    cy.visit('/');
    cy.shopifyBeforeAll();
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