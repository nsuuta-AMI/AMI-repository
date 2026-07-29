Cypress.Commands.add('clickImage', () => {
  cy.window().then((win) => {
    const element = win.document.querySelector('img[src="/images/send.svg"]');
    element.click();
  });
});

Cypress.Commands.add('successfullogin', (email, password) => {
  cy.get('#user_login').type('louange@muraho.tech');
  cy.get('#user_password').type('AMI12340000');
  cy.get('.comn-flex-box > .btnRed').click();
  cy.url({ timeout: 30000 }).should('include', '/dashboard');
});

Cypress.Commands.add('usuccessfullogin', (email, password) => {
  cy.get('#user_login').type('louange@muraho.teh');
  cy.get('#user_password').type('AI12340000');
  cy.get('.comn-flex-box > .btnRed').click();
  //cy.get('.alert-warning').should('be.visible');
});

Cypress.Commands.add('opennewacademy', () => {
  cy.get('#select2-gybselect-container', { timeout: 60000 })
    .should('be.visible')
    .click({ force: true });
    
  cy.get('.select2-search__field', { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type('AMI DEMO ACADEMY');
    
  cy.get('#select2-gybselect-results', { timeout: 10000 })
    .contains('AMI DEMO ACADEMY')
    .click({ force: true });

  // Wait for the academy change to persist and page to settle
  cy.get('#select2-gybselect-container', { timeout: 30000 })
    .should('contain.text', 'AMI DEMO ACADEMY');
});

Cypress.Commands.add('Academydashboard', () => {
  cy.wait(3000); // Wait for potential redirects or slow renders after login

  // Open the select2 dropdown
  cy.get('#select2-gybselect-container', { timeout: 60000 })
    .should('be.visible')
    .click({ force: true });

  // Type to search for the academy
  cy.get('.select2-search__field', { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type('New Academy Dashboard - Quality Assurance AMI - 2026');

  // Click the matching result
  cy.get('#select2-gybselect-results', { timeout: 10000 })
    .contains('New Academy Dashboard - Quality Assurance AMI - 2026')
    .click({ force: true });

  // Confirm the dropdown now shows the selected academy
  cy.get('#select2-gybselect-container', { timeout: 30000 })
    .should('contain.text', 'New Academy Dashboard - Quality Assurance AMI - 2026');

  // Step 1: Click the nav-link to OPEN the dropdown menu
  // (the dropdown won't show its links until this is clicked)
  cy.get(':nth-child(8) > .dropdown > .nav-link', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });

  // Step 2: Click the academy my_journey link inside the now-open dropdown.
  // We match only the STABLE parts of the href (domain + path + academy_id).
  // The JWT token in the full href expires — never hardcode it.
  cy.get(':nth-child(8) > .dropdown > .dropdown-menu > [href*="account-academy.africanmanagers.org"][href*="my_journey"]', { timeout: 10000 })
    .should('exist')
    .click({ force: true });

  // Wait for the academy dashboard/journey page to fully load
  cy.url({ timeout: 30000 }).should('include', 'my_journey');
});

Cypress.Commands.add('changelanguage', () => {
  cy.get('[id="select2-locale-setting-container"]').click();
  cy.get("li[role ='option']").each(function ($ele, index, list) {
    if ($ele.text() === 'English') {
      cy.wrap($ele).click();
      cy.title().should("include", "African Management Initiative");
    }
  });
});

Cypress.Commands.add('ljnavbar', () => {
  cy.get('.ml-auto > :nth-child(2) > .nav-link');
});

Cypress.Commands.add('wallnavbar', () => {
  cy.get(':nth-child(3) > .nav-link > .text-body-small');
});

Cypress.Commands.add('LJcarousel', () => {
  cy.wait(2000);  // Wait for 2 seconds
  cy.visit('https://account.africanmanagers.org/dashboard/home');  // Visit the dashboard
  cy.wait(2000);  // Wait for 2 seconds

});

Cypress.Commands.add('calendarofevents', () => {
  cy.get(':nth-child(8) > .dropdown > .nav-link').click();
  cy.wait(2000);  // Wait for 2 seconds
  cy.get(':nth-child(8) > .dropdown > .nav-link > .img-fluid').click();
  cy.wait(2000);
  cy.get(':nth-child(8) > .dropdown > .dropdown-menu > a[href*="/my_journey"]').click({ force: true });
  cy.wait(2000);
  cy.get('#menuIcon').click();
  cy.wait(2000);
  cy.get('a[href="/calendar_of_events"]', { timeout: 10000 }) // wait up to 10s
    .should('be.visible')   // ensure it's visible
    .click({ force: true });
  //cy.visit('https://account.africanmanagers.org/dashboard/home');  // Visit the dashboard
  cy.wait(2000);  // Wait for 2 seconds

  //it(' should click on a course and return', () => {

  cy.get(':nth-child(2) > [colspan="7"] > .mb-1').click()

  cy.wait(3000);

  // Return to the calendar of events page

  cy.get('.justify-end > .hidden').click();
  //cy.wait(30000);
  cy.get('[data-phx-id^="m38-phx-"] > .flex', { timeout: 10000 }).click();
  cy.wait(2000)
  cy.go('back');
  cy.wait(10000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get('#prevBtn').click()
  cy.wait(2000)
  cy.get(':nth-child(4) > [colspan="1"] > .mb-1').click()
  cy.wait(3000)
  cy.contains(/73|74/).prev().click()
  cy.wait(10000)
  cy.get('div[phx-click="tool-detail"][phx-value-id="4874"] > [phx-click="select-tool-download"] > :nth-child(1) > .flex-row > .w-6 > .relative').click()
  //cy.get('div[phx-click="tool-detail"][phx-value-id="3225"] > [phx-click="select-tool-download"] > :nth-child(1) > .flex-row > .w-6 > .relative').click()
  cy.get('#download-tools > .flex').click()
  cy.wait(2000)
  cy.get('.view-more-row > .body-super-small').click({ force: true })
  cy.wait(2000)
  cy.get('#dropdown-day-5 > [phx-value-type="toolkit"]').click()
  cy.wait(2000)
  cy.get('.justify-end > .hidden').click({ force: true });
  cy.wait(2000);


});


//cy.wait(2000)
//cy.go('back');


Cypress.Commands.add('forumpage', () => {
  // If Academydashboard already landed us on the journey page, skip clicking "Journey" again.
  // Re-clicking it triggers a page reload which causes a detached DOM error on the chained .click().
  cy.url().then((url) => {
    if (!url.includes('my_journey')) {
      // Not on journey page yet — navigate there.
      // Break the chain: find first, then re-query to click. This prevents the
      // "subject no longer attached to DOM" error caused by page re-renders after click.
      cy.contains('.nav-link', 'Journey', { timeout: 20000 }).as('journeyLink');
      cy.get('@journeyLink').click({ force: true });

      // Wait for the journey page to load before continuing
      cy.url({ timeout: 20000 }).should('include', 'my_journey');
    }
  });

  // Open the sidebar by clicking the menu icon (if it exists in the DOM).
  // Use force:true since #menuIcon itself may be visually hidden at some viewports.
  cy.get('body').then(($body) => {
    if ($body.find('#menuIcon').length > 0) {
      cy.get('#menuIcon').click({ force: true });
    }
  });

  // Give the sidebar a moment to animate open
  cy.wait(1000);

  // Click the Wall link using the confirmed selector.
  // We use [data-phx-id^="m8-phx-"] (prefix match) — "m8-phx-" is stable but the
  // random session suffix (e.g. GMazCUt-hHlUBCEB) changes every load, so never hardcode it.
  // force:true bypasses visibility — works even if the sidebar parent is still hidden/animating.
  cy.get('[data-phx-id^="m8-phx-"] > .lg\\:pl-6 > .flex > .w-full', { timeout: 15000 })
    .should('exist')
    .click({ force: true });

  // Wait for the Wall page to fully render before handing control back to the test.
  // #post-body is the textarea for creating a new post — its presence confirms the page is ready.
  cy.get('#post-body', { timeout: 30000 }).should('exist');
});


Cypress.Commands.add('OpenCoursescarousel', () => {
  // Interact with the carousel to go through open courses
  cy.get('.mrl-12.icon-next').click({ force: true });  // Click to go to the next item in the carousel
  cy.wait(2000);  // Wait for 2 seconds for the carousel transition
  
  // Bypass Cypress's internal post-click DOM checks by using a native click.
  // This solves the detached DOM error caused by the framework tearing down
  // the carousel arrows immediately after being clicked.
  cy.get('.mrl-12.icon-prev').then(($btn) => {
    $btn[0].click();
  });
  
  cy.wait(2000);
  // Additional carousel interaction logic can go here if needed
  cy.get('.p-r-2').click({ force: true });  // Example of navigating back to dashboard
});

Cypress.Commands.add('calendar', () => {
  // Use .first() because the selector matches multiple cards on the page
  cy.get('.container > .card').first().click();
  cy.get(':nth-child(1) > :nth-child(5) > .table-action > .fas').click();
  cy.get('.col-sm-12 > .btn > .fas').click();
});


Cypress.Commands.add('resourcesnavbar', () => {
  // Instead of relying on `.active`, find the "Resources" link directly
  return cy.contains('.nav-link .text-body-small', 'Resources', { timeout: 10000 })
    .should('be.visible');
});



Cypress.Commands.add('mycoursespage', () => {
  cy.get('.nav-item.dropdown > .bg-FEEEF0-ta-hover > .text-body-small').should('be.visible').click();
  cy.contains('Academy Courses').should('be.visible').click({ force: true });
  cy.get('.my-academy-courses > .pt-14').click();
});

Cypress.Commands.add('enrollforcourse', () => {
  cy.get('.nav-item.dropdown > .bg-FEEEF0-ta-hover > .text-body-small').should('be.visible').click();
  cy.contains('Academy Courses').should('be.visible').click();
  cy.get('.my-academy-all-courses > .pt-14').click();
  cy.get(':nth-child(23) > #art > .course-list__container > .course_info > .course-enroll > a > .fa').click();
});

Cypress.Commands.add('takepreassesment', () => {
  cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click();
  cy.get(':nth-child(1) > .radio-box > :nth-child(1) > .answer').click();
  cy.get(':nth-child(2) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(3) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(4) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(5) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(6) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(7) > .radio-box > :nth-child(4) > .answer').click();
  cy.get(':nth-child(8) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(9) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(10) > .radio-box > :nth-child(1) > .answer').click();
  cy.get('.justify-content-center > .btn').click();
});

Cypress.Commands.add('takeformalquiz', () => {
  cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click();
  cy.get(':nth-child(1) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(2) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(3) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(4) > .radio-box > :nth-child(4) > .answer').click();
  cy.get(':nth-child(5) > .radio-box > :nth-child(4) > .answer').click();
  cy.get('.justify-content-center > .btn').click();
  cy.get('.nextStepLink > .text-big-body').click();
});

Cypress.Commands.add('lessonquiztwo', () => {
  cy.get(':nth-child(5) > .panel-heading > .panel-title > a.text-color-dark-4 > .span-container > .text-body-super-small').click();
  cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click();
  cy.get(':nth-child(1) > .radio-box > :nth-child(1) > .answer').click();
  cy.get(':nth-child(2) > .radio-box > :nth-child(2) > .answer').click();
  cy.get(':nth-child(3) > .radio-box > :nth-child(4) > .answer').click();
  cy.get(':nth-child(4) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(5) > .radio-box > :nth-child(3) > .answer').click();
  cy.get('.justify-content-center > .btn').click();
  cy.get('.nextStepLink > .text-big-body').click();
});

Cypress.Commands.add('lessonquizthree', () => {
  cy.get(':nth-child(6) > .panel-heading > .panel-title > a.text-color-dark-4 > .span-container > .text-body-super-small').click();
  cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click();
  cy.get(':nth-child(1) > .radio-box > :nth-child(2) > .answer').click();
  cy.get(':nth-child(2) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(3) > .radio-box > :nth-child(4) > .answer').click();
  cy.get(':nth-child(4) > .radio-box > :nth-child(3) > .answer').click();
  cy.get(':nth-child(5) > .radio-box > :nth-child(2) > .answer').click();
  cy.get('.justify-content-center > .btn').click();
  cy.get('.nextStepLink > .text-big-body').click();
});

Cypress.Commands.add('finalconclusion', () => {
  cy.get(':nth-child(7) > .panel-heading > .panel-title > a.text-color-dark-4 > .span-container > .text-body-super-small').click();
  cy.get(':nth-child(2) > .col-sm-12 > :nth-child(3)').click();
  cy.get(':nth-child(1) > .radio-box > :nth-child(4) > .answer').click();
  cy.get(':nth-child(2) > .radio-box > :nth-child(2) > .answer').click();
  cy.get(':nth-child(3) > .radio-box > :nth-child(4) > .answer').click();
  cy.get(':nth-child(4) > .radio-box > :nth-child(2) > .answer').click();
  cy.get(':nth-child(5) > .radio-box > :nth-child(3) > .answer').click();
  cy.get('.justify-content-center > .btn').click();
});