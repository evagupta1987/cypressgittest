/// <reference types="cypress" />


class Login{
     
    static getLoginPage(){
        cy.get('li').contains('Login').click()
         cy.url().should('include','account/login')  //assertion based on restapi
    }
    
    static completeLoginProcess(){
    cy.get('[id="input-email"]').type(Cypress.env("email"))
    cy.get('[id="input-password"]').type(Cypress.env("password"),{ log: false })
    cy.get('[type="submit"]').click()
    }
    
    static assertLogin(){
    cy.url().should('include', 'account/account')  //Restapi assertion
    }
    }
    
    export default Login;