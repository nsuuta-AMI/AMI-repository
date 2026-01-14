describe('Forgot password Page', () => {
    
    it('user should reset password with email', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('.forgot-password-text > .forgot-link').click()
    cy.get('#forgot-form_login').type('louange@muraho.tech')
    cy.wait(2000)
    cy.get('.button').click()
    cy.get('.alert-info').should('be.visible')

    })
 

    it('should display an error message for invalid password reset with email', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('.forgot-password-text > .forgot-link').click()
    cy.get('#forgot-form_login').type('louange@murah')
    cy.wait(2000)
    cy.get('.button').click()
    cy.get('.alert-warning').should('be.visible')
        
    })
   
    it('user should reset password with username', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('.forgot-password-text > .forgot-link').click()
    cy.get('#forgot-form_login').type('Louange')
    cy.wait(2000)
    cy.get('.button').click()
    cy.get('.alert-info').should('be.visible')
    
    })

    it('should display an error message for invalid password reset with username', () => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login')
    cy.get('.forgot-password-text > .forgot-link').click()
    cy.get('#forgot-form_login').type('lng')
    cy.wait(2000)
    cy.get('.button').click()
    cy.get('.alert-warning').should('be.visible')
    
    })

    it('user should reset password with SMS', () => {
        cy.visit('https://account.africanmanagers.org/ami_auth/login')
        cy.get('.forgot-password-text > .forgot-link').click()
        cy.get('#forgot-form_login').type('louange@muraho.tech')
        cy.wait(2000)
        cy.get(':nth-child(2) > .mb-0').click()
        cy.get('.button').click()
        cy.get('.alert-info').should('be.visible')
    
        })
        it('should display an error message for invalid password reset with SMS', () => {
            cy.visit('https://account.africanmanagers.org/ami_auth/login')
            cy.get('.forgot-password-text > .forgot-link').click()
            cy.get('#forgot-form_login').type('louange@mura')
            cy.wait(2000)
            cy.get(':nth-child(2) > .mb-0').click()
            cy.get('.button').click()
            cy.get('.alert-warning').should('be.visible')
        })

        it('user should reset password with username', () => {
            cy.visit('https://account.africanmanagers.org/ami_auth/login')
            cy.get('.forgot-password-text > .forgot-link').click()
            cy.get('#forgot-form_login').type('Louange')
            cy.wait(2000)
            cy.get(':nth-child(2) > .mb-0').click()
            cy.get('.button').click()
            cy.get('.alert-info').should('be.visible')
        })

        it('should display an error message for invalid password reset with username', () => {
            cy.visit('https://account.africanmanagers.org/ami_auth/login')
            cy.get('.forgot-password-text > .forgot-link').click()
            cy.get('#forgot-form_login').type('.')
            cy.wait(2000)
            cy.get(':nth-child(2) > .mb-0').click()
            cy.get('.button').click()
            cy.get('.alert-warning').should('be.visible')
        })

        it('user should reset password with phone number', () => {
            cy.visit('https://account.africanmanagers.org/ami_auth/login')
            cy.get('.forgot-password-text > .forgot-link').click()
            cy.get('#forgot-form_login').type('+250783738009')
            cy.wait(2000)
            cy.get(':nth-child(2) > .mb-0').click()
            cy.get('.button').click()
            cy.get('.alert-info').should('be.visible')
        })

        it('should display an error message for invalid password reset with phonenumber', () => {
            cy.visit('https://account.africanmanagers.org/ami_auth/login')
            cy.get('.forgot-password-text > .forgot-link').click()
            cy.get('#forgot-form_login').type('078373800')
            cy.wait(2000)
            cy.get(':nth-child(2) > .mb-0').click()
            cy.get('.button').click()
            cy.get('.alert-warning').should('be.visible')
        })
    })