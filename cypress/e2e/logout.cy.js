describe('login page', () => {
    
    it('should allow user to login with valid credentials and log out successfully', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.successfullogin() 
    cy.opennewacademy(); 
    cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
    cy.get('.dropdown-menu').should('be.visible')
    cy.get('.dropdown-menu').contains('Logout').click({ force: true })
    
    })

})