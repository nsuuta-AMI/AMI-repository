describe('Dashboard page', () => {
  it('search for academy AMI DEMO ACADEMY', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();

    cy.get('[id="select2-gybselect-container"]').click();
    cy.get('.select2-search__field').type('AMI DEMO ACADEMY');
    cy.get("li[role='option']").each(function ($ele, index, list) {
      if ($ele.text() === 'AMI DEMO ACADEMY') {
        cy.log("Found academy");
        cy.wrap($ele).click({ force: true });
        cy.title().should("include", "African Management Initiative");
      } else {
        cy.log("current academy", $ele.text());
      }
    });
  });

  it('click on the language dropdown successfully', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.changelanguage();
  });

  it('should click on the carousel for open courses', () => {
    cy.visit('https://account.africanmanagers.org/dashboard/home');
    cy.successfullogin();
    cy.opennewacademy();
    cy.OpenCoursescarousel();  // Use OpenCoursescarousel function here
  });

  it('open page of selected academy', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.opennewacademy();

    cy.title().should("include", "African Management Initiative");
  });

 it('should click on the carousel within a learning journey', () => {
    cy.visit('https://account.africanmanagers.org/dashboard/home');
    cy.successfullogin();
    cy.opennewacademy();
    
    cy.wait(1000);
    cy.get('.mrl-12.next-icon').click();
    cy.wait(1000);
    cy.get('.mrl-12.prev-icon').click();
    cy.wait(1000);
    cy.get('#phase-down-btn > .font-size-18 > .fas').click();
    cy.wait(1000);
    cy.get('#phase-up-btn > .font-size-18 > .fas').click();
    cy.get('#event19535').click();
    cy.wait(1000);
    cy.get('#closeIcon > span > .fas').click();


    cy.LJcarousel();
  });

  it('should interact with events in a dialog box within a calendar', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();

    cy.get('[id="select2-gybselect-container"]').click();
    cy.get('.select2-search__field').type('AMI DEMO ACADEMY');
    cy.get('[id="select2-gybselect-results"]').click();
    cy.calendar();
    cy.log('Dashboard Successfully tested');
  });
});
