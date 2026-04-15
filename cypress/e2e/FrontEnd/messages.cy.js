describe('Test the Messages page', () => {
  it('test private chats', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('input[name="user[login]"]').type('stella@muraho.tech') // replace with valid email
    cy.get('input[name="user[password]"]').type('AMI12345678') // replace with valid password
    cy.get('button[type="submit"]').click()// Replace with the URL of your calendar page
     
  
  cy.successfullogin()

  cy.get('.notifdrop > .msg-view').click()
  //start private chat
  cy.get('.private-chat-title > .cursor-pointer').click()
  cy.get('.search-dev > .d-flex > form > .border-0').type('jay walisa').click()
  cy.wait(2000)

  cy.get('.search-sugession > .bg-white > .single-user').click()

  cy.get('.emojionearea-editor').should('be.visible').type('Hello how are you?')
  
  cy.get('.mr-10').should('be.visible').click({force: true})
  //cy.get('.chat-box').click()
  // Click on the user in the dropdown
  //cy.wait(2000)
  //cy.get('.search-sugession').click()
  //this should help in sending the messsage once the arrow is clicked
  

  //start private conversation
  
  

  //cy.get('.mr-10').click()

  /*cy.get('iframe#fc_widget').should('be.visible').then(iframe => {
    const iframeContent = iframe.contents();
    
    // Wait for the target element to be visible and then click
    cy.wrap(iframeContent)
      .find('.mr-10 > .cursor-pointer')
      .should('be.visible')
      .click();
  });*/
  
  
  


  //cy.get('.sent-message-wrapper').click()

  //cy.clickImage()


  //cy.get('.mr-10 > .cursor-pointer').should('be.visible').click()
  
  cy.wait(20000)

  cy.get('#attach > img').click({force: true});
  cy.get('.w-220').should('be.visible');
  cy.wait(20000)
  cy.get('[phx-change="attachment-upload"] > :nth-child(1) > .text-body-normal').click({force: true})
  
  //({force: true});

  cy.fixture('AMI logo.jpg', 'base64').then((fileContent) => { // Load the image file as base64 data
    const fileName = 'AMI logo.jpg';

// Create a Blob object from the base64 data
    const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpg');

// Create a File object from the Blob
    const testFile = new File([blob], fileName, { type: 'image/jpg' });

   cy.wait(20000)
   cy.get('.p-0 > .cursor-pointer').should('be.visible').click({force: true})

});

  cy.wait(20000)
  //clear chat
  cy.get('#dropdownMenuButton291393').click()
  cy.get('[data-target="#clearChat"]').click()
  //cy.get('[phx-value-conversation-id="5121"]').click()

  //cy.get('#dropdownMenuButton').click()
  //cy.get('[data-target="#clearChat"]').click()
  cy.get('.modal-wrapper > .message-model-btns > .red-default-text-primary-button-web').click()
  cy.wait(2000)

  //delete chat
  /*cy.get('[phx-value-conversation-id="5121"]').click()
  cy.get('#dropdownMenuButton').click()
  cy.get('[data-target="#deleteChat"]').click()
  cy.get('#deleteChat > .modal-dialog > .modal-wrapper > .message-model-btns > .red-default-icon-primary-button-web').click()*/

  //attaching a document
  
  
cy.get('#attach > img').click();
cy.wait(2000)
cy.get('.mb-0 > .text-body-normal').click()
cy.wait(2000)
//cy.get('[phx-value-conversation-id="5474"]').click();
cy.get('.w-220').should('be.visible').click();

const fileName2 = 'Activity - Setting Goals for Success_Course Introduction_28-1.pdf';

cy.fixture('Activity - Setting Goals for Success_Course Introduction_28-1.pdf', 'base64').then((fileContent) => {
  const blob = Cypress.Blob.base64StringToBlob(fileContent, 'application/pdf');
  const testFile = new File([blob], fileName2, { type: 'application/pdf' });

  cy.get('input[type="file"]').then((input) => {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(testFile);

    // Assign the file list to the input element
    input[0].files = dataTransfer.files;

    // Trigger the change event on the input element
    const changeEvent = new Event('change', { bubbles: true });
    input[0].dispatchEvent(changeEvent);
  });
});

cy.wait(20000);
cy.clickImage().should('be.visible').click();
cy.wait(2000)


});

/*it('test group chat messages', () => { 

  cy.visit('https://account.africanmanagers.org/ami_auth/login')
  cy.successfullogin()

 /cy.get('.group-chat > .d-flex > .cursor-pointer').click()
  cy.get(':nth-child(4) > .input-group').type('jane')
  cy.get(':nth-child(4) > .input-group > .close > span').click()
  cy.get('.sm-body-text-normal').click()
  cy.wait(2000)
  cy.get('.message-model-btns:nth-child(5) > .default-text-primary-button-web').click()
  cy.get('.new-group').type('AMI Test Group8')
  cy.wait(2000)
  cy.get('.short-screen > .message-model-btns:nth-child(3) > .default-text-primary-button-web').click()
  
  //send a group meesage
  cy.get('[phx-value-conversation-id="5475"]').click()
  cy.get('.emojionearea-editor').type('Hello Everyone Welcome to this Group')

 cy.clickImage().click()

cy.wait(2000)

cy.get('#attach > img').click();
cy.get('.w-220').should('be.visible');
cy.wait(2000)
cy.get('[phx-change="attachment-upload"] > :nth-child(1) > .text-body-normal').click();

cy.fixture('AMI logo.jpg', 'base64').then((fileContent) => { // Load the image file as base64 data
  const fileName = 'AMI logo.jpg';

// Create a Blob object from the base64 data
  const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpg');

// Create a File object from the Blob
  const testFile = new File([blob], fileName, { type: 'image/jpg' });

 cy.wait(20000)
 cy.get('.p-0 > .cursor-pointer').should('be.visible').click()

});

//open the group management tab
//cy.wait(2000)
cy.get('[phx-value-conversation-id="5480"]').click()
cy.get('.gap-12 > .d-flex > .text-body-normal').click()
cy.get('.group-name > .d-flex > .cursor-pointer').click()
cy.get('form > .text-body-normal').type('7')
cy.get('.group-detail-title > .fas').click()
cy.wait(20000)
cy.get('#dropdownMenuButton1').click()
cy.get('[data-target="#clearChat"]').click()
cy.get('.modal-wrapper > .message-model-btns > .red-default-text-primary-button-web').click()
cy.wait(2000)
cy.get('#dropdownMenuButton1').click()
cy.get('[phx-click="Mute Group Chat"]').click()
cy.get(':nth-child(1) > .answer > .radio-circle').click()
cy.get('form > .message-model-btns > .red-default-text-primary-button-web').click()
cy.wait(2000)
cy.get('#dropdownMenuButton1').click()
cy.get('#copyLinkToShare').click()




cy.wait(2000)





//cy.wait(2000)
//cy.get('.message-model-btns:nth-child(2) > .red-default-icon-primary-button-web').click()



 })*/

})


