// <reference types ="cypress"/>
//describe('Test calendar of events', () => {
   
    //it('should interact with events in a dialog box within a calendar', () => {
      //cy.visit('https://account.africanmanagers.org/ami_auth/login')
//cy.get('input[name="user[login]"]').type('stella@muraho.tech')
//cy.get('input[name="user[password]"]').type('AMI123456')
//cy.get('button[type="submit"]').click()
//cy.url().should('include', '/dashboard')
      // cy.calendar()


  //})



//})
// =========================
// 1️⃣ LOGIN FUNCTION
// =========================
export const login = () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login')
  cy.get('input[name="user[login]"]').type('stella@muraho.tech') // replace with valid email
  cy.get('input[name="user[password]"]').type('AMI1234567890') // replace with valid password
  cy.get('button[type="submit"]').click()
  cy.url().should('include', '/dashboard')
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
          .click();
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
        cy.get('#showMore_2025-09-01')
          .should('be.visible')
          .click();
        cy.wait(1000);

        cy.get('#\\32 025-09-01 > .overflow-dropdown > .event-title')
          .should('be.visible')
          .click({ force: true });
        cy.wait(2000);

        // Step 5: Go back
        cy.get('.lg\\:justify-end > .lg\\:hidden').click();
        cy.wait(1500);

        // Step 6: Navigate months backwards
        cy.get('#prevBtn').click();
        cy.wait(1000);
        cy.get('#prevBtn').click();
        cy.wait(1500);

        // Step 7: Open component
        cy.get('#\\32 025-07-09 > .relative > .rounded-s-sm').click();
        cy.wait(1500);

        // Step 8: Like the item
        cy.get('.lg\\:gap-8 > :nth-child(1) > :nth-child(1) > .cursor-pointer').click();
        cy.wait(1200);

        // Step 9: Select checkbox
        cy.get(
          'div[phx-click="tool-detail"][phx-value-id="3965"] > [phx-click="select-tool-download"] > :nth-child(1) > .flex-row > .w-6 > .relative'
        )
          .scrollIntoView()
          .click();
        cy.wait(1500);

        // Step 10: Download tool
        cy.get('#download-tools > .flex > .lg\\:block').click();
        cy.wait(2000);

        // Step 11: Verify Calendar page still loaded
        cy.url({ timeout: 10000 }).should('include', '/calendar_of_events');
        cy.wait(1500);

        // ✅ Step 12: Open tool inside the toolkit
        cy.get('div[phx-click="tool-detail"][phx-value-id="2642"] > .lg\\:w-8')
          .should('be.visible')
          .click();
        cy.wait(2000);

        // ✅ Step 13: Open the tool content
        cy.get('a.lg\\:w-\\[50\\%\\] > .flex > .lg\\:block')
          .should('be.visible')
          .click();
        cy.wait(2000);

        // ✅ Step 14: Download that tool
        cy.get('#downloadTool-2642 > .flex > .lg\\:block')
          .should('be.visible')
          .click();
        cy.wait(3000);
      }
    });
  });

});


// =========================
// 2️⃣ TEST SCRIPT 1: LOGIN
// =========================
//describe('1️⃣ Login', () => {
  //it('should login successfully', () => {
    //cy.session('user-login', login)
  //})
//})

// =========================
// 3️⃣ TEST SCRIPT 2: SEARCH & NAVIGATE TO NEW ACADEMY DASHBOARD
// =========================
//describe('2️⃣ Search & Navigate to New Academy Dashboard', () => {
  //it('should search and select New Academy Dashboard', () => {
    //cy.session('user-login', login) // restore session

    //cy.get('#select2-gybselect-container').click({ force: true })
    //cy.get('.select2-search__field').type('New academy dashboard Academy')

    //cy.get("li[role='option']").each(($ele) => {
      //if ($ele.text().trim() === 'New academy dashboard Academy') {
       // cy.log("Found academy")
        //cy.wrap($ele).click({ force: true })
        //cy.title().should("include", "African Management Initiative")

        //cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
        //cy.get(':nth-child(8) > .dropdown > .nav-link').click()
        //cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
        //cy.get(':nth-child(8) > .dropdown > .nav-link').click()

        //cy.get(':nth-child(8) > .dropdown > .dropdown-menu a')
          //.contains('New Academy Dashboard')
          //.click()
    

// ===========