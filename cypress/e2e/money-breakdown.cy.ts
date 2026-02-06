
describe('Money Breakdown', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('shows breakdown for USD', () => {
        // Type 150 in the From input (assuming default from is MAD, but we'll set it to be sure or just use the To field)
        // Actually the converter defaults might vary, so let's set currencies explicitly if possible or just use the UI.

        // Select USD as target currency if not already
        cy.get('[data-testid="swap-button"]').click(); // Swap to make "To" be MAD (if default was MAD -> USD), wait, let's just interact with the "To" selector

        // Just type in the "To" field directly to trigger breakdown for the "To" currency
        // By default "To" is USD.

        cy.get('[data-testid="to-amount-input"]').clear().type('150');

        // Check for breakdown
        cy.contains('Cash Breakdown - 150.00 USD').should('be.visible');
        cy.contains('100 USD').should('be.visible');
        cy.contains('50 USD').should('be.visible');
    });

    it('shows breakdown for EUR', () => {
        // Change To currency to EUR
        // We need to identify the select. The component implementation uses CurrencySelect.
        // Let's assume we can click the SELECT trigger for the second Select component.
        // This might be tricky without specific test IDs on the selects.
        // The "To" section is the second one.

        // Let's simplify: check if we can query by label "To"
        cy.contains('label', 'To').parent().find('button[role="combobox"]').click();

        // Select EUR from dropdown
        cy.contains('Euro').click();

        cy.get('[data-testid="to-amount-input"]').clear().type('12.50');

        cy.contains('Cash Breakdown - 12.50 EUR').should('be.visible');
        cy.contains('10 EUR').should('be.visible');
        cy.contains('2 EUR').should('be.visible');
        cy.contains('0.5 EUR').should('be.visible');
    });
});
