describe('navbar test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/holiday');
    });

    it('verifies about link is correct', () => {
        cy.get('nav').contains('About').click();
        cy.location('pathname').should('eq', '/holiday/faq');
    });

    it('verifies home link is correct', () => {
        cy.get('nav').contains('Home').click();
        cy.location('pathname').should('eq', '/holiday');
    });

    it('verifies campuses dropdown is correct', () => {
        const campuses = ['Hilo', 'Manoa', 'West Oahu', 'Hawaii', 'Honolulu', 'Kapiolani', 'Kauai',
            'Leeward', 'Maui', 'Windward'];

        cy.get('nav').contains('Campuses').click();
        campuses.forEach((campus, index) => {
            cy.get('.dropdown-menu').children('a').contains(campus)
                .should('have.attr', 'href')
                .and('contain', `${campus.replace(/ /g, '').toLowerCase()}.hawaii.edu/`);
        });
    });

    it('verifies login button exists', () => {
        cy.get('nav').contains('Login').should('exist');
    });

    it('should login as an user', () => {
        cy.loginNoMFA(Cypress.env().username, Cypress.env().username);

        cy.location('pathname').should('eq', '/holiday');
        cy.get('nav').contains(Cypress.env().username).should('exist');
        cy.get('nav').contains('Contact').should('exist');
        cy.get('nav').contains(Cypress.env().username).click();
        cy.get('nav').contains(Cypress.env().username).should('not.exist');
    });
});
