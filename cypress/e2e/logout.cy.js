describe('login page', () => {
    
    it('should allow user to login with valid credentials and log out successfully', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.successfullogin() 
    cy.opennewacademy(); 
    cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
    cy.wait(1000);
    cy.get(':nth-child(8) > .dropdown > .dropdown-menu > [href="https://account.africanmanagers.org/ami_auth/logout/288832"]').click({ force: true })
    
    })

})