/// <reference types="cypress" />

context('Logo', () => {
    before(() => {
      cy.visit('/');
      cy.shopifyBeforeAll();
    });
  
    it('Should have a logo', () => {
        cy.get('[data-cy=logo').should('exist');
      });
  });