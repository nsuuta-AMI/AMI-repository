describe('learning journey page backend', () => {
  
 it('go to the learning journey tab and create a master', () => {

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

  //click on the learning journey icon
  cy.get('.dropdown-parent:nth-child(1) > a .active').click({force: true})

  cy.wait(2000)

  //click on the (+) icon to create a new learning journey
  cy.get('.point-title > .btn').click({force: true})

  //click on the journey title icon and type a name
  cy.get('#new_programme_form_name').type("Automation Master LJ")

  cy.wait(2000)

  cy.get('#new_programme_form_programme_language_id').select('English')

  cy.wait(2000)

  //select a programme client
  cy.get('#new_programme_form_client_id').select('QA testing')

  cy.wait(2000)

  //select a programme segment
  cy.get('#new_programme_form_programme_segment_id').select('QA')

  cy.wait(2000)

  // select a  programme type
  cy.get('#new_programme_form_programme_type_id').select('QA')

  cy.wait(2000)
  //select a programme subtype
  cy.get('#new_programme_form_programme_subtype_id').select('QA')

  cy.wait(2000)
  //enter a description
  cy.get('#new_programme_form_description').type('This is an automation master for QA purposes not to be used for manual tests')

  cy.wait(2000)
  //enter the starts date
  cy.get('#new_programme_form_programme_periods_0_starts_on').type('2024-02-16')

  cy.wait(2000)
  //enter the ends on date
  cy.get('#new_programme_form_programme_periods_0_ends_on').type('2024-12-31')

  cy.wait(2000)
  //select the programme period cohort
  cy.get('#new_programme_form_programme_periods_0_cohort').select('1')

  cy.wait(2000)
  //select the programme period country
  cy.get('#new_programme_form_programme_periods_0_country_id').select('Kenya')

  cy.wait(2000)

  //select the visibility type
  cy.get('#new_programme_form_visibility').select('Private')

  cy.wait(2000)
  //select the phase option
  cy.get('#new_programme_form_has_phases').select('yes')

  cy.wait(2000)

  //click on the save button
  cy.get(':nth-child(10) > .btn').click()

  //add components to the master

  cy.wait(2000)

  cy.addcomponentstoanLJ()

})



})











  








 

 
    
     
      

  



 








  
   
  




    

    
    
 


  
 




