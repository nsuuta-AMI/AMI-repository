describe('testing language and academy dropdowns', () => {
  
    it('click on the language dropdown successfully', () => {
    cy.visit('https://account-staging.africanmanagers.org/ami_auth/login')
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

    it('click on the academy dropdown successfully', () => {
        cy.visit('https://account-staging.africanmanagers.org/dashboard/home')
        cy.successfullogin()
      
        cy.get('[id="select2-gybselect-container"]').click()
        cy.get('.select2-search__field').type('mob')
        cy.contains('mobile').click()
        

        cy.get("li[role ='option']").each(function($ele, index, list){


          if($ele.text()==='mobile'){
      
            cy.log("Found academy")
      
            cy.wrap($ele).click()
           
            //cy.get('.banner-text > .text-heading-6') 
            //.should('have.text', 'Courses Demo Academy')
  
          }
      
          else {
      
            cy.log("Current Value",$ele.text())
      
          }
      
        })
        
        })  
    
    })
    
