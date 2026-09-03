export const login = () => {
  cy.visit('https://account.africanmanagers.org/ami_auth/login')
  cy.get('input[name="user[login]"]').type('stella@muraho.tech') // replace with valid email
  cy.get('input[name="user[password]"]').type('AMI1234567890') // replace with valid password
  cy.get('button[type="submit"]').click()
}

describe('dashboard page', () => {


  it('search for AMI Quality Assurance Testing Academy', () => {
    login()

    cy.get('#select2-gybselect-container').click({ force: true })
    cy.get('.select2-search__field').type('AMI Quality Assurance Testing Academy')

    cy.get("li[role='option']").each(($ele) => {
      if ($ele.text().trim() === 'AMI Quality Assurance Testing Academy') {
        cy.log("Found academy")
        cy.wrap($ele).click({ force: true })
        cy.title().should("include", "African Management Initiative")
      }
    })
  })

  //it('click on the language dropdown successfully', () => {
   // login()

    //y.get('#select2-locale-setting-container').click()

    //cy.get("li[role='option']").each(($ele) => {
      //if ($ele.text().trim() === 'French') {
        //cy.log("Found language French")
        //y.wrap($ele).click()
        //cy.title().should("include", "African Management Initiative")
    
    

  //it('open page of selected academy', () => {
    //login()

    // simulate "change language to English"
    //cy.get('#select2-locale-setting-container').click()
    //cy.get("li[role='option']").contains('English').click()

    //cy.get('#select2-gybselect-container').click()
    //cy.get('.select2-search__field').type('AMI Quality Assurance Testing Academy')
    //cy.get('#select2-gybselect-results').click()
    //cy.title().should("include", "African Management Initiative")

  //it('should click on the carousel within a learning journey', () => {
    //login()

    //cy.get('#select2-gybselect-container').click({ force: true })
    //cy.get('.select2-search__field').type('AMI DEMO ACADEMY')

    //cy.get("li[role='option']").each(($ele) => {
     // if ($ele.text().trim() === 'AMI DEMO ACADEMY') {
       // cy.log("Found academy")
       // cy.wrap($ele).click({ force: true })
        //cy.title().should("include", "African Management Initiative")


  //it('should click on the carousel for open courses', () => {
    //login()

   // cy.get('#select2-locale-setting-container').click()

   // cy.get("li[role='option']").each(($ele) => {
      //if ($ele.text().trim() === 'French') {
       // cy.log("Found language French")
       // cy.wrap($ele).click()
        //cy.title().should("include", "African Management Initiative")


  it('should interact with events in a dialog box within a calendar', () => {
    login()

    // simulate "change language to English"
    cy.get('#select2-locale-setting-container').click()
    cy.get("li[role='option']").contains('English').click()

    cy.get('#select2-gybselect-container').click()
    cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
    cy.get('#select2-gybselect-results').click()
    cy.title().should("include", "African Management Initiative")
  })

  // it('should click on the carousel within a learning journey', () => {
  //   login()

  //   // simulate "open new academy"
  //   cy.get('#select2-gybselect-container').click()
  //   cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
  //   cy.get("li[role='option']").contains('AMI DEMO ACADEMY').click()

  //   // simulate "LJ carousel"
  //   cy.get('.carousel-learning-journey .next-button').click()
  // })

  // it('should click on the carousel for open courses', () => {
  //   login()

  //   // simulate "open new academy"
  //   cy.get('#select2-gybselect-container').click()
  //   cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
  //   cy.get("li[role='option']").contains('AMI DEMO ACADEMY').click()

  //   // simulate "Open Courses carousel"
  //   cy.get('.carousel-open-courses .next-button').click()
  // })

  // it('should interact with events in a dialog box within a calendar', () => {
  //   login()

  //   // simulate "open new academy"
  //   cy.get('#select2-gybselect-container').click()
  //   cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
  //   cy.get("li[role='option']").contains('AMI DEMO ACADEMY').click()

  //   // simulate "calendar"
  //   cy.get('.calendar-icon').click()
  //   cy.get('.event-dialog').should('be.visible')
  //   cy.log('Dashboard Successfully tested')
  // })

})



 

 
    
     
      

  



 








  
   
  




    

    
    
 


  
 




