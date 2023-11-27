describe('about page test', () => {
    beforeEach(() => {
        cy.loginNoMFA(Cypress.env().username, Cypress.env().username);
        cy.visit('http://localhost:8080/holiday/contact');
    });

    it('should have correct email', () => {
        cy.get('td:contains(Send email: )').children('a').each((element) => {
            cy.wrap(element)
                .should('contain.text', 'duckart@hawaii.edu')
                .should('have.attr', 'href', 'mailto:duckart@hawaii.edu');
        });
    });

    it('should have correct ITS link', () => {
        cy.get('a').contains('www.hawaii.edu/its')
            .should('have.attr', 'href', 'http://www.hawaii.edu/its');
    });
});
