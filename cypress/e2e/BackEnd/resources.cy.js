describe('resources backend', () => {
  
    it('interact with resources components', () => {
   
     cy.visit('https://account.africanmanagers.org/ami_auth/login')
     cy.successfuladminpanellogin() 
     
     cy.wait(2000)
     
     cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
     
     cy.wait(2000)
     
     //this code opens the backend
     cy.visit('http://account.africanmanagers.org/backend/administration/240943')

     cy.wait(2000)
   
     cy.get('.action-btn-sidebar').click()

     cy.wait(2000)

     cy.get('.secondary-menu-list > :nth-child(5)').click()

     cy.wait(2000)

     cy.get('.sec-list-items.active > .dropdown-child > :nth-child(1) > a').click({force: true})

     cy.wait(2000)

   
    })
})