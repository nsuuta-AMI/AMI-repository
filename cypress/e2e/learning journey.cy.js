describe('Test the Learning Journey tab', () => {
  it('should interact with Learning Journey components', () => {
    // Visit login and perform setup
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.opennewacademy();
    cy.changelanguage();

    // Navigate to Learning Journey tab
    cy.ljnavbar().click();

    // Search course and clear search
    cy.get('#search').type('Setting Goals for Success').clear();
    cy.wait(1000);

    // Close side panel if open (safety)
    cy.get('#closeIcon > span > .fas').click({ force: true }).wait(1000);

    // Navigate to the next phase
    cy.get('[phx-click="next_phase"] > .fas').click();
    cy.wait(1000);

    // Back to Learning Journey tab
    cy.get('.ml-auto > :nth-child(2) > .nav-link').click();
    cy.wait(1000);

    // Toggle multiple checkboxes in type-section
    const typeCheckboxIndexes = [3, 4, 5, 6];
    typeCheckboxIndexes.forEach(index => {
      const selector = `.type-section > .custom-checkbox:nth-child(${index}) > .sm-body-text-normal`;
      cy.get(selector).click().wait(500).click();
    });

    // Toggle multiple options in progress-section
    const progressIndexes = [3, 4, 5];
    progressIndexes.forEach(index => {
      const selector = `.progress-section > :nth-child(${index}) > .sm-body-text-normal`;
      cy.get(selector).click().wait(500).click();
    });

    // Toggle mandatory and not mandatory filters
    cy.get('#state_mandatory').click().wait(500);
    cy.get('#state_not_mandatory').click().wait(500);

    // Apply date filters: Weekly and Monthly
    const dateOptions = ['Weekly', 'Monthly'];
    dateOptions.forEach(option => {
      cy.get('#select2-select-filter-date-container').click();
      cy.get("li[role='option']").contains(option).click().wait(500);
    });

    // Final reload and success log
    cy.reload();
    cy.log('Learning Journey page successfully tested');
  });
});
