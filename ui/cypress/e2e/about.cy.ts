describe('about page test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/holiday/about');
    });

    it('should have correct Github repository link', () => {
        cy.get('a').contains(' github repository.')
            .invoke('attr', 'href')
            .should('eq', 'https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp');
    });

    it('should have correct holidays designated link', () => {
        cy.get('a').contains('Holidays designated')
            .invoke('attr', 'href')
            .should('eq', 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0001.htm');
    });

    it('should have correct observance of holidays link', () => {
        cy.get('a').contains('Observance of holidays')
            .invoke('attr', 'href')
            .should('eq', 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0002.htm');
    });

    it('should have correct state observed holidays link', () => {
        cy.get('a').contains('State Observed Holidays')
            .invoke('attr', 'href')
            .should('eq', 'http://dhrd.hawaii.gov/state-observed-holidays/');
    });

    it('should have correct Spring guide link', () => {
        cy.get('a').contains('(Guide)')
            .invoke('attr', 'href')
            .should('eq', 'https://docs.spring.io/spring-framework/docs/5.3.14/reference/html/');
    });

    it('should have correct Spring API link', () => {
        cy.get('a').contains('(API)')
            .invoke('attr', 'href')
            .should('eq', 'https://docs.spring.io/spring-framework/docs/5.3.14/javadoc-api/');
    });

    it('should have correct Spring Boot guide link', () => {
        cy.get('a:contains((Guide))').eq(1)
            .invoke('attr', 'href')
            .should('eq', 'https://docs.spring.io/spring-boot/docs/2.6.2/reference/htmlsingle/');
    });
});
