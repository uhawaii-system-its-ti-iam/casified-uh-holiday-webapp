Cypress.Commands.addAll({
    loginMFA: (username, password) => {
        cy.origin('https://cas-test.its.hawaii.edu', () => {
            cy.get('input[id="username"]').type(Cypress.env().adminUsername, { log: false });
            cy.get('input[id="password"]').type(Cypress.env().adminPassword, { log: false });
            cy.get('button[name="submit"]').click();
            cy.wait(5000);
        });

        cy.origin('https://api-16a593a9.duosecurity.com', () => {
            cy.contains('Check for a Duo Push', { timeout: 10000 }).should('exist');
            cy.get('button[id="trust-browser-button"]', { timeout: 10000 }).should('exist');
            cy.get('button[id="trust-browser-button"]').click();
        });
    },

    loginNoMFA: (username, password) => {
        cy.visit('http://localhost:8080/holiday');
        cy.get('nav').contains('Login').click();
        cy.wait(5000);
        cy.origin('https://cas-test.its.hawaii.edu', () => {
            cy.get('input[id="username"]').type(Cypress.env().username, { log: false });
            cy.get('input[id="password"]').type(Cypress.env().password, { log: false });
            cy.get('button[name="submit"]').click();
        });
    },
});
