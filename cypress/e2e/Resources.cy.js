describe('Test the Resources Page', () => {
  const closeModal = () => {
  };
  

  beforeEach(() => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();

    // Select the Academy
    cy.get('#select2-gybselect-container').click();
    cy.get('.select2-search__field').type('AMI DEMO ACADEMY');
    cy.get('#select2-gybselect-results').contains('AMI DEMO ACADEMY').click();

    // Navigate to Resources
    cy.resourcesnavbar().click();
  });

  it('should interact with resources and modals', () => {
    cy.get(':nth-child(3) > .row > .col-sm-9').click();

// click on the course
    cy.get('#course28 > .text-body-normal').click();
    cy.wait(1000);
    cy.get('#closeIcon > span > .fas').click();
    cy.wait(1000);
//click on the toolkit
    cy.get(':nth-child(1) > #toolkit128 > .tool-message > span').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(2) > .custom-checkbox').click();
    cy.wait(1000);
    cy.get('#download_all').click();
    cy.wait(1000);
    cy.get('#closeIcon > span > .fas').click();


  });

  it('should test resource type filter', () => {
    cy.get('#filterResource .select2-selection').click();
    cy.get("li[role='option']").contains('Tools').should('exist').click();

    cy.get('#my-resources-apply-filter').click();

    // Assertion suggestion: check that some expected text/resource appears
    cy.contains('Tools').should('exist');

    cy.get('#my-resources-clear-filter').click();
  });

  it('should test academy and LJ filters', () => {
    cy.get(':nth-child(2) > #filterAcademy .select2-selection').click();
    cy.get("li[role='option']").contains('AMI DEMO ACADEMY').should('exist').click();
    //cy.get(':nth-child(4) > #filterAcademy .select2-selection').click();
    //cy.get("li[role='option']").contains('Automation LJ QA').should('exist').click();
    cy.get('#select2-lj-select-input-container').click();
    cy.wait(1000);
    //cy.get('#select2-lj-select-input-result-0gqz-3869').click();

    cy.get('#my-resources-apply-filter').click();

    // Add assertion if possible, e.g., filtered result check
    cy.contains('Automation LJ QA').should('exist');

    cy.get('#my-resources-clear-filter').click();
  });


  it('Should test the Go to Courses and return', () => {
    
    cy.get(':nth-child(2) > .flex-justify-between-items-start > :nth-child(2) > div > .text-body-small-bold').click()

  cy.wait(1000);

  // Return to the resources page
  cy.go('back');
  });

});
