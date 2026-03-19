
const login = () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login')
  cy.get('input[name="user[login]"]').type('stella@muraho.tech')
  cy.get('input[name="user[password]"]').type('AMI1234567')
  cy.get('button[type="submit"]').click()
}

// COMMON function: navigate to Wall
const navigateToWall = () => {
  cy.get('#select2-gybselect-container').click({ force: true });

  cy.get('.select2-search__field')
    .clear()
    .type('New academy dashboard Academy');

  cy.contains('.select2-results__option', 'New academy dashboard Academy')
    .click({ force: true });

  cy.get(':nth-child(8) > .dropdown > .nav-link')
    .click({ force: true });

  cy.contains(':nth-child(8) > .dropdown > .dropdown-menu a', 'New Academy Dashboard')
    .click({ force: true });

  cy.get('[href="/academy_wall"]')
    .scrollIntoView()
    .click({ force: true });

  cy.wait(2000);
};


describe('Navigate to Wall AD and make interactions', () => {

  // Test 1: LOGIN + NAVIGATE
  it('Login and navigate to Wall', () => {
    cy.viewport(1920, 1080);
    login();
    navigateToWall();
  });

  // Test 2: LOGIN + NAVIGATE + CREATE POST
  it('Create a new post on the wall', () => {
    cy.viewport(1920, 1080);
    login();
    navigateToWall();

    cy.get('#post-body')
      .click()
      .type('Test automation post')
      .blur();

    cy.get('.group > .gap-2 > [type="submit"] > .rounded')
      .click({ force: true })
      .wait(1000)
      .click({ force: true });
  });

  // Test 3: LOGIN + NAVIGATE + CLICK REPLY
  it('Click reply on the first post', () => {
    cy.viewport(1920, 1080);
    login();
    navigateToWall();

    cy.contains('.body-super-small', 'Reply')
      .first()
      .scrollIntoView()
      .click({ force: true });

    cy.get('#comment-body').should('be.visible');
  })

     // Test 4: LOGIN + NAVIGATE + TYPE REPLY + SEND
  it('Add a reply and send it', () => {
    cy.viewport(1920, 1080);
    login();
    navigateToWall();

    // Open reply input
    cy.contains('.body-super-small', 'Reply')
      .first()
      .scrollIntoView()
      .click({ force: true });

    cy.get('#comment-body')
      .should('be.visible')
      .type('This is an automated reply from Cypress!', { delay: 30 });

    // Send reply
    cy.get('.shadow-reply-create-shadow > .group > .gap-2 > [type="submit"] > .rounded > img')
      .click({ force: true });

    });

    
    });
  


















































// export const login = () => {
//   cy.visit('https://account.africanmanagers.org/ami_auth/login')
//   cy.get('input[name="user[login]"]').type('stella@muraho.tech') // replace with valid email
//   cy.get('input[name="user[password]"]').type('AMI23250') // replace with valid password
//   cy.get('button[type="submit"]').click()
// }

// describe('Wall AD', () => {

//   it('Navigate to academy dashboard, select Wall, and perform interactions', () => {
//     // Set the viewport to full desktop size
//     cy.viewport(1920, 1080);

//     // Perform login
//     login();
   
//   // Step 1: Open academy selector dropdown
// cy.get('#select2-gybselect-container', { timeout: 5000 })
// .should('be.visible')
// .click({ force: true });

// // Step 2: Type the academy name
// cy.get('.select2-search__field', { timeout: 5000 })
// .should('be.visible')
// .clear()
// .type('New academy dashboard Academy', { delay: 50 });

// // Step 3: Select the correct academy option
// cy.contains('.select2-results__option', 'New academy dashboard Academy', { timeout: 7000 })
// .should('be.visible')
// .click({ force: true });

// // Step 4: Wait for the reload to complete
// cy.location('pathname', { timeout: 2000 }).should('include', '/dashboard/home');

// // Step 5: Reopen the dropdown navigation
// cy.get(':nth-child(8) > .dropdown > .nav-link', { timeout: 1000 })
// .should('be.visible')
// .click({ force: true });

// // Step 6: Select "New Academy Dashboard" from dropdown
// cy.get(':nth-child(8) > .dropdown > .dropdown-menu a', { timeout: 1500 })
// .contains('New Academy Dashboard')
// .should('be.visible')
// .click({ force: true });

// //cy.get(':nth-child(8) > .dropdown > .dropdown-menu a', { timeout: 1500 })
// //.contains('New Academy Dashboard')
// //.should('be.visible')
// //.click({ force: true });

// // Step 7: Confirm navigation
// //cy.url({ timeout: 20000 }).should('include', '/my_journey');
// //cy.contains('New Academy Dashboard', { timeout: 5000 }).should('be.visible');

// cy.get('[href="/academy_wall"]', { timeout: 10000 })
//   .scrollIntoView()
//   .click({ force: true });

// cy.wait(2000); // wait for the wall page to load

// cy.get('#post-body').click().type('Test automation post').blur();
// cy.wait(500);
// cy.get('.group > .gap-2 > [type="submit"] > .rounded')
//   .click({ force: true })
//   .wait(1000)
//   .click({ force: true });

//   cy.get('.body-super-small')
//   .contains('Reply')
//   .first()
//   .scrollIntoView()
//   .click({ force: true });

// cy.get('#comment-body', { timeout: 10000 })
//   .should('be.visible');
//   })
// })
