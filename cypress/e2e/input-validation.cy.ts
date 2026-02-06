/// <reference types="cypress" />

describe('Currency Converter - Input Validation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should only accept numeric input', () => {
        // Try to type letters
        cy.get('[data-testid="from-amount-input"]').clear().type('abc');

        // Field should remain empty (letters filtered out)
        cy.get('[data-testid="from-amount-input"]').should('not.have.value', 'abc');
    });

    it('should accept decimal numbers', () => {
        cy.get('[data-testid="from-amount-input"]').clear().type('123.45');

        cy.get('[data-testid="from-amount-input"]').should('have.value', '123.45');
    });

    it('should handle large numbers', () => {
        cy.get('[data-testid="from-amount-input"]').clear().type('999999999');

        cy.wait(1000);

        // Should convert without errors
        cy.get('[data-testid="to-amount-input"]').should('not.have.value', '');
    });

    it('should handle very small decimal numbers', () => {
        cy.get('[data-testid="from-amount-input"]').clear().type('0.01');

        cy.wait(1000);

        // Should convert without errors
        cy.get('[data-testid="to-amount-input"]').should('not.have.value', '');
    });

    it('should clear opposite field when typing', () => {
        // Type in from field
        cy.get('[data-testid="from-amount-input"]').clear().type('100');
        cy.wait(1000);

        // To field should have a value
        cy.get('[data-testid="to-amount-input"]').should('not.have.value', '');

        // Now type in to field
        cy.get('[data-testid="to-amount-input"]').clear().type('50');

        // From field should be cleared
        cy.get('[data-testid="from-amount-input"]').should('have.value', '');
    });

    it('should handle empty input gracefully', () => {
        // Clear the input
        cy.get('[data-testid="from-amount-input"]').clear();

        // Should not cause errors
        cy.contains('World Currency Converter').should('be.visible');
    });

    it('should handle multiple decimal points', () => {
        // Try to type multiple decimals
        cy.get('[data-testid="from-amount-input"]').clear().type('1.2.3');

        // Should only accept valid decimal format
        cy.get('[data-testid="from-amount-input"]').invoke('val').should('match', /^\d*\.?\d*$/);
    });
});
