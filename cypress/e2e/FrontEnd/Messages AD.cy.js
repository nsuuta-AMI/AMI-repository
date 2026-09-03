
 // ---------- COMMON FUNCTIONS ----------

// Login
// const login = () => {
//     cy.visit('https://account.africanmanagers.org/ami_auth/login')
//     cy.get('input[name="user[login]"]').type('stella@muraho.tech')
//     cy.get('input[name="user[password]"]').type('AMI123456789')
//     cy.get('button[type="submit"]').click()
//   }
  
//   // COMMON function: navigate to Messages
//   const navigateToMessages = () => {
//     cy.contains('.select2-results__option', 'New academy dashboard Academy')
//   .click({ force: true })
  
//     cy.get('.select2-search__field')
//       .clear()
//       .type('New academy dashboard Academy')
  
//     cy.contains('.select2-results__option', 'New academy dashboard Academy')
//       .click({ force: true })
  
//     cy.get(':nth-child(8) > .dropdown > .nav-link')
//       .click({ force: true })
  
//     cy.contains(
//       ':nth-child(8) > .dropdown > .dropdown-menu a',
//       'New Academy Dashboard'
//     ).click({ force: true })
  
//     cy.get('[href="/messages"]')
//       .scrollIntoView()
//       .click({ force: true })
  
//     cy.wait(200000000)
//   }
  
//   // COMMON function: add member to private chat
//   const addMemberToPrivateChat = () => {
//     cy.get('.h-full > .justify-between > .h-6')
//       .click({ force: true })
  
//     cy.get('.w-\\[100\\%\\]')
//       .type('louange')
  
//     cy.get('[phx-value-user-id="288832"] > .flex > .text-primary-gray-dark-4')
//       .click({ force: true })
//   }
  
//   // COMMON function: send a private message
// const sendPrivateMessage = () => {
//   cy.get('#message-body')
//     .click({ force: true })
//     .type('hey, This is an automated Private message')

//   cy.get('[type="submit"] > .cursor-pointer')
//     .click({ force: true })

//   cy.wait(20000000)
// }

  
//   // ---------- TEST SUITE ----------
  
//   describe('MESSAGES AUTOMATION TESTS', () => {
  
//     // Test 1: LOGIN + NAVIGATE
//     it('Login and navigate to Messages', () => {
//       cy.viewport(1920, 1080)
//       login()
//       navigateToMessages()
//     })
  
//     // Test 2: LOGIN + NAVIGATE + ADD MEMBER
//     it('Add a new member to a private chat', () => {
//       cy.viewport(1920, 1080)
//       login()
//       navigateToMessages()
//       addMemberToPrivateChat()
//     })
//   // Test 3: LOGIN + NAVIGATE + ADD MEMBER + SEND MESSAGE
// it('Send a private message', () => {
//   cy.viewport(1920, 1080)
//   login()
//   navigateToMessages()
//   addMemberToPrivateChat()
//   sendPrivateMessage()
// })
//   })



  


// const login = () => {
//   cy.visit('https://account.africanmanagers.org/ami_auth/login')

//   cy.get('input[name="user[login]"]')
//     .should('be.visible')
//     .type('stella@muraho.tech')

//   cy.get('input[name="user[password]"]')
//     .type('AMI123456789')

//   cy.get('button[type="submit"]')
//     .click()
// }

// const navigateToMessages = () => {

//   // Select Academy
//   cy.get('#select2-gybselect-container')
//   .should('be.visible')
//   .click({ force: true });

// cy.get('.select2-search__field')
//   .should('be.visible')
//   .type('New academy dashboard Academy');

// cy.contains(
//   '.select2-results__option',
//   'New academy dashboard Academy'
// ).click({ force: true });

// // Open Academy Menu
// cy.get(':nth-child(8) > .dropdown > .nav-link')
//   .click({ force: true });

// cy.contains(
//   ':nth-child(8) > .dropdown > .dropdown-menu a',
//   'New Academy Dashboard'
// ).click({ force: true });

// // Wait for academy dashboard to load
// cy.wait(3000);

// cy.contains('Messages')
// .should('be.visible')
// .click({ force: true });

// cy.wait(2000);
// cy.wait(1000);
// };

// const sendPrivateMessage = () => {

//   cy.get('#message-body')
//     .should('be.visible')
//     .click({ force: true })
//     .type('Hey, this is an automated private message', {
//       delay: 100,
//       force: true
//     });

//   cy.wait(1000);

//   cy.get('[type="submit"]')
//     .should('not.be.disabled')
//     .click({ force: true });

// };
describe('PRIVATE MESSAGE TESTS', () => {
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

    cy.get('#select2-gybselect-container', { timeout: 20000 })
      .should('be.visible');
  };

  const navigateToMessages = () => {
    cy.get('#select2-gybselect-container')
      .should('be.visible')
      .click({ force: true });

    cy.get('.select2-search__field')
      .should('be.visible')
      .type('New academy dashboard Academy');

    cy.contains(
      '.select2-results__option',
      'New academy dashboard Academy'
    ).click({ force: true });

    cy.get(':nth-child(8) > .dropdown > .nav-link')
      .click({ force: true });

    cy.contains(
      ':nth-child(8) > .dropdown > .dropdown-menu a',
      'New Academy Dashboard'
    ).click({ force: true });

    cy.wait(3000);

    cy.contains('Messages')
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);
  };

  const addMemberToPrivateChat = () => {
    cy.get('.lg\\:border-r > :nth-child(2) > .p-4 > .h-6')
      .should('be.visible')
      .click({ force: true });

    cy.get('.lg\\:px-0 > .relative > .w-full')
      .should('be.visible')
      .type('Stellatest');

    cy.get(
      '[phx-value-conversation-id="7461"] > .flex-col > :nth-child(2) > .flex-1'
    )
      .should('be.visible')
      .click({ force: true });
  };

  const sendPrivateMessage = () => {
    const messageText = `Hey, this is an automated private message }`;

    cy.get('#message-body')
      .should('be.visible')
      .click({ force: true })
      .type(messageText, { delay: 100, force: true });

    cy.get('[type="submit"] > .cursor-pointer')
      .should('be.visible')
      .click({ force: true });

    // Verify that the newly sent message is displayed
    cy.contains(messageText, { timeout: 15000 })
      .should('be.visible');
  };

  // Login runs before every separate test.
  beforeEach(() => {
    cy.viewport(1920, 1080);
    login();
  });

  // ============================================================
  // TEST 1 - LOGIN
  // ============================================================
  it('Logs in successfully', () => {
    cy.get('#select2-gybselect-container')
      .should('be.visible');
  });

  // ============================================================
  // TEST 2 - OPEN MESSAGES
  // ============================================================
  it('Opens the Messages page', () => {
    navigateToMessages();

    cy.contains('Messages')
      .should('be.visible');
  });

  // ============================================================
  // TEST 3 - START A PRIVATE CHAT AND SEND A MESSAGE
  // ============================================================
  it('Starts a private chat and sends a message', () => {
    navigateToMessages();

    addMemberToPrivateChat();

    sendPrivateMessage();
  });
});