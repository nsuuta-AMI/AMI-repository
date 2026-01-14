describe(' activation page ', () => {
    it('helps find the correct selector after login', () => {
        cy.visit('https://account.africanmanagers.org/ami_auth/login')
        cy.get('input[name="user[login]"]').type('stella@muraho.tech')
        cy.get('input[name="user[password]"]').type('AMI123456')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/dashboard')
        cy.visit('https://account.africanmanagers.org/dashboard/home');
  
      // Perform login (this should redirect to dashboard)
      cy.successfullogin();
  
      // Wait for redirect and confirm page
      cy.url({ timeout: 10000 }).should('include', '/dashboard');
  
      // Wait a bit extra for content to load
      cy.wait(3000);
  
      // Take a screenshot so we can inspect it
      cy.screenshot('after-login');
  
      // Print the full body HTML into the Cypress log
      cy.get('body').then($body => {
        cy.log($body.html()); // Helpful to inspect what's really on the page
  
        // Optional: Highlight all images on the page
        cy.get('img').each(($img, index) => {
          cy.log(`Image #${index + 1}: ` + $img.attr('src'));
        });
      });
    });
  });
  

  
  


