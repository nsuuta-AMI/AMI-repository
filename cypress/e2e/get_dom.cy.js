describe('Get DOM', () => {
  it('dumps DOM', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    // Wait for the URL to change and page to load
    cy.url({ timeout: 30000 }).should('include', '/dashboard');
    cy.wait(5000); // Give it time to fully render the dropdowns
    cy.get('body').then(($body) => {
      cy.writeFile('dashboard_dom.html', $body.html());
    });
  });
});
