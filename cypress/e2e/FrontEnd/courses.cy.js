/// <reference types ="cypress"/>

describe('Courses Page Tests', () => {
  before(() => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('input[name="user[login]"]').type('stella@muraho.tech')
    cy.get('input[name="user[password]"]').type('AMI1234567890')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  describe('Course Navigation', () => {
    it('should navigate to academy courses and search', () => {
      // More reliable navigation using data attributes
      // cy.get('[data-testid="courses-nav"]').click()
      cy.contains('Academy Courses').should('be.visible').click()
      
      // Verify page load
      cy.get('.courses-nav-tabs').should('be.visible')
      
      // Search with better selectors
      cy.get('.resourcesearch')
        .should('be.visible')
      
      cy.wait(1000)

    })
  })

  describe('Course Enrollment', () => {
    it('should enroll in a course', () => {
      cy.enrollInCourse('Setting goals for success')
      cy.get('[data-testid="enrollment-success"]').should('be.visible')
    })
  })

  // describe('Assessments', () => {
  //   beforeEach(() => {
  //     cy.navigateToMyCourses()
  //     cy.openCourse('Emotional Intelligence')
  //   })

  //   it('should complete pre-assessment', () => {
  //     cy.takePreAssessment()
  //     cy.get('[data-testid="assessment-complete"]').should('be.visible')
  //   })

  //   it('should complete formal quizzes', () => {
  //     cy.takeFormalQuizzes()
  //     cy.get('[data-testid="quizzes-complete"]').should('be.visible')
  //   })

  //   it('should complete final exam', () => {
  //     cy.takeFinalExam()
  //     cy.get('[data-testid="exam-passed"]').should('be.visible')
  //   })
  // })

  // describe('Course Management', () => {
  //   it('should add a buddy', () => {
  //     cy.navigateToMyCourses()
  //     cy.addBuddy()
  //     cy.get('[data-testid="buddy-added"]').should('be.visible')
  //   })

  //   it('should submit final assignment', () => {
  //     cy.navigateToMyCourses()
  //     cy.openCourse('Emotional Intelligence')
  //     cy.submitFinalAssignment()
  //     cy.get('[data-testid="assignment-submitted"]').should('be.visible')
  //   })

  //   it('should download report', () => {
  //     cy.selectAcademy('QA Academy')
  //     cy.navigateToMyCourses()
  //     cy.downloadCourseReport('Setting goals for success')
  //     cy.verifyDownload('report.pdf')
  //   })

  //   // Uncomment when ready
  //   /*
  //   it('should download certificate', () => {
  //     cy.selectAcademy('QA Academy')
  //     cy.navigateToMyCourses()
  //     cy.downloadCertificate('Setting goals for success')
  //     cy.verifyDownload('certificate.pdf')
  //   })
  //   */
  // })
})