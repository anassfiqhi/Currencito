/// <reference types="cypress" />

describe('Currency Converter - Moroccan Currency Features', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should show denomination breakdown when converting to MAD', () => {
        // Change to currency to MAD
        cy.get('[data-testid^="currency-select-"]').last().click();
        cy.contains('[role="option"]', 'MAD').click();

        // Enter amount
        cy.get('[data-testid="from-amount-input"]').clear().type('10');

        cy.wait(1500);

        // Denomination breakdown should be visible
        cy.contains('Denomination Breakdown').should('be.visible');
    });

    it('should display Moroccan currency options', () => {
        // Click currency selector
        cy.get('[data-testid^="currency-select-"]').first().click();

        // Should show Moroccan Currencies group
        cy.contains('Moroccan Currencies').should('be.visible');

        // Should have MAD, RIYAL, FRANC options
        cy.contains('[role="option"]', 'MAD').should('exist');
        cy.contains('[role="option"]', 'RIYAL').should('exist');
        cy.contains('[role="option"]', 'FRANC').should('exist');

        // Close dropdown
        cy.get('body').type('{esc}');
    });

    it('should support MAD to Riyal conversion', () => {
        // Set from to MAD
        cy.get('[data-test id^="currency-select-"]').first().click();
        cy.contains('[role="option"]', 'MAD').click();

        // Set to to RIYAL
        cy.get('[data-testid^="currency-select-"]').last().click();
        cy.contains('[role="option"]', 'RIYAL').click();

        // Enter 1 MAD
        cy.get('[data-testid="from-amount-input"]').clear().type('1');

        cy.wait(1000);

        // Should equal 20 Riyals
        cy.get('[data-testid="to-amount-input"]').should('have.value', '20.00');
    });

    it('should support MAD to Franc conversion', () => {
        // Set from to MAD  
        cy.get('[data-testid^="currency-select-"]').first().click();
        cy.contains('[role="option"]', 'MAD').click();

        // Set to to FRANC
        cy.get('[data-testid^="currency-select-"]').last().click();
        cy.contains('[role="option"]', 'FRANC').click();

        // Enter 1 MAD
        cy.get('[data-testid="from-amount-input"]').clear().type('1');

        cy.wait(1000);

        // Should equal 100 Francs
        cy.get('[data-testid="to-amount-input"]').should('have.value', '100.00');
    });

    it('should support Riyal to Franc conversion', () => {
        // Set from to RIYAL
        cy.get('[data-testid^="currency-select-"]').first().click();
        cy.contains('[role="option"]', 'RIYAL').click();

        // Set to to FRANC
        cy.get('[data-testid^="currency-select-"]').last().click();
        cy.contains('[role="option"]', 'FRANC').click();

        // Enter 1 Riyal
        cy.get('[data-testid="from-amount-input"]').clear().type('1');

        cy.wait(1000);

        // Should equal 5 Francs
        cy.get('[data-testid="to-amount-input"]').should('have.value', '5.00');
    });
});
