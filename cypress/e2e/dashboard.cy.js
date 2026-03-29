describe('Forum Post Interactions', () => {

  beforeEach(() => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.Academydashboard();
    cy.forumpage();
  });

 it('Should post on the wall', () => {
    cy.get('#post-body')
      .should('be.visible')
      .type('This is my automated Post!');
    
    cy.wait(10000);

    cy.get('button[type="submit"]')
      .filter(':visible')
      .first()
      .click({ force: true });

    cy.contains('This is my automated Post!', { timeout: 30000 })
      .should('exist');
  });

 it('should click on the Like and Reply buttons', () => {
    cy.get('#posts-55334', { timeout: 10000 })
      .should('exist')
      .within(() => {
        cy.contains('button', 'Like').click();
        cy.contains('button', 'Reply').click();
      });

    cy.get('.shadow-reply-shadow > .lg\\:pt-6', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('.p-3 > .w-6')
          .should('be.visible')
          .click({ force: true });
      });
  }); 

  it('should Pin & Un Pin a post', () => {

    cy.get('#posts-55332 > .relative > .flex-col.flex-1 > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3').click();
    cy.wait(20000)
    cy.get('#toggle-posts-55332 > .flex-col.gap-2 > :nth-child(1)').click({ force: true });
    //cy.get('#posts-54648 > .relative > .flex-col.flex-1 > .lg\:pt-2\.5 > .cursor-pointer > .text-primary-gray-dark-3').click();
    //cy.wait(20000);
    //cy.get('#toggle-posts-54648 > .flex-col.gap-2 > :nth-child(1)').click();
  });

  it('should Edit a post', () => {
    //cy.get('#posts-54649 > .relative > .flex-col.flex-1 > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3').click();
    //cy.wait(20000);
    //cy.get('#toggle-posts-54649 > .flex-col.gap-2 > :nth-child(3)').click({ force: true });


  // Open the options menu on the post
  
  cy.get('#posts-55335 > .relative > .flex-col.flex-1 > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3')
    .click();

  cy.wait(20000);

  // Click "Edit"
  cy.get('#toggle-posts-55335 > .flex-col.gap-2 > :nth-child(3)')
    .click({ force: true });
    cy.wait(20000)
 // Type "hello" inside the edit modal
  cy.get('#edit-message-form-edit-posts-55335 > .group')
    .find('textarea, input[type="text"]')
    .should('be.visible')
    .clear({ force: true })
    .type('This is my edited post', { force: true });

  // Click the Send button inside the modal

  cy.get('#edit-message-form-edit-posts-55335 > .group > .justify-between > .gap-2 > button')
  .should('not.be.disabled')  // wait until clickable
  .click({ force: true });

  //cy.get('#edit-message-form-edit-posts-54649 > .group > .justify-between > .gap-2 > button')
    //.click({ force: true });


});

 // it('should click attachments on the main post create box', () => {

  // Emoji
  //cy.get('#emoji-btn > .cursor-pointer')
  //cy.get('button[aria-label="emoji"], .emoji-icon')
    //.click({ force: true });

  // Image
  //cy.get(':nth-child(2) > span > .cursor-pointer')
  //cy.get('button[aria-label="image"], .image-icon')
    //.click({ force: true });

  // Video
  //cy.get(':nth-child(3) > span > .cursor-pointer')
  //cy.get('button[aria-label="video"], .video-icon')
    //.click({ force: true });

  // File

  //cy.get('button[aria-label="file"], .file-icon')
    //.click({ force: true });

  // Tag/Profile
  //cy.get('button[aria-label="profile"], .profile-icon')
    //.click({ force: true });



it('should create a poll and send the post', () => {

  // Click Poll icon
  cy.get('[src="/images/Tooltip Trigger (2).svg"]', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Wait for post input to be ready
 cy.get('.lg\\:pt-6 > :nth-child(1) > #message-form > .group > .shadow-learning-jounreny-component-shadow > .body-normal > #post-body', { timeout: 10000 })
  .should('be.visible')   
  .and('not.be.disabled')      
  .click()                     
  .clear()                    
  .type('Which option do you prefer?'); 

  // Enter poll options
  cy.get('#poll_option_0', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .type('Option A');

  cy.get('#poll_option_1', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .type('Option B');

  // Click Send/Post button
  cy.get('.justify-between > [type="submit"] > .rounded', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click();

})

})