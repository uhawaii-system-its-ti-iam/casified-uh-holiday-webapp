describe('navbar test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/holiday');
    });

    it('verifies about link is correct', () => {
        cy.get('header').contains('About').click();
        cy.location('pathname').should('eq', '/holiday/about');
    });

    it('verifies home link is correct', () => {
        cy.get('header').contains('Home').click();
        cy.location('pathname').should('eq', '/holiday');
    });

    it('verifies campuses dropdown is correct', () => {
        const campuses = ['Hilo', 'Manoa', 'West Oahu', 'Hawaii', 'Honolulu', 'Kapiolani', 'Kauai',
            'Leeward', 'Maui', 'Windward'];

        cy.get('header').contains('Campuses').click();
        campuses.forEach((campus) => {
            cy.get('.mantine-Menu-dropdown').contains('a', campus)
                .should('have.attr', 'href')
                .and('contain', `${campus.replace(/ /g, '').toLowerCase()}.hawaii.edu/`);
        });
    });

    it('verifies login button exists', () => {
        cy.get('header').contains('Login').should('exist');
    });

    it('should login as an user', () => {
        cy.loginNoMFA(Cypress.env().username, Cypress.env().username);

        cy.location('pathname').should('eq', '/holiday');
        cy.get('header').contains(Cypress.env().username).should('exist');
        cy.get('header').contains('Contact').should('exist');
        cy.get('header').contains(Cypress.env().username).click();
        cy.get('header').contains(Cypress.env().username).should('not.exist');
    });
});
