describe('Test the Courses Page', () => {
 it('should click on the courses tab and interact with academy courses', () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login') // Replace with the URL of your calendar page
cy.successfullogin()
cy.opennewacademy()
   
//click on academy courses
cy.get(':nth-child(5) > .nav-link > .text-body-small').should('be.visible').click()
//click on all courses
cy.get('.my-academy-all-courses > .pt-14').click()
//search for a course
cy.get('#searchAcademyAllCourseInputHeader').type(" Strategic Business Planning")
//test clear search input
cy.wait(2000)
cy.get('#searchAcademyAllCourseInputHeader').clear() 
   
   
//test filter academy filter
cy.get('#select2-all-courses-filter-academy-select-input-container')
.should('be.visible')
.click()
.then(() => {
cy.get("li[role='option']")
 .contains('AMI DEMO ACADEMY')
 .should('exist')
 .click();
  });
  cy.get('#select2-all-courses-filter-lj-select-input-container')
  .should('be.visible')
  .click()
  .then(() => {
  cy.get("li[role='option']")
  .contains('Automation LJ QA')
  .should('exist')
  .click();
})
                
     
})
   
     //this is working
/*it('Enroll for a course', () => {
cy.visit('https://account.africanmanagers.org/ami_auth/login')
cy.successfullogin()
   
//open a new academy
cy.opennewacademy()
//Enroll for the course a course - Setting Goals for success
cy.enrollforcourse()


});*/

   
//this is working 
it('Take pre-assesment', () => {
cy.visit('https://account.africanmanagers.org/ami_auth/login')
cy.successfullogin()
cy.opennewacademy()
cy.mycoursespage()
cy.get(':nth-child(2) > #art > .course-list__container > .progress-container > footer > .text-color-light-2 > span').click()
       
//take pre-assesement
  cy.takepreassesment()
   
  console.log("Pre-assement taken successfully")

  })
  it('Test formal quizzes ', () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login')
   cy.successfullogin()
  cy.opennewacademy();

 //select the courses dropdown
cy.get(':nth-child(5) > .nav-link > .text-body-small').should('be.visible').click()
//cy.get('.nav-item.dropdown > .bg-FEEEF0-ta-hover > .text-body-small').should('be.visible').click();
//click on academy courses
cy.contains('Academy Courses').should('be.visible').click();
//click on my courses
 cy.get('.my-academy-courses > .pt-14').click()
 //click on go to course for communication getting the message across
 
 cy.get(':nth-child(2) > #art > .course-list__container > .progress-container > footer > .text-color-light-2 > .fas').click()
        
 cy.takeformalquiz();
        

  })

 describe('Course Quizzes', () => {
it('Takes the second quiz', () => {
  // Visit the login page
  cy.visit('https://account.africanmanagers.org/ami_auth/login');
              
              
  cy.successfullogin();
  cy.opennewacademy();

  // Select the courses dropdown
  cy.get(':nth-child(5) > .nav-link > .text-body-small').should('be.visible').click();

  // Click on Academy Courses
  cy.contains('Academy Courses').should('be.visible').click();

  // Click on My Courses
  cy.get('.my-academy-courses > .pt-14').click();

  // Click on the specific course
  cy.get(':nth-child(3) > #art > .course-list__container > .progress-container > footer > .text-color-light-2 > span').click();

  // Take the quizzes and conclude
  cy.lessonquiztwo(); // Call  the second quiz
  cy.wait(2000);

  cy.lessonquizthree(); // Call the third quiz
  cy.wait(2000);

  cy.finalconclusion(); // Call the final conclusion
});
});
});          