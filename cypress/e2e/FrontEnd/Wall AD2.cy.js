cy.contains('.body-super-small', 'Reply').first().scrollIntoView().click();
it('Opens reply section', () => {
  cy.contains('.body-super-small', 'Reply')
    .first()
    .scrollIntoView()
    .click({ force: true });

  cy.get('#comment-body').should('be.visible');
});

it('adds a reply', () => {
it('Adds a reply', () => {
  const replyText = `Automated reply ${Date.now()}`;
  cy.contains('.body-super-small', 'Reply').first().scrollIntoView().click();
  cy.get('#comment-body').should('be.visible').type(replyText);
  cy.get('.shadow-reply-create-shadow img').should('be.visible').click();

  cy.contains('.body-super-small', 'Reply')
    .first()
    .scrollIntoView()
    .click({ force: true });

  cy.get('#comment-body')
    .should('be.visible')
    .type(replyText);

  cy.get('.shadow-reply-create-shadow img')
    .click({ force: true });

  cy.contains(replyText, { timeout: 10000 }).should('be.visible');
});

it('creates and likes a post', () => {
it('Creates and likes a post', () => {
  const postText = `Like Test ${Date.now()}`;
  createPost(postText);
  createdPost(postText).find('img[alt="like"]').first().should('be.visible').click();

  cy.get('#post-body').type(postText);
  cy.get('.group > .gap-2 > [type="submit"] > .rounded').click({ force: true });

  cy.contains(postText, { timeout: 10000 })
    .should('be.visible')
    .as('createdPost');

  cy.get('@createdPost')
    .parents('[id^="posts-"]')
    .find('img[alt="like"]')
    .first()
    .click({ force: true });
});

it('creates and pins a post', () => {
it('Creates and pins a post', () => {
  const postText = `Pin Test ${Date.now()}`;
  createPost(postText);
  openPostMenu(postText);
  cy.contains('button, a, li', 'Pin post').should('be.visible').click();
  createdPost(postText).should('contain.text', 'Pinned');

  cy.get('#post-body').type(postText);
  cy.get('.group > .gap-2 > [type="submit"] > .rounded').click({ force: true });

  cy.contains(postText, { timeout: 10000 })
    .should('be.visible')
    .as('createdPost');

  cy.get('@createdPost')
    .parents('[id^="posts-"]')
    .find('.cursor-pointer')
    .first()
    .click({ force: true });

  cy.contains('Pin post').click({ force: true });
  cy.get('@createdPost').should('contain.text', 'Pinned');
});

it('creates and edits a post', () => {
it('Creates and edits a post', () => {
  const postText = `Edit Test ${Date.now()}`;
  const updatedPost = `${postText} - Edited`;
  createPost(postText);
  openPostMenu(postText);
  cy.contains('button, a, li', 'Edit post').should('be.visible').click();
  cy.get('#post-body').should('be.visible').clear().type(updatedPost);
  cy.contains('button', /^Save$/).should('be.visible').click();
  cy.contains(updatedPost, { timeout: 10000 }).should('be.visible');

  cy.get('#post-body').type(postText);
  cy.get('[type="submit"]').click({ force: true });

  cy.contains(postText, { timeout: 10000 })
    .should('be.visible')
    .parents('[id^="posts-"]')
    .as('post');

  cy.get('@post').find('.cursor-pointer').first().click({ force: true });
  cy.contains('Edit post').click({ force: true });

  cy.get('#post-body').clear().type(updatedPost);
  cy.contains('Save').click({ force: true });
  cy.contains(updatedPost).should('be.visible');
});

it('creates and deletes a post', () => {
it('Creates and deletes a post', () => {
  const postText = `Delete Test ${Date.now()}`;
  createPost(postText);
  openPostMenu(postText);
  cy.contains('button, a, li', 'Delete post').should('be.visible').click();
  cy.contains('button', /^Delete$/).should('be.visible').click();
  cy.contains(postText, { timeout: 10000 }).should('not.exist');

  cy.get('#post-body').type(postText);
  cy.get('[type="submit"]').click({ force: true });

  cy.contains(postText, { timeout: 10000 })
    .should('be.visible')
    .parents('[id^="posts-"]')
    .as('post');

  cy.get('@post').find('.cursor-pointer').first().click({ force: true });
  cy.contains('Delete post').click({ force: true });
  cy.contains('Delete').click({ force: true });
  cy.contains(postText).should('not.exist');
});
});
});
});
});
});
