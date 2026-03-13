describe('Wall Page', () => {
    it('should like and unlike a post', () => {
        // Visit the webpage where the wall is located
        cy.visit('https://account.africanmanagers.org/ami_auth/login')
        cy.successfullogin()
        cy.opennewacademy()

        //Click on the wall page nav bar
  
        cy.wallnavbar().click()

    //Click to Like a post
    cy.get('#post_52963 > .comsdetail > :nth-child(2) > [data-placement="top"] > .fav-icon').click()
    //cy.get('#post_52963 > .comsdetail > :nth-child(2) > [data-placement="top"] > .-o').click()
    //cy.get('#post_52249 > .comsdetail > :nth-child(2) > [data-bs-placement="top"] > .fav-icon').click()
    //cy.wait(2000)
    //cy.get('#post_48038 > .comsdetail > .comsdet').click()

    cy.wait(2000)

    //Click to unlike a post
    cy.get('#post_52963 > .comsdetail > :nth-child(2) > [data-placement="top"] > .fav-icon').click()
   
    //cy.wait(2000)

    //Click to delete a post
      

  })

 it('should comment on a wall post, view it and like', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.successfullogin()
    cy.opennewacademy()
    cy.wallnavbar().click()

    cy.wait(2000)
    
   //add a comment and send it
   cy.get('#post_52963 > .comsdetail > :nth-child(4) > :nth-child(1) > .comment-form-block > .comspin > :nth-child(1) > .comspinl > :nth-child(1) > .commnet-new > .form-inline > .d-flex > .sm-message-container > .input-container > .posts_comment_with_emoji > .emojionearea > .emojionearea-editor').type("This is a comment")
   cy.get('#post_52963 > .comsdetail > :nth-child(4) > :nth-child(1) > .comment-form-block > .comspin > :nth-child(1) > .comspinl > :nth-child(1) > .commnet-new > .form-inline > .d-flex > .sm-message-container > .message-buttons > .icon-size').click()
    //cy.wait(2000)
    //View the comment
    cy.get('#post_52963 > .comsdetail > :nth-child(4) > :nth-child(1) > .actions > #showComment').click()
    //cy.get('#showComment').click()
    
    cy.wait(2000)
    //like the comment
    cy.get('#comment-like-span-31395 > .comment-heart-like').click()
    //cy.get('#comment-like-span-31209 > .comment-heart-like').click()
    //cy.wait(2000)
    //delete the comment
   
   

});
    
   it('check pagination on the wall page', () => {
        cy.visit('https://account.africanmanagers.org/ami_auth/login')
        cy.successfullogin()
        cy.opennewacademy()
        cy.wallnavbar().click({force: true})
      
    //check pagination-go to the next page
    //cy.get('.fa-chevron-right').click()
    cy.wait(2000)
    cy.get('.cursor-pointer > .fas').click({force: true})


    cy.wait(2000)
    //go to previous page
    cy.get('.fa-chevron-left').click({force: true})

  });

 it('should post on the wall', () => {
    // Visit the webpage where the wall is located
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.successfullogin()
    cy.opennewacademy()

    //Click on the wall page nav bar

    cy.wallnavbar().click({force: true})

    // Fill in the post content and assert
    cy.get('.form-group > .emojionearea').type('Welcome to AMI')
    .should('be.visible')

    // Click on the submit button on wall
    
    cy.get('#myWallPostSubmit').click()

    cy.log('Wall Successfully tested')

  })
    
    
  })