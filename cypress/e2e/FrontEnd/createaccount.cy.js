/// <reference types ="cypress"/>
describe('Test the create account page', () => {
    it('should allow a user to create an account', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/signup?_csrf_token=&_method=get') 
      //create an account
      cy.createaccount()
    })
    
    it('should sign up for other programmes', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login') 
      //sign up for other programmes
      cy.signupforAMIprogrammes()
      
      
    }) 

  })
