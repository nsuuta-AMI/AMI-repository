describe('Forum Post Interactions', () => {

  beforeEach(() => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.Academydashboard();
    cy.forumpage();
  });

 it('Should post on the wall', () => {
    // Use just #post-body — the ID is unique, no need for fragile parent-chain selectors
    // Re-query #post-body for each step — clicking it re-renders the element
    cy.get('#post-body', { timeout: 15000 })
      .should('be.visible')
      .click();
    cy.get('#post-body').clear();
    cy.get('#post-body').type('This is my automated Post!');

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
    // Unique text so a reply left over from an earlier run can't make this pass
    const replyText = `this is a reply post ${Date.now()}`;

    // Find the post dynamically — never hardcode post IDs as they change per session
    cy.contains('[id^="posts-"]', 'This is my automated Post!', { timeout: 30000 })
      .first()
      .invoke('attr', 'id')
      .then((id) => {
        // Click the Reply button on this post (same match the Like/Reply test uses;
        // the button text can include a count, so don't anchor the regex)
        cy.get(`#${id}`)
          .contains(/reply/i)
          .click();

        // Several posts can each have a #comment-body; use the one that's visible.
        // Re-query between steps because the page re-renders the box on click.
        cy.get('#comment-body:visible', { timeout: 10000 }).first().click();
        cy.get('#comment-body:visible').first().clear();
        cy.get('#comment-body:visible').first().type(replyText);

        // Click the send button of the same (visible) comment form
        cy.get('#comment-body:visible')
          .first()
          .closest('form')
          .find('[type="submit"]')
          .should('not.be.disabled')
          .click();

        // Replies render outside the post div in a separate section —
        // search the full page instead of scoping to #${id}
        cy.contains(replyText, { timeout: 30000 })
          .should('be.visible');
      });

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

        // Verify the post now shows the edited text
        cy.get(`#${id}`, { timeout: 30000 })
          .should('contain.text', 'This is my edited post');
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
  // Unique question so we can confirm THIS poll was posted
  const question = `Which option do you prefer? ${Date.now()}`;

  // Click Poll icon
  cy.get('[src="/images/Tooltip Trigger (2).svg"]', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Clicking the Poll icon swaps the normal #post-body box for a "Poll Question"
  // form. Wait for that form (its choice inputs) to render first.
  cy.get('#poll_option_0', { timeout: 10000 }).should('be.visible');

  // Type the question: the first visible text field in the poll form that
  // isn't one of the choice inputs (the box under "Question").
  cy.get('#poll_option_0')
    .closest('form')
    .find('textarea:visible, input[type="text"]:visible')
    .not('[id^="poll_option"]')
    .first()
    .type(question);

  // Enter poll options
  cy.get('#poll_option_0', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .type('Option A');

  cy.get('#poll_option_1', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .type('Option B');

  // The form says "select more than 2", so add a third choice
  cy.contains(/add another/i).click();
  cy.get('#poll_option_2', { timeout: 10000 })
    .should('be.visible')
    .type('Option C');

  // Click the Send button of the poll's own form
  cy.get('#poll_option_0')
    .closest('form')
    .find('[type="submit"]')
    .should('not.be.disabled')
    .click();

  // Verify the poll was actually posted to the wall
  // (use 'exist' — the post can sit inside a scrolled area, which Cypress treats as not visible)
  cy.contains('[id^="posts-"]', question, { timeout: 30000 })
    .should('exist');
})

// ---------------------------------------------------------------------------
// Extra wall test cases
// ---------------------------------------------------------------------------

it('should not create a post when the post box is empty', () => {
  cy.get('#post-body', { timeout: 15000 }).should('be.visible').clear();

  cy.get('[id^="posts-"]').its('length').then((postsBefore) => {
    // Try to send with nothing typed (the button may be disabled — force it)
    cy.get('#message-form [type="submit"]').first().click({ force: true });

    // No success toast and no new post should appear
    cy.contains('Posted successfully', { timeout: 3000 }).should('not.exist');
    cy.get('[id^="posts-"]').should('have.length', postsBefore);
  });
});

it('should Delete a post', () => {
  // Create a post of our own to delete, so we never delete someone else's
  const text = `Post to delete ${Date.now()}`;
  createPost(text);

  cy.contains('[id^="posts-"]', text)
    .invoke('attr', 'id')
    .then((id) => {
      openPostMenu(id);

      cy.get(`#toggle-${id}`)
        .contains(/delete/i)
        .should('be.visible')
        .click();

      // If a confirmation dialog appears, confirm it
      cy.wait(1000);
      cy.get('body').then(($body) => {
        const confirmBtn = $body
          .find('button:visible')
          .filter((i, el) => /^\s*(yes|confirm|delete)\b/i.test(el.textContent));
        if (confirmBtn.length) {
          cy.wrap(confirmBtn.last()).click();
        }
      });

      // The post should be gone
      cy.contains('[id^="posts-"]', text, { timeout: 30000 }).should('not.exist');
    });
});

it('should post on the wall with an image attached', () => {
  const text = `Post with image ${Date.now()}`;

  // Tiny 1x1 PNG generated in the test, so no fixture file is needed
  const png = Cypress.Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    'base64'
  );

  cy.get('#post-body', { timeout: 15000 }).should('be.visible').click();
  cy.get('#post-body').type(text);

  // Attach the image straight to the hidden file input behind the image icon.
  // Prefer an input whose accept list mentions images (e.g. "image/*" or ".png"),
  // otherwise fall back to the first file input on the page.
  cy.get('input[type="file"]', { timeout: 10000 }).then(($inputs) => {
    const imageInput = $inputs.filter((i, el) => /image|png|jpe?g/i.test(el.accept || ''));
    const target = imageInput.length ? imageInput.first() : $inputs.first();
    cy.wrap(target).selectFile(
      { contents: png, fileName: 'test-image.png', mimeType: 'image/png' },
      { force: true }
    );
  });

  cy.get('#message-form [type="submit"]').first().should('not.be.disabled').click();

  // The new post should exist and contain an image besides the author's avatar
  cy.contains('[id^="posts-"]', text, { timeout: 60000 })
    .find('img')
    .should('have.length.greaterThan', 1);
});

it('should search for a post', () => {
  // Create a post with unique text, then search for it
  const text = `Searchable post ${Date.now()}`;
  createPost(text);

  // The search box is rendered twice (desktop + mobile) — use the visible one
  cy.get('input[placeholder*="Search for a"]:visible', { timeout: 15000 })
    .first()
    .type(`${text}{enter}`);

  // The post should come up in the search results
  cy.contains('[id^="posts-"]', text, { timeout: 15000 }).should('exist');
});

it('should open the pinned posts section', () => {
  cy.contains(/pinned posts/i, { timeout: 15000 })
    .should('be.visible')
    .click();

  // At least one pinned post should be shown (the Pin test pins one)
  cy.get('[id^="posts-"]:visible', { timeout: 15000 }).should('have.length.greaterThan', 0);
});

});

// Helpers used by the extra test cases --------------------------------------

// Create a post with the given text and wait until it shows on the wall
function createPost(text) {
  cy.get('#post-body', { timeout: 15000 }).should('be.visible').click();
  cy.get('#post-body').clear();
  cy.get('#post-body').type(text);
  cy.get('#message-form [type="submit"]').first().should('not.be.disabled').click();
  cy.contains('[id^="posts-"]', text, { timeout: 30000 }).should('exist');
}

// Open the "..." options menu on a post
function openPostMenu(id) {
  cy.get(`#${id} > .relative > .flex-col.flex-1 > .lg\\:pt-2\\.5 > .cursor-pointer > .text-primary-gray-dark-3`)
    .click();
}