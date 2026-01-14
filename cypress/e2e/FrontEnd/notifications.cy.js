describe('Test the Notifications Page', () => {
    it('should allow the user to interact with the notifications page', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.get('input[name="user[login]"]').type('stella@muraho.tech')
      cy.get('input[name="user[password]"]').type('AMI123456')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/dashboard')
      cy.opennewacademy()
      cy.get(':nth-child(6) > .dropdown > #notifications-link').click()
      cy.get(':nth-child(6) > .dropdown > #notifications-link > span > #w-h-24').click({force: true})
      cy.wait(2000)
      cy.get(':nth-child(6) > .dropdown > .dropdown-menu > .text-heading-6 > .btn').click()
      
      cy.get('#notifications-container > .text-heading-6 > .btn')
      .click()
      .then(() => {
        cy.get("li[role='option']")
          .contains('Course')
          .should('exist')
          .click();

    })
    //to click on the three dots//this has to be checked as the IDs change
    
    //cy.get('#notification_7267140 > .right-side-notification-items > .dropdown-btn-container')
    //cy.get('#notification_7304287 > .right-side-notification-items > .dropdown-btn-container')
    //cy.get('#notification_7359910 > .right-side-notification-items > .dropdown-btn-container')
    cy.get(':nth-child(8) > .right-side-notification-items > .dropdown-btn-container > #action-dots > .triple-circle-dropdown')
    .click()
    cy.wait(2000)
    //to mark as read and unread
    //cy.get('.show .mark-read').click()
    //cy.wait(2000)
    //to clear filter
    //cy.get('.red-default-text-secondary-button-web')
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

    //to delete a notification
    /*cy.get('#notification_3753630 > .right-side-notification-items > .dropdown-btn-container > #action-dots > .triple-circle-dropdown')
    .click()
    cy.get('.show .del')
    .should('be.visible') // Assert that the element is visible
    .click();
    cy.wait(2000)*/

   





    




})
})