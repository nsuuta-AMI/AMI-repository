
 // ---------- COMMON FUNCTIONS ----------

// Login
const login = () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('input[name="user[login]"]').type('stella@muraho.tech')
    cy.get('input[name="user[password]"]').type('AMI1234567')
    cy.get('button[type="submit"]').click()
  }
  
  // COMMON function: navigate to Messages
  const navigateToMessages = () => {
    cy.contains('.select2-results__option', 'New academy dashboard Academy')
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
  
  // COMMON function: add member to private chat
  const addMemberToPrivateChat = () => {
    cy.get('.h-full > .justify-between > .h-6')
      .click({ force: true })
  
    cy.get('.w-\\[100\\%\\]')
      .type('louange')
  
    cy.get('[phx-value-user-id="288832"] > .flex > .text-primary-gray-dark-4')
      .click({ force: true })
  }
  
  // COMMON function: send a private message
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
  
    // Test 1: LOGIN + NAVIGATE
    it('Login and navigate to Messages', () => {
      cy.viewport(1920, 1080)
      login()
      navigateToMessages()
    })
  
    // Test 2: LOGIN + NAVIGATE + ADD MEMBER
    it('Add a new member to a private chat', () => {
      cy.viewport(1920, 1080)
      login()
      navigateToMessages()
      addMemberToPrivateChat()
    })
  // Test 3: LOGIN + NAVIGATE + ADD MEMBER + SEND MESSAGE
it('Send a private message', () => {
  cy.viewport(1920, 1080)
  login()
  navigateToMessages()
  addMemberToPrivateChat()
  sendPrivateMessage()
})
  })



  