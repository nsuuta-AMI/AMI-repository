describe('login page', () => {
  it('should allow user to login with valid credentials', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('input[name="user[login]"]').type('stella@muraho.tech') // replace with valid email
    cy.get('input[name="user[password]"]').type('AMI123456') // replace with valid password
    cy.get('button[type="submit"]').click()
    cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
    cy.get('.dropdown-menu > :nth-child(5)').should('be.visible').click()
    cy.get(':nth-child(8) > .dropdown > .dropdown-menu > [href="https://account.africanmanagers.org/ami_auth/user/logout/3036009"]').click()

  })
})

  