// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import 'cypress-file-upload';
import './commands'; 

// cypress/support/index.js or cypress/support/commands.js

/*beforeEach(() => {
  cy.session('authToken', () => {
    // Store the authentication token cookie
    cy.setCookie('auth_token', Cypress.env('authToken'));
  });
});*/


Cypress.Commands.add('clickImage', () => {
  cy.window().then((win) => {
    const element = win.document.querySelector('img[src="/images/send.svg"]');
    element.click();
  });
});



 Cypress.Commands.add('successfullogin', (email, password) => { 
  cy.get('#user_login').type('nsutjay@gmail.com')
  cy.get('#user_password').type('Tynsuti.15n@')
  //cy.wait(50000)
  cy.get('.comn-flex-box > .btnRed').click()
  cy.url({ timeout: 10000 }).should('include', '/dashboard')
 })



 Cypress.Commands.add('usuccessfullogin', (email, password) => { 
  cy.get('#user_login').type('nsutjay@yahoo.com')
  cy.get('#user_password').type('AMI12345')
  //cy.wait(30000)
  cy.get('.comn-flex-box > .btnRed').click()
  cy.get('.alert-warning').should('be.visible')
  
 })

 Cypress.Commands.add('successfuladminpanellogin', (email, password) => { 
  cy.get('#user_login').type('nsuuta@africanmanagers.org')
  cy.get('#user_password').type('Nsugak@@@12345')
  //cy.wait(30000)
  cy.get('.comn-flex-box > .btnRed').click()
  //cy.get('.alert-warning').should('be.visible')
  
 })

 Cypress.Commands.add('changelanuageEng', () => { 

  cy.get('[id="select2-locale-setting-container"]').click()

  cy.get("li[role ='option']").each(function($ele, index, list){

    //cy.log($ele.text())

    if($ele.text()==='English'){

      cy.log("Found language English")

      cy.wrap($ele).click()
      //cy.get('.banner-text > .text-heading-6') 
      //.should('have.text', 'Email Digest - Daily, Weekly and Monthly')
      cy.title().should("include", "African Management Initiative")        
      
    }

    else {

      cy.log("Current Value",$ele.text())

    }

  })

 })
 

 Cypress.Commands.add('createaccount', () => { 
  cy.get('.comn-flex-box > .btnGreen').click()
  cy.get('.modal-body > :nth-child(4) > :nth-child(1) > .btnRed').click()
  cy.get('#registration-form > :nth-child(1) > :nth-child(2)').click()
  cy.get('#registration_form_profile_first_name').type('Haz')
  cy.get('#registration_form_profile_last_name').type('Wazy')
  cy.get('#countries-input-0').type('256')
  cy.get('#profile_phone').type('0753114033')
  cy.get('#registration_form_name').type('hazinawazina2')
  cy.get('#reg_user_email').type('hazinawazina@gmail.com')
  cy.get('#registration_form_password').type('AMI12345')
  cy.get('#registration_form_password_confirmation').type('AMI12345')
  cy.get('.activation-boolean-box > :nth-child(2) > .text-body-small-bold').click()
  cy.get('#registration_form_tos').click()
  cy.wait(2000)
  cy.get('#signup-button').click()
  cy.wait(2000)
 })

 Cypress.Commands.add('signupforAMIprogrammes', () => { 
  cy.get('.comn-flex-box > .btnGreen').click()
  cy.get('.btn').click()
  cy.get('h1').should('contain', 'Begin Your Journey with AMI Today');
})

Cypress.Commands.add('opennewacademy', () => { 

  
  
  //cy.get('.form-group > .sicon > .select2-container > .selection > .select2-selection').click()
  
  cy.get('[id="select2-gybselect-container"]').click()
  cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
  cy.get('[id="select2-gybselect-results"]').click({force: true})
  
  
})

Cypress.Commands.add('ljnavbar', () => { 

  cy.get('.ml-auto > :nth-child(2) > .nav-link')
  
 
  
 })


Cypress.Commands.add('wallnavbar', () => { 

  cy.get(':nth-child(3) > .nav-link > .text-body-small')
  
 })

