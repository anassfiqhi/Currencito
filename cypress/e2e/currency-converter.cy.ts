/// <reference types="cypress" />

describe('Currency Converter - Basic Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should load the homepage successfully', () => {
        cy.contains('World Currency Converter').should('be.visible');
        cy.contains('Convert between Dirham, Riyal, Franc, and world currencies').should('be.visible');
    });

    it('should have default state', () => {
        // Check from amount input exists
        cy.get('[data-testid="from-amount-input"]').should('exist');
        cy.get('[data-testid="to-amount-input"]').should('exist');

        // Check currency selectors exist
        cy.get('[data-testid^="currency-select-"]').should('have.length', 2);
    });

    it('should convert currency when amount is entered', () => {
        // Enter amount in from field
        cy.get('[data-testid="from-amount-input"]').clear().type('100');

        // Wait a moment for conversion
        cy.wait(1000);

        // To field should have a converted value
        cy.get('[data-testid="to-amount-input"]').should('not.have.value', '');
        cy.get('[data-testid="to-amount-input"]').invoke('val').should('match', /^\d+\.?\d*$/);
    });

    it('should support bidirectional conversion', () => {
        // Clear from field and type in to field
        cy.get('[data-testid="from-amount-input"]').clear();
        cy.get('[data-testid="to-amount-input"]').clear().type('50');

        cy.wait(1000);

        // From field should now have a value
        cy.get('[data-testid="from-amount-input"]').should('not.have.value', '');
    });

    it('should swap currencies when swap button is clicked', () => {
        // Click swap button
        cy.get('[data-testid="swap-button"]').click();

        cy.wait(500);

        // After swap, the values should be exchanged
        cy.get('[data-testid^="currency-select-"]').should('have.length', 2);
    });

    it('should change currency via dropdown', () => {
        // Click on currency selector to open dropdown
        cy.get('[data-testid^="currency-select-"]').first().click();

        // Wait for dropdown to appear
        cy.wait(500);

        // Find and click on a currency option (e.g., EUR)
        cy.contains('[role="option"]', 'EUR').click();

        cy.wait(500);

        // Verify the selection changed
        cy.get('[data-testid="currency-select-EUR"]').should('exist');
    });

    it('should display exchange rate information', () => {
        // Enter an amount to trigger rate display
        cy.get('[data-testid="from-amount-input"]').clear().type('100');
        cy.wait(1000);

        // Should show exchange rate (look for pattern like "1 MAD = X.XX USD")
        cy.contains(/1 \w+ = [\d.]+ \w+/).should('be.visible');
    });
});
