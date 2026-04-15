const login = () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login')
  cy.get('input[name="user[login]"]').type('stella@muraho.tech')
  cy.get('input[name="user[password]"]').type('AMI12345678')
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


describe('WALL AUTOMATION TESTS', () => {

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

    it('Like and pin the created post', () => {
      login();
    
      // Navigate to Wall
      cy.viewport(1920, 1080);
      cy.visit('https://new.academy.wall.url'); // replace with correct path
    
      // Find the created post by text
      cy.contains('.post-content', 'Test automation post')
        .should('exist')
        .as('createdPost'); // store for reuse
    
      // Open the 3 dots menu
      cy.get('@createdPost')
        .parents('[id^="posts-"]')
        .find('.cursor-pointer .text-primary-gray-dark-3')
        .click({ force: true });
    
      // Pin or whatever option appears
      cy.contains('Pin post').click({ force: true });
    
      // Like the post (heart icon)
      cy.get('@createdPost')
        .parents('[id^="posts-"]')
        .find('img[alt="like"]')
        .click({ force: true });
    });
  });



