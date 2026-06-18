describe('dashboard page', () => {
  
    it('search for academy academy', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.successfullogin() 
    
      cy.get('[id="select2-gybselect-container"]').click()
      cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
      cy.get("li[role='option']").each(function($ele,index,list){
    
      if($ele.text() === 'AMI DEMO ACADEMY'){
        cy.log("Found academy")
        cy.wrap($ele).click({force: true})
        
        cy.title().should("include", "African Management Initiative")  
    
      }
      else{
        cy.log("current academy", $ele.text() )
        
      }
    
      })
    })
    
    it('click on the language dropdown successfully', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.successfullogin()
      //cy.get('[id="select2-locale-setting-container"]').trigger('mousemove').click()
      //cy.get('[id="select2-gybselect-container"]').trigger('mousemove').click()
    
      cy.get('[id="select2-locale-setting-container"]').click()
      
      cy.get("li[role ='option']").each(function($ele, index, list){
    
        //cy.log($ele.text())
    
        if($ele.text()==='French'){
    
          cy.log("Found language French")
    
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
      
    it('open page of selected academy', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login')
      cy.successfullogin() 
      cy.changelanguageEng()
    
      cy.get('[id="select2-gybselect-container"]').click()
      cy.get('.select2-search__field').type('AMI DEMO ACADEMY')
      cy.get('[id="select2-gybselect-results"]').click()
      cy.title().should("include", "African Management Initiative")  
    
    })
    
    
    
    it('should click on the carousel within a learning journey', () => {
      cy.visit('https://account.africanmanagers.org/dashboard/home')
      cy.successfullogin()
      cy.opennewacademy()
      cy.LJcarousel()
    
    
    })
    
    it('should click on the carousel for open courses', () => {
      cy.visit('https://account.africanmanagers.org/dashboard/home')
      cy.successfullogin()
      cy.opennewacademy()
      cy.OpenCoursescarousel()
    
    
    })
    
    it('should interact with events in a dialog box within a calendar', () => {
      cy.visit('https://account.africanmanagers.org/ami_auth/login') 
      cy.successfullogin()
      cy.opennewacademy()
      cy.calendar()
      cy.log('Dashboard Successfully tested')
    
    
    })
    
    })