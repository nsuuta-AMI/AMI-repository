/// <reference types="cypress" />

describe('My Resources Interactions', () => {
  before(() => {
    // Login once before all tests
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.get('input[name="user[login]"]').type('stella@muraho.tech');
    cy.get('input[name="user[password]"]').type('AMI123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');

    // Select Academy
    cy.get('#select2-gybselect-container').click();
    cy.get('.select2-search__field').type('AMI DEMO ACADEMY');
    cy.get('#select2-gybselect-results').contains('AMI DEMO ACADEMY').click();

    // Navigate to Resources page
    cy.resourcesnavbar().click();
    cy.url().should('include', '/dashboard/my_resources');
  });

  beforeEach(() => {
    // Reload resources page before each test
    cy.visit('https://account.africanmanagers.org/dashboard/my_resources', { timeout: 10000 });
    cy.get('body').then(($body) => {
      if (!$body.find('.page-header:contains("My Resources")').length) {
        cy.reload();
      }
    });
  });

  describe('Toolkit Interactions', () => {
    it('should update like count when unliking and liking a toolkit', () => {
      // Using specific selector
      cy.get('[data-testid="like-button"]').first().as('firstToolkit');

      cy.get('@firstToolkit').within(() => {
        cy.get('.count').invoke('text').then((initialCount) => {
          const count = parseInt(initialCount);

          // Unlike if already liked
          cy.get('[data-testid="unlike-button"], #unlike-toolkit-btn').click({ force: true });
          cy.get('.count').should('contain', count - 1);

          // Like again
          cy.get('[data-testid="like-button"], #like-toolkit-btn').click({ force: true });
          cy.get('.count').should('contain', count);
        });
      });
    });

    it('should display all toolkit sections', () => {
      cy.contains('h2', 'Tools').should('be.visible');
      cy.contains('h3', 'Toolkits').should('be.visible');
      cy.contains('Test OA').should('be.visible');
      cy.contains('Test community tool').should('be.visible');
      cy.contains('Competitive Analysis tool').should('be.visible');
      cy.contains('The Agroecology Toolkit').should('be.visible');
    });

    it('should interact with resources and modals', () => {
      // Click on the course
      cy.get(':nth-child(3) > .row > .col-sm-9').click();
      cy.get('#course28 > .text-body-normal').click();
      cy.wait(1000);
      cy.get('#closeIcon > span > .fas').click();
      cy.wait(1000);

      // Click on toolkit
      cy.get(':nth-child(1) > #toolkit128 > .tool-message > span').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > :nth-child(2) > .custom-checkbox').click();
      cy.wait(1000);
      cy.get('#download_all').click();
      cy.wait(1000);
      cy.get('#closeIcon > span > .fas').click();
    });
  });

  describe('Filter Interactions', () => {
    it('should test resource type filter', () => {
      cy.get('#filterResource .select2-selection').click();
      cy.get("li[role='option']").contains('Tools').click();
      cy.get('#my-resources-apply-filter').click();
      cy.contains('Tools').should('exist');
      cy.get('#my-resources-clear-filter').click();
    });

    it('should test academy and LJ filters', () => {
      cy.get(':nth-child(2) > #filterAcademy .select2-selection').click();
      cy.get("li[role='option']").contains('AMI DEMO ACADEMY').click();
      cy.get('#select2-lj-select-input-container').click();
      cy.wait(1000);
      cy.get('#my-resources-apply-filter').click();
      cy.contains('Automation LJ QA').should('exist');
      cy.get('#my-resources-clear-filter').click();
    });
  });

  describe('Course Navigation Test', () => {
    it('should navigate to course and return', () => {
      // Click the Go to course link
      cy.get('a[href="/dashboard/my_courses/172/480308/course"]').contains('Go to course').as('courseLink');

      cy.get('@courseLink').then(($link) => {
        const courseUrl = $link.attr('href');
        cy.wrap($link).click({ force: true });

        cy.url().should('include', courseUrl);
        cy.contains('button', 'Start Course').should('be.visible');
      });

      // Go back to My Resources
      cy.go('back');
      cy.url().should('include', '/my_resources');
      cy.get('.page-header').should('contain', 'My Resources');
      cy.screenshot('returned-to-resources');
    });

    it('should test Go to Courses and return', () => {
      cy.get(':nth-child(2) > .flex-justify-between-items-start > :nth-child(2) > div > .text-body-small-bold').click();
      cy.wait(1000);
      cy.go('back');
    });
  });
});