Cypress.Commands.add('resourcesnavbar', () => { 

  cy.get('.active > .nav-link > .text-body-small')
  
 })

 
 Cypress.Commands.add(newFunction(), () => { 

  cy.get(':nth-child(4) > .nav-link > .text-body-small')
  
 })



function newFunction() {
  return 'resourcesnavbar'
}


Cypress.Commands.add('LJcarousel', () => {
//previous icon on carousel
//cy.get('.prev-icon:nth-child(1)').click()
//cy.get('.mrl-12.prev-icon').click()
//cy.get('.prev-icon:nth-child(1)').click()
//select event
//cy.get('.font-size-18:nth-child(5)').click()
cy.get('.mrl-12.next-icon').click()
cy.get('.mrl-12.next-icon').click()
cy.get('#event21137').click()
//cy.get('#event17761').click()
//cy.get('#event18368').click()
cy.wait(2000)
//click on the button to be redirected to the event
cy.get('.default-text-primary-button-web').click()
cy.wait(2000)
cy.visit('https://account.africanmanagers.org/dashboard/home')
//cy.go('back')


//go back to the platform
//cy.visit('https://account.africanmanagers.org/dashboard/home')

//cy.go('back')

//click on the next icon
cy.get('.mrl-12:nth-child(4)').click({ multiple: true })

//click on previous icon
cy.get('.mrl-12:nth-child(2)').click({ multiple: true })
cy.get('.mrl-12:nth-child(2)').click({ multiple: true })
cy.wait(2000)
//click on tool
cy.get('#tool1708').click({force: true})
cy.wait(2000)
//click on follow link download button
cy.get('.modal-download > .btn').click()
cy.wait(2000)
//close slider panel
//cy.get('.text-align-end').find('span > .fas').click()
cy.get('#closeIcon > span > .fas').click()

//cy.get('.font-size-18:nth-child(5)').click()

//cy.wait(2000)
//click on the previous icon
cy.get('.mrl-12.prev-icon').click()
cy.get('#toolkit129').click({force: true})
cy.get('#modal-content').click()
//open the toolkit tool

cy.get(':nth-child(2) > :nth-child(2) > .text-body-normal > .text-body-small-bold > .commit-msg').click()
//cy.get('.sidebar-section:nth-child(2) > .col-sm-12:nth-child(2) > .grey-border').click()
//click download
cy.get('.default-text-primary-button-web').click({force: true})
//click on open file
cy.get('.open-file').click()
//close slider panel
//cy.get('.text-align-end').find('span > .fas').click()
cy.get('#closeIcon > span > .fas').click()



//click on phase down button
cy.get('.fa-chevron-down').click()
cy.wait(2000)

//cy.get('.mrl-12.prev-icon').dblclick()
//open pulse check survey
cy.get('#event19535').click()
//open survey
cy.get('.default-text-primary-button-web').click()

//cy.wait(2000)
//go back to the platform
//cy.go('back')
//go back to the platform
cy.visit('https://account.africanmanagers.org/dashboard/home')

cy.get('.fa-chevron-down').click()

//click on the next icon
cy.get('.font-size-18:nth-child(5)').click({ multiple: true })
cy.get('.font-size-18:nth-child(5)').click({multiple: true})
//download the tool
//cy.get('.modal-download > .mx-4').click()
//close the slider panel
//cy.get('.text-align-end').find('span > .fas').click()

cy.get('#course89').click({force: true})
//go to course
cy.get('.mx-3').click()
//go back to dashboard
cy.get('.p-r-2').click()

cy.wait(2000)

//cy.get('#tool3969').click()
//cy.get('#modal-content').click()
//cy.get('.modal-download > .mx-4').click()
//cy.get('.text-align-end').find('span > .fas').click()

//Click on phase down button
//cy.get('.fa-chevron-up').click()

//close slider panel
//cy.get('.text-align-end').find('span > .fas').click()


//close slider panel
//cy.get('.text-align-end').find('span > .fas').click()

/*cy.get('#closeIcon > span > .fas').click()

cy.get('#modal-content').click()
//open the toolkit tool
cy.get('.sidebar-section:nth-child(2) > .col-sm-12:nth-child(2) > .grey-border').click()
//click download
cy.get('.default-text-primary-button-web').click()
cy.wait(20000)
//close the slider panel
//cy.get('.text-align-end').find('span > .fas').click()
cy.get('#closeIcon > span > .fas').click()*/
//this is the code for next icon on carousel
//cy.get('.font-size-18:nth-child(5)').click()


//this code is to click on the phase downward arrow
cy.get('.fa-chevron-down').click()
cy.get('.fa-chevron-down').click()

//this code is for previous icon
cy.get('.mrl-12.prev-icon').click()
//click on the course
cy.get('#course334').click({force: true})
//go to course
cy.get('.mx-3').click()
//go back to dashboard
cy.get('.p-r-2').click()
//click on see all journey
//cy.get('.text-right > .text-body-normal-bold').click({multiple: true})
cy.wait(3000)
//cy.get('.text-color-dark-teal').click({multiple: true})
//cy.get('.text-right > .text-body-normal-bold').click()
  
})

