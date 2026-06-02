describe('WALL AUTOMATION TESTS', () => {

    const login = () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login');
  
      cy.get('input[name="user[login]"]')
        .should('be.visible')
        .type('stella@muraho.tech');
  
      cy.get('input[name="user[password]"]')
        .should('be.visible')
        .type('AMI123456789');
  
      cy.get('button[type="submit"]').click();
    };
  
    const navigateToWall = () => {
  
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
  
      // Wait for academy dashboard to load
      cy.wait(3000);
  
      // Open Wall
cy.contains('Wall')
  .should('be.visible')
  .click({ force: true });

cy.wait(2000);
  
      cy.wait(1000);
    };
  
    beforeEach(() => {
      cy.viewport(1920, 1080);
      login();
      navigateToWall();
    });
  
    it('Navigates to Wall successfully', () => {
      cy.url().should('include', 'wall');
    });
  
    it('Creates a new post', () => {

        const postText = 'Test automation post';
      
        // Type into the post creation field
        it('Creates a new post', () => {

            const postText = 'Test automation post';
          
            cy.get('.group > .flex-col > #post-body')
              .should('be.visible')
              .click()
              .type(postText);
          
            cy.get('[type="submit"]')
              .should('not.be.disabled')
              .click();
          
          });
        });
    it('Opens reply section', () => {
  
      cy.contains('.body-super-small', 'Reply')
        .first()
        .scrollIntoView()
        .click({ force: true });
  
      cy.get('#comment-body')
        .should('be.visible');
    });
  
    it('Adds a reply', () => {
  
      const replyText = `Automated reply ${Date.now()}`;
  
      cy.contains('.body-super-small', 'Reply')
        .first()
        .scrollIntoView()
        .click({ force: true });
  
      cy.get('#comment-body')
        .should('be.visible')
        .type(replyText);
  
      cy.get('.shadow-reply-create-shadow img')
        .click({ force: true });
  
      cy.contains(replyText, { timeout: 10000 })
        .should('be.visible');
    });
  
    it('Creates and likes a post', () => {
  
      const postText = `Like Test ${Date.now()}`;
  
      cy.get('#post-body')
        .type(postText);
  
      cy.get('.group > .gap-2 > [type="submit"] > .rounded')
        .click({ force: true });
  
      cy.contains(postText, { timeout: 10000 })
        .should('be.visible')
        .as('createdPost');
  
      cy.get('@createdPost')
        .parents('[id^="posts-"]')
        .find('img[alt="like"]')
        .first()
        .click({ force: true });
    });
  
    it('Creates and pins a post', () => {
  
      const postText = `Pin Test ${Date.now()}`;
  
      cy.get('#post-body')
        .type(postText);
  
      cy.get('.group > .gap-2 > [type="submit"] > .rounded')
        .click({ force: true });
  
      cy.contains(postText, { timeout: 10000 })
        .should('be.visible')
        .as('createdPost');
  
      cy.get('@createdPost')
        .parents('[id^="posts-"]')
        .find('.cursor-pointer')
        .first()
        .click({ force: true });
  
      cy.contains('Pin post')
        .click({ force: true });
    });
  
  });