describe('Test the Notifications Page', () => {
    it('should allow the user to interact with the notifications page', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.successfullogin()
      cy.opennewacademy()
      cy.wait(2000)
      cy.get(':nth-child(6) > .dropdown > #notifications-link').click()
      cy.wait(2000)
      cy.get('#notifications-container > #clear_all').click()
      //cy.get(':nth-child(6) > .dropdown > .dropdown-menu > #clear_all').click({force: true})
      cy.wait(2000)
      cy.get('#notifications-container > .text-heading-6 > .btn').click()
      //cy.get(':nth-child(6) > .dropdown > .dropdown-menu > .text-heading-6 > .btn').click()
      
      cy.get('#filterNotificationsSelecet > .select2 > .selection > .select2-selection')
      .click()
      .then(() => {
        cy.get("li[role='option']")
          .contains('Course')
          .should('exist')
          .click();

    })
    
    cy.get(':nth-child(8) > .right-side-notification-items > .dropdown-btn-container > #action-dots > .triple-circle-dropdown')
    .click()
    cy.wait(2000)
    cy.get('[phx-click="clear_filter"]').click()
   
    //.should('be.visible');

    cy.get('#filterNotificationsSelecet > .select2 > .selection > .select2-selection')
      .click()
      .then(() => {
        cy.get("li[role='option']")
          .contains('Learning Journey')
          .should('exist')
          .click();

    })

    //be redirected to a notification
    //cy.get('#notification_7200594').click()
    cy.get(':nth-child(3) > .left-side-notification-items > .notification-body > p > .text-body-normal > a')
    //cy.get('#notification_7200594> .left-side-notification-items > .notification-body > p > .text-body-normal > a')
    .click()
    cy.go(-1)

     //click on the notifications settings page
     cy.get('.header-wrapper > a > img').click()
     cy.get('.search-bar').type('Push')
     cy.get('.cart:nth-child(5) .cart-right:nth-child(2) .grey-toggle-fill').click()
     cy.wait(2000)
     cy.get('#notification-settings-medium > :nth-child(2)').click()
     cy.wait(2000)
     cy.get('#notification-settings-medium > :nth-child(3)').click()
     cy.wait(2000)
     cy.get('#notification-settings-medium > :nth-child(4)').click()
     cy.reload()
     cy.get('.cart:nth-child(7) .cart-right:nth-child(2) .grey-toggle-fill').click()
     cy.wait(2000)
     cy.get('.cart:nth-child(7) .cart-right:nth-child(3) .grey-toggle-fill').dblclick()
     cy.wait(2000)
     cy.get(':nth-child(38) > :nth-child(1) > .grey-toggle > .grey-toggle-fill').click()
     cy.wait(2000)
     cy.get('.red-toggle-fill').click()


})
})