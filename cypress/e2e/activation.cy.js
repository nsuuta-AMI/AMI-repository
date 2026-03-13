describe('Test activation code', () => {
    it('enter an activation', () => {
       cy.visit('https://account.africanmanagers.org/ami_auth/login') // Replace with the URL of your calendar page
       cy.successfullogin()
       .get('[id="select2-gybselect-container"]').click()
      cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
      cy.get('[id="select2-gybselect-results"]').click()
      cy.wait(2000)
       cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
       cy.get(':nth-child(8) > .dropdown > .dropdown-menu > [href="https://account.africanmanagers.org/dashboard/activation"]').click()
       //cy.get('.dropdown-main > .dropdown-item:nth-child(2)').click()
       cy.get('#activation_code').type('1999999')
       cy.get('.btnRed').click()
       cy.get('.alert').should('be.visible')



    })
})


