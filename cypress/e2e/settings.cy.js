describe('Test the settings page', () => {
    it('update your settings', () => {
       cy.visit('https://account.africanmanagers.org/ami_auth/login') // Replace with the URL of your calendar page
       cy.successfullogin()
       cy.get('[id="select2-gybselect-container"]').click()
      cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
      cy.get('[id="select2-gybselect-results"]').click()
       cy.wait(2000)
       cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
       cy.get(':nth-child(8) > .dropdown > .dropdown-menu > [href="https://account.africanmanagers.org/ami_auth/user/288832/settings"]').click({ force: true })
       //cy.get('.dropdown-main-list:nth-child(4)').click()
       cy.get('#account_security_settings_form_profile_first_name').type('e')
       cy.get('#account_security_settings_form_profile_last_name').type('butatu')
       //cy.get('#account_security_settings_form_profile_last_name').type('+250')
       //cy.get('#account_security_settings_form_profile_phone').type('1')
       cy.get('#account_security_settings_form_name').type('butatu')
       cy.get('#account_security_settings_form_current_password').type('AMI1234567')
       cy.wait(200)
       cy.get('#account_security_settings_form > .button').click()
 
       cy.get('[for="account_privacy_settings_form_profile_settings_sharing_lvl_2"]').click()
       //cy.get('label:nth-child(9)').click()
       cy.get('#account_privacy_settings_form > label:nth-child(12)').click()
       cy.log('Settings Page Tested Successfully')
 
 
 
 
    
 })
 })