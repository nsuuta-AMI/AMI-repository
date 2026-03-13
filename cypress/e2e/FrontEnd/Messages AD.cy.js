//  // ---------- COMMON FUNCTIONS ----------

// const login = () => {
//     cy.visit('https://account.africanmanagers.org/ami_auth/login')
//     cy.get('input[name="user[login]"]').type('stella@muraho.tech')
//     cy.get('input[name="user[password]"]').type('AMI1234567')
//     cy.get('button[type="submit"]').click()
//   }
  
//   // COMMON function: navigate to Messages
//   const navigateToMessages = () => {
//     cy.get('#select2-gybselect-container').click({ force: true })
  
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
  
//     cy.wait(2000)
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

//   cy.wait(2000)
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
  // ---------- COMMON FUNCTIONS ----------

// Login
const login = () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login')

  cy.get('input[name="user[login]"]')
    .type('stella@muraho.tech')

  cy.get('input[name="user[password]"]')
    .type('AMI1234567')

  cy.get('button[type="submit"]')
    .click()
}

// Navigate to Messages
const navigateToMessages = () => {

  cy.get('#select2-gybselect-container')
    .click({ force: true })

  cy.get('.select2-search__field')
    .clear()
    .type('New academy dashboard Academy')

  cy.contains('.select2-results__option', 'New academy dashboard Academy')
    .click({ force: true })

  cy.get(':nth-child(8) > .dropdown > .nav-link')
    .click({ force: true })

  cy.contains(
    ':nth-child(8) > .dropdown > .dropdown-menu a',
    'New Academy Dashboard'
  ).click({ force: true })

  cy.get('[href="/messages"]')
    .scrollIntoView()
    .click({ force: true })

  cy.wait(2000)
}

// Add member to private chat
const addMemberToPrivateChat = () => {

  cy.get('.h-full > .justify-between > .h-6')
    .click({ force: true })

  cy.get('.w-\\[100\\%\\]')
    .type('louange')

  cy.get('[phx-value-user-id="288832"] > .flex > .text-primary-gray-dark-4')
    .click({ force: true })

}

// Send private message
const sendPrivateMessage = () => {

  cy.get('#message-body')
    .click({ force: true })
    .type('hey, This is an automated Private message')

  cy.get('[type="submit"] > .cursor-pointer')
    .click({ force: true })

  cy.wait(2000)
}


// ---------- TEST SUITE ----------

describe('MESSAGES AUTOMATION TESTS', () => {

  beforeEach(() => {
    cy.viewport(1920,1080)
    login()
    navigateToMessages()
  })


  // Test 1: Open messages page
  it('User should successfully navigate to Messages page', () => {

    cy.url().should('include','messages')

  })


  // Test 2: Add member to private chat
  it('User should add a member to private chat', () => {

    addMemberToPrivateChat()

    cy.contains('louange')
      .should('be.visible')

  })


  // Test 3: Send private message
  it('User should send a private message', () => {

    addMemberToPrivateChat()
    sendPrivateMessage()

    cy.contains('hey, This is an automated Private message')
      .should('be.visible')

  })


  // Test 4: Prevent sending empty message
  it('User should not send an empty message', () => {

    addMemberToPrivateChat()

    cy.get('#message-body')
      .click({ force: true })

    cy.get('[type="submit"] > .cursor-pointer')
      .click({ force: true })

    cy.contains('hey, This is an automated Private message')
      .should('not.exist')

  })


  // Test 5: Message persists after refresh
  it('Message should still appear after page refresh', () => {

    addMemberToPrivateChat()
    sendPrivateMessage()

    cy.reload()

    cy.contains('hey, This is an automated Private message')
      .should('be.visible')

  })


  // Test 6: Search user in private chat
  it('User should be able to search for a member', () => {

    cy.get('.h-full > .justify-between > .h-6')
      .click({ force: true })

    cy.get('.w-\\[100\\%\\]')
      .type('louange')

    cy.contains('louange')
      .should('be.visible')

  })

})