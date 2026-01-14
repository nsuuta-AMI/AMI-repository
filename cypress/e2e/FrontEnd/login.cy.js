describe('login page', () => {
    
    it('should allow user to login with valid credentials', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('input[name="user[login]"]').type('stella@muraho.tech') // replace with valid email
    cy.get('input[name="user[password]"]').type('AMI23250') // replace with valid password
    cy.get('button[type="submit"]').click()
    
    })

    it('should display an error message for invalid login', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.unsuccessfullogin()   

        
    })
    
   

})



    



   




 
 


  