Cypress.Commands.add('OpenCoursescarousel', () => {
  //click on the next arrow icon
  cy.get('.icon-next > img').click()

  //click on the previous arrow icon

  cy.get('.icon-prev > img').click()

  cy.wait(2000)

  //enroll to course in the open courses carousel /course is goal setting for entreprenuers will be removed from the card
  cy.get('#course102 > :nth-child(5) > .bottom-link > .text-body-normal-bold').click()
  cy.wait(2000)
  cy.get('#closeIcon > span > .fas').click()
  
  //go back to the dashboard
  cy.get('.p-r-2').click()


})


Cypress.Commands.add('calendar', () => {

  // Click on the calendar event to open the dialog box
  //cy.get('.event-section > .container > .card').click()
  //cy.get('.event-section > .container > .card').click()
  cy.get('.container > .card > .card-body').click()
  cy.get(':nth-child(1) > :nth-child(5) > .table-action').click()
  //cy.get('.table-action').click()
  cy.get('.top-box > .row > .col-sm-12 > .btn').click()
  cy.visit('https://account.africanmanagers.org/dashboard/home')
  cy.wait(500)
  cy.get('.container > .card > .card-body').click()
  cy.get(':nth-child(2) > :nth-child(5) > .table-action').click()
  cy.get('.top-box > .row > .col-sm-12 > .btn').click()
  cy.visit('https://account.africanmanagers.org/dashboard/home')
  cy.wait(500)

  //cy.get('.text-heading-5').should('have.text', "Peer Group Meet Up") 
  //cy.get('#modal-content').click()
  //cy.get('.top-box > .row > .col-sm-12 > .btn').click()
  
  /*cy.get(':nth-child(2) > :nth-child(5) > .table-action').click()
  cy.get('.text-heading-5').should('have.text', "Pulse Check 2") 
  cy.get('#modal-content').click()
  cy.get('.top-box > .row > .col-sm-12 > .btn').click()
  cy.visit('https://account.africanmanagers.org/dashboard/home')*/
  //This line helps to close modal pop ups
  //cy.get('.text-align-end').find('span > .fas').click();


})

Cypress.Commands.add('WallCommands', () => {

})

Cypress.Commands.add('mycoursespage', () => {
 //click on academy courses
 cy.get(':nth-child(5) > .nav-link > .text-body-small').should('be.visible').click()
 //cy.contains('Academy Courses').should('be.visible').click({force: true});
 //click on my courses
 cy.get('.my-academy-courses > .pt-14').click()
})
//This code is subject to change as per the course selected
Cypress.Commands.add('enrollforcourse', () => {
//click on academy courses
cy.get(':nth-child(5) > .nav-link > .text-body-small').should('be.visible').click()
//click on all courses
cy.get('.my-academy-all-courses > .pt-14').click()
//search for a course
//cy.get('#searchAcademyAllCourseInputHeader').type('Performance Management')
//enroll to course enabling people to perform
cy.get(':nth-child(18) > #art > .course-list__container > .course_info > .course-enroll > a > .fa').click()



})

