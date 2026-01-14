/// <reference types ="cypress"/>
describe('Test carousel for a learning journey', () => {
    it('should click on the carouesl within a learning journey', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.get('input[name="user[login]"]').type('stella@muraho.tech')
      cy.get('input[name="user[password]"]').type('AMI123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/dashboard')
      // cy.LJcarousel()

      

    })





  })
      

    

    
