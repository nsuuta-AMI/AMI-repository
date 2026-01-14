it('Like and pin the created post', () => {
   login();
 
   // Navigate to Wall
   cy.viewport(1920, 1080);
   cy.visit('https://new.academy.wall.url'); // replace with correct path
 
   // Find the created post by text
   cy.contains('.post-content', 'Test automation post')
     .should('exist')
     .as('createdPost'); // store for reuse
 
   // Open the 3 dots menu
   cy.get('@createdPost')
     .parents('[id^="posts-"]')
     .find('.cursor-pointer .text-primary-gray-dark-3')
     .click({ force: true });
 
   // Pin or whatever option appears
   cy.contains('Pin post').click({ force: true });
 
   // Like the post (heart icon)
   cy.get('@createdPost')
     .parents('[id^="posts-"]')
     .find('img[alt="like"]')
     .click({ force: true });
 });


