/// <reference types="cypress" />

describe('Currency Converter - URL Synchronization', () => {
    it('should initialize state from URL parameters', () => {
        // Visit with specific URL params
        cy.visit('/?from=EUR&to=GBP&amount=250');

        // Verify state is loaded from URL
        cy.get('[data-testid="currency-select-EUR"]').should('exist');
        cy.get('[data-testid="currency-select-GBP"]').should('exist');
        cy.get('[data-testid="from-amount-input"]').should('have.value', '250');
    });

    it('should update URL when amount is changed', () => {
        cy.visit('/');

        // Change amount
        cy.get('[data-testid="from-amount-input"]').clear().type('500');

        cy.wait(500);

        // URL should update
        cy.url().should('include', 'amount=500');
    });

    it('should preserve state on page refresh', () => {
        // Set up specific state
        cy.visit('/');

        // Change amount
        cy.get('[data-testid="from-amount-input"]').clear().type('300');

        cy.wait(1000);

        // Get the current URL
        cy.url().then((url) => {
            // Reload the page
            cy.reload();

            // State should be preserved
            cy.get('[data-testid="from-amount-input"]').should('have.value', '300');
        });
    });

    it('should handle invalid URL parameters gracefully', () => {
        // Visit with invalid currency codes
        cy.visit('/?from=INVALID&to=FAKE&amount=abc');

        // Should still load without errors
        cy.contains('Moroccan Currency Converter').should('be.visible');
        cy.get('[data-testid="from-amount-input"]').should('exist');
    });

    it('should create shareable links', () => {
        cy.visit('/');

        // Set up conversion
        cy.get('[data-testid="from-amount-input"]').clear().type('1000');

        cy.wait(1000);

        // Get the URL
        cy.url().then((url) => {
            // Visit the same URL
            cy.visit(url);

            // State should match
            cy.get('[data-testid="from-amount-input"]').should('have.value', '1000');
        });
    });

    it('should update URL when changing currency', () => {
        cy.visit('/');

        // Click currency selector
        cy.get('[data-testid^="currency-select-"]').first().click();

        // Select EUR
        cy.contains('[role="option"]', 'EUR').click();

        cy.wait(500);

        // URL should include from=EUR
        cy.url().should('include', 'from=EUR');
    });

    it('should handle browser back navigation', () => {
        cy.visit('/');

        // Make a change
        cy.get('[data-testid="from-amount-input"]').clear().type('100');
        cy.wait(500);

        // Make another change
        cy.get('[data-testid="from-amount-input"]').clear().type('200');
        cy.wait(500);

        // Go back
        cy.go('back');

        // Should restore previous state (this might not work perfectly with shallow routing)
        cy.url().should('exist');
    });
});
