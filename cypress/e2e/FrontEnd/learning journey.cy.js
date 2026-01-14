/// <reference types ="cypress"/>

describe('Test the learning journey jab', () => {
    it('should click on the learning journey tab and interact with components', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login') // Replace with the URL of your calendar page
      cy.successfullogin()

      cy.opennewacademy()
      cy.ljnavbar().click()
      cy.get('#search').type("Setting Goals for Success")
      //this code clears the searched input
      cy.get('#search').clear()
      cy.wait(2000)
      cy.get('#tool27009').click({force: true})
      cy.wait(2000)
      cy.get('.modal-download > .mx-4').click()
      //close the slider panel
      cy.get('#closeIcon > span > .fas').click()
      cy.reload()
      //cy.get('[phx-click="next_phase"] > .fas').click()
      //check on previous phase
      //cy.get('[phx-click="previous_phase"] > .fas').click()
      cy.wait(2000)
      //click on next phase
      cy.get('[phx-click="next_phase"] > .fas').click()
      //cy.get('.w-400').click()
      cy.get('#course19665').click()
      cy.wait(2000)
      cy.get('.mx-3').click()
      //click back to learning journey
      cy.get('.ml-auto > :nth-child(2) > .nav-link').click()

      cy.get('.fa-chevron-left').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(3) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(3) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(4) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(4) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(5) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(5) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(6) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.type-section > .custom-checkbox:nth-child(6) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.progress-section').click()
      cy.wait(2000)
      cy.get('.progress-section > :nth-child(3) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.progress-section > :nth-child(3) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.progress-section > :nth-child(4) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.progress-section > :nth-child(4) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.progress-section > :nth-child(5) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('.progress-section > :nth-child(5) > .sm-body-text-normal').click()
      cy.wait(2000)
      cy.get('#state_mandatory').click()
      cy.wait(2000)
      cy.get('#state_not_mandatory').click()
      cy.wait(2000)
      cy.reload()
      cy.get('#select2-select-filter-date-container')
      .click()
      .then(() => {
        cy.get("li[role='option']")
          .contains('Weekly')
          .should('exist')
          .click();
      });
      cy.wait(2000)
      cy.get('#select2-select-filter-date-container')
      .click()
      .then(() => {
        cy.get("li[role='option']")
          .contains('Monthly')
          .should('exist')
          .click();
      });

     
      cy.reload()

      cy.log('Learning Journey page Successfully tested')
      
    })
  })
