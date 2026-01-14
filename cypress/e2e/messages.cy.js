describe('Test the Messages page', () => {
  it('test private chats', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');

    cy.successfullogin();
    cy.opennewacademy();
    cy.changelanguage();

    cy.get('.notifdrop > .msg-view').click();

    // Start private chat
    cy.get('.private-chat-title > .cursor-pointer').click();
    cy.get('.flex-align-items-center > .d-flex > .border-0').type('Stella').click({ force: true });
    cy.wait(2000);
    cy.get('.search-sugession > .bg-white > .single-user > .w-100 > .m-b-4 > .text-body-normal').click()
    cy.wait(2000);
    cy.get('.emojionearea-editor').should('be.visible').type('Testing?');
    cy.get('.mr-10').should('be.visible').click({ force: true });
    cy.wait(20000);
    // Attach menu open
    //cy.get('#attach > img').click({ force: true });
    //cy.get('.w-220').should('be.visible');
    //cy.wait(20000);
    //cy.get('[phx-change="attachment-upload"] > :nth-child(1) > .text-body-normal').click({ force: true });

    //cy.wait(20000);

    // Clear chat
    cy.get('#dropdownMenuButton291393').click();
    cy.get('[data-target="#clearChat"]').click();
    cy.get('.modal-wrapper > .message-model-btns > .red-default-text-primary-button-web').click();
  
  
  });

  /*it('test group chat messages', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();

    // Create group
    cy.get('.group-chat > .d-flex > .cursor-pointer').click();
    cy.get(':nth-child(4) > .input-group').type('jane');
    cy.get(':nth-child(4) > .input-group > .close > span').click();
    cy.get('.sm-body-text-normal').click();
    cy.wait(2000);
    cy.get('.message-model-btns:nth-child(5) > .default-text-primary-button-web').click();
    cy.get('.new-group').type('AMI Test Group8');
    cy.wait(2000);
    cy.get('.short-screen > .message-model-btns:nth-child(3) > .default-text-primary-button-web').click();

    // Send message to group
    cy.get('[phx-value-conversation-id="5475"]').click();
    cy.get('.emojionearea-editor').type('Hello Everyone Welcome to this Group');
    cy.clickImage().click();
    cy.wait(2000);

    // Open attachment menu (image removed)
    cy.get('#attach > img').click();
    cy.get('.w-220').should('be.visible');
    cy.wait(2000);
    cy.get('[phx-change="attachment-upload"] > :nth-child(1) > .text-body-normal').click();

    // Group management actions
    cy.get('[phx-value-conversation-id="5480"]').click();
    cy.get('.gap-12 > .d-flex > .text-body-normal').click();
    cy.get('.group-name > .d-flex > .cursor-pointer').click();
    cy.get('form > .text-body-normal').type('7');
    cy.get('.group-detail-title > .fas').click();
    cy.wait(20000);

    // Clear and mute group chat
    cy.get('#dropdownMenuButton1').click();
    cy.get('[data-target="#clearChat"]').click();
    cy.get('.modal-wrapper > .message-model-btns > .red-default-text-primary-button-web').click();
    cy.wait(2000);
    cy.get('#dropdownMenuButton1').click();
    cy.get('[phx-click="Mute Group Chat"]').click();
    cy.get(':nth-child(1) > .answer > .radio-circle').click();
    cy.get('form > .message-model-btns > .red-default-text-primary-button-web').click();
    cy.wait(2000);

    // Copy group link
    cy.get('#dropdownMenuButton1').click();
    cy.get('#copyLinkToShare').click();
    cy.wait(2000);
  });*/
});
