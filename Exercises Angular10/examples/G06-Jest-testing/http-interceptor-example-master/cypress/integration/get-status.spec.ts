describe('Get status', () => {
    it('should visit the homepage', () => {
        cy.visit('/home');
    });

    it('should start with showing no status', () => {
        cy.get('.status').contains('no status');
    });

    it('should get status OK when clicking Get status', () => {
        cy.get('button').click();
        cy.get('.status').contains('OK');
    });
});
