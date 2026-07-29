describe('Test activation code', () => {
    it('enter an activation', () => {
       cy.visit('https://account.africanmanagers.org/ami_auth/login') // Replace with the URL of your calendar page
       cy.successfullogin()
       
       cy.get('[id="select2-gybselect-container"]').click()
       cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
       cy.get('[id="select2-gybselect-results"]').click()
       
       // Wait for the academy change to persist and page to settle to avoid detached DOM
       cy.get('#select2-gybselect-container', { timeout: 30000 })
         .should('contain.text', 'AMI DEMO ACADEMY')

       // Open the profile dropdown
       cy.get(':nth-child(8) > .dropdown > .nav-link', { timeout: 10000 })
         .should('be.visible')
         .click({ force: true })
         
       // Click the Activation link inside the dropdown (using partial href to be safe)
       cy.get(':nth-child(8) > .dropdown > .dropdown-menu > [href*="/dashboard/activation"]', { timeout: 10000 })
         .should('exist')
         .click({ force: true })
       //cy.get('.dropdown-main > .dropdown-item:nth-child(2)').click()
       cy.get('#activation_code').type('1999999')
       cy.get('.btnRed').click()
       cy.get('.alert').should('be.visible')



    })
})


