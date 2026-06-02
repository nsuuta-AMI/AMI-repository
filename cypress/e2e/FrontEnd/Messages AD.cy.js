
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

    cy.get('input[name="user[login]"]')
      .should('be.visible')
      .type('stella@muraho.tech');

    cy.get('input[name="user[password]"]')
      .should('be.visible')
      .type('AMI123456789');

    cy.get('button[type="submit"]')
      .click();
  };

  const navigateToMessages = () => {

    // Select Academy
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

    // Open Academy Menu
    cy.get(':nth-child(8) > .dropdown > .nav-link')
      .click({ force: true });

    cy.contains(
      ':nth-child(8) > .dropdown > .dropdown-menu a',
      'New Academy Dashboard'
    ).click({ force: true });

    // Wait for dashboard
    cy.wait(3000);

    // Open Messages
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
      .type('louange');

    cy.get('[phx-value-user-id="288832"] > .flex > .text-primary-gray-dark-2')
      .should('be.visible')
      .click({ force: true });
  };

  const sendPrivateMessage = () => {

    const messageText = 'Hey, this is an automated private message';

    cy.get('#message-body')
      .should('be.visible')
      .click({ force: true })
      .type(messageText, {
        delay: 100,
        force: true
      });

    cy.wait(1000);

    cy.get('[type="submit"]')
      .should('be.visible')
      .click({ force: true });
  };

  it('Sends a private message', () => {

    cy.viewport(1920, 1080);

    login();

    navigateToMessages();

    addMemberToPrivateChat();

    sendPrivateMessage();

  });

});