Cypress.Commands.add('addbuddy', () => {
//click on add buddy for emotional intelligence
cy.get(':nth-child(6) > #art > .course-list__container > .course_info > footer > .course_info__add_buddy').click()
//click on the add buddy container
cy.get('#AddBuddyForm > .course-details__sidebar').click()
//enter the buddy name
cy.get('#invite-buddy-name').type("Nsuuta")
//enter buddy email address
cy.get('#invite-buddy-email').type("nsuuta@africanmanagers.org")
//enter buddy relationship
cy.get('#buddyship_relationship_to_user').type("Friend")
//click on the invite buddy button
cy.get('#invite-buddy').click()
//assertion flash message
cy.get('.flash').should('be.visible')

})


  
Cypress.Commands.add('takepreassesment', () => {
      //click on the go to course for pre-assesment for emotional intelligence
        cy.get(':nth-child(7) > #art > .course-list__container > .progress-container > footer > .text-color-light-2 > .fa').click()
        //click on pre-assesment
        cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click()
        //first choice selected
        cy.get(':nth-child(1) > .radio-box > :nth-child(2) > .answer').click(),
        //second choice selected
        cy.get(':nth-child(2) > .radio-box > :nth-child(1) > .answer').click(),
        //third choice selected
        cy.get(':nth-child(3) > .radio-box > :nth-child(2) > .answer').click(),
        //fourth choice selected
        cy.get(':nth-child(4) > .radio-box > :nth-child(1) > .answer').click(),
        //fifth choice selected
        cy.get(':nth-child(5) > .radio-box > :nth-child(2) > .answer').click(),
        //6th choice selected
        cy.get(':nth-child(6) > .radio-box > :nth-child(1) > .answer').click(),
        //7th choice selected
        cy.get(':nth-child(7) > .radio-box > :nth-child(2) > .answer').click(),
        //8th choice selected
        cy.get(':nth-child(8) > .radio-box > :nth-child(1) > .answer').click(),
        //9th choice selected
        cy.get(':nth-child(9) > .radio-box > :nth-child(2) > .answer').click(),
        //10th choice selected
        cy.get(':nth-child(10) > .radio-box > :nth-child(1) > .answer').click(),
        //submit
        cy.get('.justify-content-center > .btn').click()

    

    })
  

    Cypress.Commands.add('takeformalquiz', () => {
      const cypressActions = [
        () => cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click(),
        () => cy.get(':nth-child(1) > .radio-box > :nth-child(1) > .answer').click(),
        () => cy.get(':nth-child(2) > .radio-box > :nth-child(1) > .answer').click(),
        () => cy.get(':nth-child(3) > .radio-box > :nth-child(1) > .answer').click(),
        () => cy.get(':nth-child(4) > .radio-box > :nth-child(2) > .answer').click(),
        () => cy.get(':nth-child(5) > .radio-box > :nth-child(1) > .answer').click(),
        () => cy.get('.justify-content-center > .btn').click(),
        () => cy.get('.nextStepLink > .text-big-body').click()
      ];
    
      const takeQuizLoop = (loopCount) => {
        //this is subject to change as per the number of lessons in a course
        if (loopCount >= 5) {
          // Exit the loop if loopCount reaches 4
          return;
        }
    
        cypressActions.forEach((action, index) => {
          action();
    
          if (index === cypressActions.length - 1) {
            // If it's the last action in the array, navigate to the next quiz and restart the loop
            cy.get('.nextStepLink > .text-big-body').click();
            takeQuizLoop(loopCount + 1); // Restart the loop
          }
        });
      };
    
      takeQuizLoop(0); // Start the loop from 0
    });

    Cypress.Commands.add('enrollInCourse', (courseName) => {
  cy.get('#searchAcademyAllCourseInputHeader')
    .type(courseName)
  cy.contains('.course-title', courseName)
    .click()
  cy.get('[data-testid="enroll-button"]')
    .click()
});


    


    Cypress.Commands.add('takefinalexam', () => {

      //click on next
      cy.get('.nextStepLink > span > .fas').click()
      //click on final exam
      cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click()
      //first choice selected
      cy.get(':nth-child(1) > .radio-box > :nth-child(4) > .answer').click(),
      //second choice selected
      cy.get(':nth-child(2) > .radio-box > :nth-child(1) > .answer').click(),
      //third choice selected
      cy.get(':nth-child(3) > .radio-box > :nth-child(2) > .answer').click(),
      //fourth choice selected
      cy.get(':nth-child(4) > .radio-box > :nth-child(2) > .answer').click(),
      //fifth choice selected
      cy.get(':nth-child(5) > .radio-box > :nth-child(1) > .answer').click(),
      //6th choice selected
      cy.get(':nth-child(6) > .radio-box > :nth-child(2) > .answer').click(),
      //7th choice selected
      cy.get(':nth-child(7) > .radio-box > :nth-child(1) > .answer').click(),
      //8th choice selected
      cy.get(':nth-child(8) > .radio-box > :nth-child(2) > .answer').click(),
      //9th choice selected
      cy.get(':nth-child(9) > .radio-box > :nth-child(2) > .answer').click(),
      //10th choice selected
      cy.get(':nth-child(10) > .radio-box > :nth-child(1) > .answer').click(),
      //submit
      cy.get('.justify-content-center > .btn').click()

  })





