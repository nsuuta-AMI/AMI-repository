
export const login = () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login')
  cy.get('input[name="user[login]"]').type('stella@muraho.tech') // replace with valid email
  cy.get('input[name="user[password]"]').type('AMI123456') // replace with valid password
  cy.get('button[type="submit"]').click()
}
describe('Calendar of Events AD', () => {

  it('Navigate to academy, select Calendar of Events, and perform interactions with pauses', () => {
    login();

    cy.get('#select2-gybselect-container').click({ force: true });
    cy.wait(1000);

    cy.get('.select2-search__field').type('New academy dashboard Academy');
    cy.wait(1000);

    cy.get("li[role='option']").each(($ele) => {
      if ($ele.text().trim() === 'New academy dashboard Academy') {
        cy.log("Found academy");
        cy.wrap($ele).click({ force: true });
        cy.wait(1500);

        cy.title().should("include", "African Management Initiative");

        cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click();
        cy.wait(800);
        cy.get(':nth-child(8) > .dropdown > .nav-link').click();
        cy.wait(800);
        cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click();
        cy.wait(800);
        cy.get(':nth-child(8) > .dropdown > .nav-link').click();
        cy.wait(1000);

        cy.get(':nth-child(8) > .dropdown > .dropdown-menu a')
  .contains('New Academy Dashboard')
  .click({ force: true });

        cy.wait(1500);

        cy.get('#menuIcon', { timeout: 10000 })
          .should('be.visible')
          .click();
        cy.wait(1000);

        // Step 2: Open Calendar of Events
        cy.get('[href="/calendar_of_events"] > .hover\\:bg-primary-light-red-4', { timeout: 10000 })
          .should('be.visible')
          .scrollIntoView()
          .click({ force: true });
        cy.wait(2000);

        // Step 3: Switch to monthly view
        cy.get('#monthlyViewBtn')
          .should('be.visible')
          .click({ force: true });
        cy.wait(1500);

        // Step 4: Expand and open event
      cy.get('#showMore_2025-10-06')
          .should('be.visible')
          .click();
        cy.wait(2000);

        cy.get('.event-title')
          .should('be.visible')
          .click({ force: true });
        cy.wait(2000);

        // Step: Click on the Resume button
// Step: Click on the Resume button
cy.contains('button', 'Resume')
  .should('be.visible')
  .scrollIntoView()
  .click({ force: true });

cy.wait(2000); // Wait to visually confirm the click action
cy.wait(2000); // Wait to observe the action

//Go back 
cy.get('.p-4 > img').click({ force: true });
cy.wait(1000);

cy.get('#menuIcon', { timeout: 10000 })
          .should('be.visible')
          .click();
        cy.wait(1000);
        // Step 5: Go back
        cy.get('.lg\\:justify-end > .lg\\:hidden').click();
        cy.wait(3000);

        // Step 6: Navigate months backwards
        cy.get('#prevBtn').click();
        cy.wait(1500);
        cy.get('#prevBtn').click();
        cy.wait(1500);
        cy.get('#prevBtn').click();
        cy.wait(1500);
        cy.get('#prevBtn').click();
        cy.wait(1500);

        // Step 7: Open component
        cy.get('#\\32 025-06-09 > .relative > .rounded-s-sm').click();
        cy.wait(5000);

        // Step 8: Like the item
        cy.get('.lg\\:gap-8 > :nth-child(1) > :nth-child(1) > .cursor-pointer').click();
        cy.wait(2000);

        cy.get('.lg\\:justify-end > .lg\\:hidden').click();
        cy.wait(3000);

        cy.get('#prevBtn').click();
        cy.wait(1500);
        cy.get('#prevBtn').click();
        cy.wait(1500);
        cy.get('#prevBtn').click();
        cy.wait(1500);
        cy.get('#prevBtn').click();
        cy.wait(1500);
        cy.get('#prevBtn').click();
        cy.wait(1500);

        // Step 9: Select checkbox
        cy.get('[phx-value-type="toolkit"]')
        .should('be.visible')
          .click();
        cy.wait(5000);

        // Step: Select the checkbox to enable the download tool
cy.get('div[phx-click="tool-detail"][phx-value-id="3965"] > [phx-click="select-tool-download"] > :nth-child(1) > .flex-row > .w-6 > .relative')
.scrollIntoView()     // ensure checkbox is visible
.should('be.visible') // confirm it’s visible in the DOM
.click({ force: true }); // click it even if it’s covered


        // Step 11: Verify Calendar page still loaded
        cy.url({ timeout: 10000 }).should('include', '/calendar_of_events');
        cy.wait(1000);

        // ✅ Step 12: Open tool inside the toolkit
        cy.get(':nth-child(4) > div[phx-click="tool-detail"][phx-value-id="4465"] > .body-small-bold > span')
          .should('be.visible')
          .click();
        cy.wait(3000);

        cy.get('#downloadTool-4465 > .flex > .lg\\:block', { timeout: 10000 })
  .should('be.visible')
  .scrollIntoView()
  .click({ force: true });
cy.wait(2000); // Wait for download to start

// Step: Open the file
cy.get('a.lg\\:w-\\[50\\%\\] > .flex > .lg\\:block', { timeout: 10000 })
  .should('be.visible')
  .scrollIntoView()
  .click({ force: true });
cy.wait(2000); // Wait for file to open
      }
    });
  });

});
