describe('Test the Notifications Page', () => {
    it('should allow the user to interact with the notifications page', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.successfullogin()
      cy.opennewacademy()
      
      // Wait for the notifications link to become visible after the academy switch
      cy.get('#notifications-link', { timeout: 30000 }).should('be.visible');
      cy.wait(2000)
      
      // Use native click on the confirmed notification bell icon selector to bypass Cypress's post-click DOM checks.
      cy.get(':nth-child(6) > .dropdown > #notifications-link > span > #w-h-24').then(($el) => {
        $el[0].click();
      });
      cy.wait(2000)
      
      // Use native clicks to bypass Cypress's post-click DOM checks,
      // as the app clears notifications/redirects immediately upon clicking.
      cy.get('#notifications-container > #clear_all').then(($el) => {
        $el[0].click();
      });
      cy.wait(2000)
      
      cy.get('#notifications-container > .text-heading-6 > .btn').then(($el) => {
        $el[0].click();
      });

      // Wait for the full notifications list page reload/redirection to settle completely
      cy.url({ timeout: 15000 }).should('include', '/dashboard/notifications');
      cy.wait(2000);
      
      cy.get('#filterNotificationsSelecet > .select2 > .selection > .select2-selection', { timeout: 30000 })
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
    // Navigate back to the notifications page directly to ensure a clean DOM load
    cy.visit('https://account.africanmanagers.org/dashboard/notifications')
    cy.wait(3000)
 
      // click on the notifications settings page
      cy.get('.header-wrapper > a > img', { timeout: 15000 })
        .should('be.visible')
        .click({ force: true })

      cy.get('#search_search', { timeout: 30000 }).should('be.visible').type('Email digest')
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
      cy.wait(2000)

      // Click the go back button
      cy.get('.orange-default-icon-primary-button-web > a', { timeout: 15000 })
        .should('be.visible')
        .click({ force: true })
})
})