describe('academies backend', () => {
  
    it('interact with academies components', () => {
   
     cy.visit('https://account.africanmanagers.org/ami_auth/login')
     cy.successfuladminpanellogin() 
     
     cy.wait(2000)
     //.get('.dropdown-main > .dropdown-item:nth-child(1)').click()
     //cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
     cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click()
     
     cy.wait(2000)
     
     //this code opens the backend
     cy.visit('http://account.africanmanagers.org/backend/administration/240943')
   
     cy.get('.action-btn-sidebar').click()
   
     cy.wait(2000)

     //click on the academies dropdown
     cy.get('.dropdown-parent:nth-child(3) > a .active').click({force: true})

     cy.wait(2000)

     //search for an academy
    // cy.get('.input-group').type('QA {backspace}')

    //click on edit button


    cy.get(':nth-child(1) > .card > .row > .col-xl-1 > .d-grid > .edit-content > a > .img-responsive').click()

    cy.wait(2000)
    
    //edit academy name
    cy.get('#new_academy_form_name').type('4')

    cy.wait(2000)

    //edit academy description
    cy.get('#new_academy_form_description').type('QA')

    cy.wait(2000)

    //mark the academy as dormant
    cy.get('#new_academy_form_is_dormant').click()

    cy.wait(2000)

    cy.get('#new_academy_form_is_dormant').click()

    cy.wait(2000)

    cy.get('#statusId > .select2-container > .selection > .select2-selection').click()

    cy.wait(2000)

    cy.get('.select2-search__field').type('Published')

    // Click to open the dropdown
    cy.get('.select2-search__field').click()

    // Click on the option with the text 'Published'
    cy.contains('.select2-results__option', 'Published').click()

    cy.get('#accessType > .select2-container > .selection > .select2-selection').click()

    cy.wait(2000)

    //search for the public type
    cy.get('.select2-search__field').type('Public')

    // Click to open the dropdown
    cy.get('.select2-search__field').click()

    // Click on the option with the text 'Published'
    cy.contains('.select2-results__option', 'Public').click()

    //add moderator
    cy.get(':nth-child(1) > form > .form-control').type('nsuuta@africanmanagers.org')

    cy.wait(2000)

    cy.get('tr > :nth-child(4) > a').click()

    cy.wait(2000)
    
    //remove moderator
    cy.get('tr > .table-action-btn > .delete-content > .img-responsive').click()

    cy.wait(2000)

    //click on the save button

    cy.get('#save-academy-details').click()

    cy.wait(2000)

    //click on the users link

    cy.get('.nav-tabs > li:nth-child(2) > a').click()

    //cy.get('[phx-value-tabname="users"] > .active').click()

    //add a user to an academy

    //search for this user
    cy.get('.input-group').type('nsutsmuk@gmail.com')

    cy.wait(2000)
    
    //click on the user to add them
    cy.get(':nth-child(3) > .btn').click()

    cy.wait(2000)

    //click on the learning journey section
    cy.get('.nav-tabs > li:nth-child(3) > a').click()
    //learning journey section
    cy.wait(2000)
    //check if the add users section is working
    cy.get(':nth-child(2) > .table-action-btn > .adduser-content > .img-responsive').click()

    cy.wait(2000)
    //check if the dormant functionality is working
    cy.get('.borderless > :nth-child(2) > .table-action-btn > .delete-content > .img-responsive').click()

    cy.wait(2000)

    cy.get('.borderless > :nth-child(2) > .table-action-btn > .delete-content > .img-responsive').click()

    cy.wait(2000)

    //click on the course periods tab

    cy.get('.nav-tabs > li:nth-child(4) > a').click()

    //search for a course
    cy.get('.input-group').type('Enabling People to Perform')

    //click on add course

    cy.get(':nth-child(3) > :nth-child(2) > .btn').click()

    cy.wait(2000)

    //click on starts on end dates

    cy.get('#course_period_form_starts_on').type('2023-03-25')

    cy.wait(2000)

    //click on ends on date

    cy.get('#course_period_form_ends_on').type('2023-05-30')

    cy.wait(2000)

    //clcik on enrollement end date

    cy.get('#course_period_form_enrollment_end').type('2023-05-30')

    cy.wait(2000)

    //click on nominate own buddy

    cy.get('#course_period_form_buddy_type_0').click()

    cy.wait(2000)

    //click on save button
    cy.get(':nth-child(8) > .col-sm-12 > .btn').click()

    cy.wait(2000)

    //edit a course
    cy.get(':nth-child(5) > .table-action-btn > .edit-content > .img-responsive').click()

    cy.wait(2000)

    cy.get('#course_period_form_starts_on').type('2023-03-30')

    cy.wait(2000)

    //add the end date
    cy.get('#course_period_form_ends_on').type('2023-12-30')

    cy.wait(2000)

    //add the enrollement ends on date
    cy.get('#course_period_form_enrollment_end').type('2023-12-30')

    cy.wait(2000)

    //click on the save button

    cy.get(':nth-child(9) > .col-sm-12 > .btn').click()

    cy.wait(2000)
    //add a tool
    //click on the tool tab
    cy.get('.nav-tabs > li:nth-child(5) > a').click()

    cy.wait(2000)

    //search for a tool
    cy.get('.input-group').type("Problem solving")

    cy.wait(2000)

    //click on the add button
    cy.get(':nth-child(1) > :nth-child(3) > .btn').click()

    cy.wait(2000)

    //click on delete on the button to remove the tool
    cy.get('.borderless > :nth-child(2) > .table-action-btn > .delete-content > .img-responsive').click()

    cy.wait(2000)

    //click on the toolkit tab
    cy.get('.nav-tabs > li:nth-child(6) > a').click()

    cy.wait(2000)

    //search for thetoolkit

    cy.get('.input-group').type('Talent Practices')

    //view toolkit

    cy.get('tr > :nth-child(2) > a > .img-responsive').click()

    cy.wait(2000)

    //click on the toolkit close icon to close it

    cy.get('#toolkitSlider > .close > .fas').click()

    cy.wait(2000)

    //click on add to add it to the toolkit list tab
    cy.get(':nth-child(3) > .btn').click()

    cy.wait(2000)

    //click on delete to remove the toolkit

    cy.get(':nth-child(1) > .table-action-btn > .delete-content > .img-responsive').click()

    cy.wait(2000)

    //click on the annoucements

    cy.get('.nav-tabs > li:nth-child(9) > a').click()

    cy.wait(2000)

    //create a new annoucement by click on creating new

    cy.get('.col-md-12 > .btn').click()

    cy.wait(2000)

    //add the announcement title

    cy.get('#event_form_title').type("Welcome to AMI")

    cy.wait(2000)

    //add the annoucement starts end date
    //cy.get('#event_form_starts_on').type('2023-04-12T08:00:00')

    //cy.wait(2000)

    //add the annoucement ends end date
    //cy.get('#event_form_ends_on').type('2023-04-19T11:59:00')

    //cy.wait(2000)

    //add an announcement body

    cy.get('#event_form_body').type('Welcome to AMI, in this academy you will have a chance to interact with our resources. Enjoy!')

    cy.wait(2000)

    //chect notify button
    cy.get('#event_form_notify').click()

    cy.wait(2000)

    cy.get('#event_form_notify').click()

    cy.wait(2000)

    //click on the save button

    cy.get('#event_form > .top-box > [style="margin-bottom: 40px;"] > .col-sm-12 > .btn').click()













    



    




    

   





    })
})