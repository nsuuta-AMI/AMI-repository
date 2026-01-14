/// <reference types ="cypress"/>
describe('Testing profiles', () => {
    it('should interact with profiles page', () => {
      // Visit the webpage where the wall is located
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.get('input[name="user[login]"]').type('stella@muraho.tech')
      cy.get('input[name="user[password]"]').type('AMI123456')
      cy.get('button[type="submit"]').click()
     cy.url().should('include', '/dashboard')
     cy.opennewacademy();
     // Click the dropdown trigger to open the menu
     cy.get(':nth-child(8) > .dropdown > .nav-link > .img').click();
     // Wait for the dropdown to be visible (you might need to adjust the selector)
     cy.get('.dropdown-menu.dropdown-main').should('be.visible');
     // Now click the first dropdown item
     cy.get('.dropdown-main > .dropdown-item:nth-child(1)').click();
     // Continue with the rest of your test
     cy.get('#foo_search_phrase').type('stella');
     cy.reload();
     cy.wait(2000);
        //open the added job and delete it

        cy.get('.expbox:nth-child(3) > .expbox').trigger('mouseover').click({force: true}) // Hover over the element.
        cy.wait(20000)
    
        cy.get('.expbox:nth-child(3) > .expbox .icbtn').click({force: true})
        cy.wait(2000)
        cy.get('#\\37 78asdf > .modal-footer > .red-default-text-primary-button-web').click()
        cy.wait(2000)
        cy.get('#delete_message_button').click()
        
        cy.wait(20000)
        //update education
        cy.get(':nth-child(4) > .dx > .icbtn').click()
        cy.get('#\\36 78asdf_institution').type('Havard')
        cy.get('#\\36 78asdf_level').type('Master of Science in Computer Science')
        cy.get('#\\36 78asdf_subject').type('Artificial Intelligence')
        cy.get(':nth-child(5) > .custom-control > .custom-control-label').click()
        cy.get('#\\36 78asdf_date_start').type('2023-01-05')
        cy.wait(2000)
        cy.get('#\\36 78asdf_date_end').type('2025-12-02')
        cy.get('#\\36 78asdf_education_detail').type('I love Technology')
        cy.get('#\\36 78asdf > .modal-footer > .default-text-primary-button-web').click()
        

        //delete an education

        /*cy.get('.col-lg-8 > :nth-child(4) > :nth-child(2)').trigger('mouseover').click({force: true}) // Hover over the element.
        cy.wait(20000)
        cy.get('.expbox:nth-child(4) > .expbox .icbtn').click({force: true})
        cy.wait(2000)
        cy.get('#\\37 78asdf > .modal-footer > .red-default-text-primary-button-web').click()
        cy.wait(2000)
        cy.get('#delete_message_button').click()*/

        //cy.wait(2000)
        //add skills
        /*cy.get('.skillbox > .dx > .icbtn > .fa').click()
        cy.get('#addskillspop > .modal-dialog > .modal-content > form > .modal-body > .frmbx > .row > .form-group > .select2.select2-container > .selection > .select2-selection').type('test')
        cy.get('#select2-skillsselection-result-ncbn-test').click()*/
        
        //cy.get('.skillbox > .dx > .icbtn').click()
        /*cy.get('a.icbtn').should('be.visible').click();

        cy.wait(2000)
        cy.get('.selection > .select2-selection--multiple').click()
        .type('Critical thinking{enter}');
        cy.wait(2000)
        cy.get('#addskillspop > .modal-dialog > .modal-content > form > .modal-footer > .default-text-primary-button-web').click()*/


    })

  })
        /*cy.get('.select2-search--dropdown > .select2-search__field')
        .click()
        .then(() => {
          cy.get("li[role='option']")
            .contains('Testo')
            .should('exist')
            .click();*/

        
      
        
        //cy.get('.phx-change-loading').find('.modal-footer').find('.default-text-primary-button-web').click()

        /*cy.get('.form-group:nth-child(1) .default-text-secondary-button-web').click()
        cy.fixture('AMI logo.png').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
              fileContent: fileContent,
              fileName: 'AMI logo.png',
              mimeType: 'image/png'
            });
          });
     cy.get('.phx-change-loading').find('.modal-footer').find('.default-text-primary-button-web').click()*/
        

  