Cypress.Commands.add('submitfinalassignment', () => {

 //click on next step for submit assignment link
  cy.wait(2000)
  cy.get('.nextStepLink').click()
  cy.wait(2000)
  cy.get('.nextStepLink').click()
  cy.wait(2000)
  cy.get('.nextStepLink').click()
 
 //upload file from PC
 cy.fixture('Activity - Setting Goals for Success_Introduction to Goal Setting_28.pdf').then(fileContent => {

  cy.get('input[type="file"]', { timeout: 10000 }).should('exist').attachFile({
     fileContent: fileContent,
     fileName: 'Activity - Setting Goals for Success_Introduction to Goal Setting_28.pdf',
     mimeType: 'application/pdf'
   });
 });
 //enter message text for buddy
 cy.get('.msg-body').type("This course was very useful and I have learnt alot from it")
 //click on submit assignment
 cy.get('.form-group > .btn').click()
 //assertion
 cy.get('#progress > .alert').should('be.visible')
  
})
  
  
Cypress.Commands.add('addcomponentstoanLJ', () => {  
  //click on the journey components page
  cy.get('#ljcomponents-tab').click()

  cy.wait(2000)
  //click on add phase button
  cy.get('.col-md-12 > .btn').click()

  cy.wait(2000)
  //type phase name
  cy.get('#phase_form_name').type('Phase 1')
  //enter starts on date
  cy.get('#phase_form_starts_on').type('2024-02-19')
  //enter ends on date
  cy.get('#phase_form_ends_on').type('2024-03-25')
  //click on the save button
  cy.get(':nth-child(6) > .col-sm-12 > .btn').click()

  cy.wait(2000)
  //click on add item
  cy.get('.phasempty > .itembtns > .yelbtn').click()

  cy.wait(2000)
  //search and add a course
  cy.get('#programme_item_query').type('Emotional Intelligence')

  cy.wait(2000)
  cy.get(':nth-child(2) > .table-action-btn > .btn').click()
  cy.wait(2000)
  cy.get('#course_period_form_starts_on').type('2024-02-19')
  cy.wait(2000)
  cy.get('#course_period_form_ends_on').type('2024-03-22')
  cy.wait(2000)
  cy.get('#course_period_form_enrollment_end').type('2024-03-22')
  cy.wait(2000)
  cy.get('#course_period_form_buddy_type_0').click()
  cy.wait(2000)
  cy.get('.col-12 > .btn').click()

  cy.wait(2000)

  cy.get('.phasempty > .itembtns > .yelbtn').click()

  cy.wait(2000)
  //add a toolkit
  cy.get('.row > .nav > :nth-child(2) > .nav-link').click()
  cy.wait(2000)
  cy.get('#programme_item_query').type('Problem Solving')
  cy.wait(2000)
  //view contents in a toolkit
  /*cy.get('.wicon > .img-responsive').click()
  cy.wait(2000)
  cy.get('#toolkitSlider > .close > .fas').click()
  cy.wait(2000)
  cy.get('.table-action-btn > .btn').click()
  cy.wait(2000)*/
  cy.get('.table-action-btn > .btn').click()
  //enter the toolkits start date
  cy.get('#toolkit_period_form_starts_on').type('2024-02-19')
  cy.wait(2000)
  //check the mandatory box
  cy.get('#toolkit_period_form_is_mandatory').click()
  cy.wait(2000)
  //uncheck the mandatory box
  cy.get('#toolkit_period_form_is_mandatory').click()
  cy.wait(2000)
  //click on the save button
  cy.get('.col-xs-2 > .btn').click()
  cy.wait(2000)

  cy.get('.phasempty > .itembtns > .yelbtn').click()
  cy.wait(2000)
  //add a tool
  cy.get('.row > .nav > :nth-child(3) > .nav-link').click()
  cy.wait(2000)
  //search for a tool
  cy.get('#programme_item_query').type('personal')
 
  /*//view tool
  cy.wait(2000)
  cy.get(':nth-child(1) > .table-action-btn > .wicon > .img-responsive').click()
  cy.wait(2000)
  cy.get('#toolSlider > .close > .fas').click()
  cy.wait(2000)*/
  //click on the add phase button
  cy.get(':nth-child(1) > .table-action-btn > .btn').click()
  cy.wait(2000)
  cy.get('#tool_period_form_starts_on').type('2024-02-19')
  cy.get('.col-xs-2 > .btn').click()

  //add an event
  cy.get('#createEventModal').click()
  cy.wait(2000)
  cy.get(':nth-child(1) > .col-12 > #event_form_title').type('QA Test EVENT')
  cy.get('#event-form-slider > .mt-12 > .col-12 > #event_form_body').type('For testing purposes')
  cy.get('.flex-wrap > .checked').click()

  //check attendance type
  cy.get(':nth-child(7) > .unchecked').click()
  cy.get(':nth-child(7) > .checked').click()

  //enter starts on event date
  cy.get('#disallowid').type('2024-02-22')

  const time = '10:30'; 

// Assuming the time input field is targeted by the provided selector
  cy.get('.d-flex.mt-only-12 > :nth-child(1) > #event_form_event_periods_0_start_time')
  .type(time)

  const time2 = '11:30'
  cy.get(':nth-child(2) > #event_form_event_periods_0_end_time').type(time2)

  cy.get('#event_form_event_periods_0_url').type('https://meet.google.com/oiw-whyj-vqg')

  cy.get(':nth-child(2) > .orange-default-text-primary-button-web').click()

  cy.get('.dark-default-text-secondary-button-web')

  //code to be added once the bug of editing components is fixed

  //editing a course in journey components page
  /*cy.get('.iconbx > a > .img-responsive').click()
  cy.get('#course_period_form_ends_on').type('2024-02-25')
  cy.wait(2000)
  cy.get('#course_period_form_enrollment_end').type('2024-02-25')
  cy.wait(2000)

  //check buddy types checkboxed
  cy.get('#course_period_form_buddy_type_1').click()
  cy.wait(2000)
  cy.get('#course_period_form_buddy_type_2').click()
  cy.wait(2000)
  cy.get('#course_period_form_buddy_type_2').click()
  cy.wait(2000)
  //click on save
  cy.get('.col-12 > .btn').click()*/



  //cy.get('#updateCoursePeriodSlider > .close > .fas').click()



  


})

 

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Cypress.Commands.add("clickRecaptcha", () => {
    /*cy.window().then(win => {
      win.document
        .querySelector("iframe[src*='recaptcha']")
        .contentDocument.getElementById("recaptcha-token")
        .click();
      cy.get('iframe')
      .first()
      .then((recaptchaIframe) => {
        const body = recaptchaIframe.contents()
        cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
        
      })
      
       
    }); 
  */