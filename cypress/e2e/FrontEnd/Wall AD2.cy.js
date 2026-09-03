describe('WALL AUTOMATION TESTS', () => {

  // ============================================================
  // LOGIN
  // ============================================================

  const login = () => {

    cy.visit('https://account.africanmanagers.org/ami_auth/login');

    cy.get('input[name="user[login]"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type('stella@muraho.tech');

    cy.get('input[name="user[password]"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type('AMI123456789', { log: false });

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();

    // Confirm login completed
    cy.get('#select2-gybselect-container', { timeout: 20000 })
      .should('be.visible');
  };


  // ============================================================
  // NAVIGATE TO WALL
  // ============================================================

  const navigateToWall = () => {

    // Open Academy selector
    cy.get('#select2-gybselect-container', { timeout: 15000 })
      .should('be.visible')
      .click({ force: true });


    // Search for Academy
    cy.get('.select2-search__field', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('New academy dashboard Academy');


    // Select Academy
    cy.contains(
      '.select2-results__option',
      'New academy dashboard Academy',
      { timeout: 15000 }
    )
      .should('be.visible')
      .click({ force: true });


    // Open Academy dropdown
    cy.get(':nth-child(8) > .dropdown > .nav-link', {
      timeout: 15000
    })
      .should('be.visible')
      .click({ force: true });


    // Select New Academy Dashboard
    cy.contains(
      ':nth-child(8) > .dropdown > .dropdown-menu a',
      'New Academy Dashboard',
      { timeout: 15000 }
    )
      .should('be.visible')
      .click({ force: true });


    // Wait for New Academy Dashboard
    cy.wait(3000);


    // ==========================================================
    // WALL - 4TH SIDEBAR MENU ITEM
    // 0 = Learning Journey
    // 1 = Resources
    // 2 = Courses
    // 3 = Wall
    // 4 = Messages
    // ==========================================================

    cy.get('.lg\\:pl-6 > .flex > .w-full', {
      timeout: 20000
    })
      .filter(':visible')
      .eq(3)
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

  };


  // ============================================================
  // CREATE POST HELPER
  // ============================================================

  const createPost = (postText) => {

    cy.get('#post-body', { timeout: 15000 })
      .should('be.visible')
      .click()
      .clear()
      .type(postText);


    // Submit post
    cy.get('#message-form')
      .find('[type="submit"]')
      .should('exist')
      .should('not.be.disabled')
      .click({ force: true });


    // Verify post created
    cy.contains(postText, { timeout: 15000 })
      .should('be.visible');
  };


  // ============================================================
  // BEFORE EACH TEST
  // ============================================================

  beforeEach(() => {

    cy.viewport(1920, 1080);

    login();

    navigateToWall();

  });


  // ============================================================
  // TEST 1 - NAVIGATE TO WALL
  // ============================================================

  it('Navigates to Wall successfully', () => {

    cy.get('#post-body', { timeout: 15000 })
      .should('be.visible');

  });



  // ============================================================
// TEST 2 - CREATE POST
// ============================================================
it('Creates and likes a post', () => {

  const postText = 'Test automation post';


  // CREATE POST
  cy.get('#post-body', { timeout: 15000 })
    .should('be.visible')
    .clear()
    .type(postText);


  // Submit
  cy.get('#message-form')
    .find('[type="submit"]')
    .should('not.be.disabled')
    .click({ force: true });


  // VERIFY CREATED POST
  cy.contains(postText, { timeout: 15000 })
  .should('be.visible');

});





  // ============================================================
  // TEST 3 - OPEN REPLY SECTION
  // ============================================================

  it('Opens reply section', () => {

    cy.contains('.body-super-small', 'Reply', {
      timeout: 15000
    })
      .first()
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });


    cy.get('#comment-body', { timeout: 15000 })
      .should('be.visible');

  });


  // ============================================================
  // TEST 4 - ADD A REPLY
  // ============================================================


// Type reply
// cy.get('#comment-body', { timeout: 15000 })
// .should('be.visible')
// .type('This is an automated reply');

// // Submit reply
// cy.get('#comment-form [type="submit"]:visible')
// .first()
// .click({ force: true });
  
  // });

// ============================================================
// TEST 6 - PIN AN EXISTING AUTOMATION POST
// ============================================================

it('Pins the existing automation post', () => {
  const postText = 'Test automation post';

  // Find the existing automation post — no new post is created.
  cy.contains('[id^="posts-"]', postText, { timeout: 15000 })
    .first()
    .as('automationPost');

  // Bring that post into view.
  cy.get('@automationPost')
    .scrollIntoView()
    .should('be.visible');

  // Click its three-dot menu.
  cy.get('@automationPost')
    .find(
      '.relative > .overflow-x-hidden > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3'
    )
    .should('be.visible')
    .click();

  // Screenshot shows the actual option label as "Pin Post For All".
  cy.contains('Pin Post For All', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Confirm the post is now pinned.
  cy.get('@automationPost')
    .find('[phx-click*="Pin-Post"]')
    .should('exist');
});
  
// ============================================================
// TEST 7 - CLICK EDIT ON ONE NEW POST
// ============================================================

it('Creates a post and clicks Edit Post for that same post', () => {
  const postText = `Edit Test ${Date.now()}`;

  // Create and submit one post
  createPost(postText);

  // Save the post created in this test run
  cy.contains(postText, { timeout: 15000 })
    .should('exist')
    .closest('[id^="posts-"]')
    .should('exist')
    .as('createdPost');

  cy.get('@createdPost')
    .scrollIntoView()
    .should('be.visible');

  // Click this post's three-dot menu
  cy.get('@createdPost')
    .find(
      '.relative > .overflow-x-hidden > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3'
    )
    .should('be.visible')
    .click();

  // Apply your Edit selector to this newly created post's dynamic ID
  cy.get('@createdPost')
    .invoke('attr', 'id')
    .then((postId) => {
      cy.get(
        `#toggle-${postId} > .flex-col > [phx-click="edit-post"] > .body-small`
      )
        .should('be.visible')
        .click();
    });
});


  // ============================================================
  // TEST 8 - CREATE AND DELETE POST
  // ============================================================

  it('Creates and deletes a post', () => {

    const postText = `Delete Test ${Date.now()}`;


    // Create post
    createPost(postText);


    // Find created post
    cy.contains(postText, { timeout: 15000 })
      .should('be.visible')
      .parents('[id^="posts-"]')
      .first()
      .as('createdPost');


    // Open post options
    cy.get('@createdPost')
      .find('.cursor-pointer')
      .first()
      .should('exist')
      .click({ force: true });


    // Select Delete Post
    cy.contains('Delete post', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });


    // Confirm deletion
    cy.contains('Delete', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });


    // Verify post deleted
    cy.contains(postText, { timeout: 10000 })
      .should('not.exist');

  });

});