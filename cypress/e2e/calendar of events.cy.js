describe('Test the calendar of events', () => {
  it(' Calendar of events ( Academy dashboard)', () => {
    // Visit login and perform setup
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.Academydashboard();


    // Navigate to new academy dashboard tab
    cy.calendarofevents();
    
    

   
    cy.log('Calendar of events successfully tested');

  });
});
