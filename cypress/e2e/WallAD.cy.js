describe('Forum Post Interactions', () => {

  beforeEach(() => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.Academydashboard();
    cy.forumpage();
  });

 it('Should post on the wall', () => {
    cy.get('.group > .flex-col > #post-body')
      .should('be.visible')
      .type('This is my automated Post!');

    cy.get('#message-form [type="submit"]')
      .first()
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    cy.contains('[id^="posts-"]', 'This is my automated Post!', { timeout: 30000 })
      .should('exist');
  });

 it('should click on the Like and Reply buttons', () => {
    cy.contains('[id^="posts-"]', 'This is my automated Post!', { timeout: 30000 })
      .first()
      .within(() => {
        cy.contains(/like/i, { timeout: 10000 }).click({ force: true });
        cy.contains(/reply/i, { timeout: 10000 }).click({ force: true });
      });

    cy.get('.shadow-reply-shadow > .lg\\:pt-6', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('.p-3 > .w-6')
          .should('be.visible')
          .click({ force: true });
      });
  }); 

  it('should add a reply to a post', () => {
    cy.contains('[id^="posts-"]', 'This is my automated Post!', { timeout: 30000 })
      .first()
      .within(() => {
        cy.contains(/reply/i, { timeout: 10000 }).click({ force: true });
      });

    cy.get('.shadow-reply-shadow', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('textarea, input[type="text"]')
          .first()
          .should('be.visible')
          .clear({ force: true })
          .type('this is a reply', { force: true });
      });

    // Click the send button using the specific selector
    cy.get('.lg\\:pt-6 > :nth-child(1) > #message-form > .group > .gap-2 > [type="submit"] > .rounded')
      .should('be.visible')
      .click({ force: true });

    cy.contains('this is a reply', { timeout: 10000 })
      .should('exist');
  });

  it('should Pin & Un Pin a post', () => {
    cy.contains('[id^="posts-"]', 'This is my automated Post!', { timeout: 30000 })
      .first()
      .invoke('attr', 'id')
      .then((id) => {
        cy.get(`#${id} > .relative > .flex-col.flex-1 > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3`).click();
        cy.get(`#toggle-${id} > .flex-col.gap-2 > :nth-child(1)`).should('be.visible').click({ force: true });
      });
  });

  it('should Edit a post', () => {
    cy.contains('[id^="posts-"]', 'This is my automated Post!', { timeout: 30000 })
      .first()
      .invoke('attr', 'id')
      .then((id) => {
        // Open the options menu on the post
        cy.get(`#${id} > .relative > .flex-col.flex-1 > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3`)
          .click();

        // Click "Edit"
        cy.get(`#toggle-${id} > .flex-col.gap-2 > :nth-child(3)`)
          .should('be.visible')
          .click({ force: true });

        // Type inside the edit modal
        cy.get(`#edit-message-form-edit-${id} > .group`)
          .find('textarea, input[type="text"]')
          .should('be.visible')
          .clear({ force: true })
          .type('This is my edited post', { force: true });

        // Click the Send button inside the modal
        cy.get(`#edit-message-form-edit-${id} > .group > .justify-between > .gap-2 > button`)
          .should('not.be.disabled')  // wait until clickable
          .click({ force: true });
      });
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
    .click({ force: true });

})

/*it('should Delete a post', () => {
  // Open post menu
  cy.get('#posts-54859 > .relative > .flex-col.flex-1 > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3')
    .click();

  cy.wait(2000);

  // Click Delete option
  cy.get('#toggle-posts-54859 > .flex-col > :nth-child(3)')
    .click({ force: true });
});*/

});