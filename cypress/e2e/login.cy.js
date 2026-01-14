describe('login page', () => {
    
    it('should allow user to login with valid credentials', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.successfullogin()   
    
    })

    it('should display an error message for invalid login', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.usuccessfullogin()   

        
    })
    
   

})