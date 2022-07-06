/// <reference types="cypress" />


class Register{

    static loadHomePage(){
        cy.visit("http://opencart.abstracta.us/")
        cy.url().should('include','opencart')  //RestAPI assertion
    }
    
    static clickMyAccount(){
        cy.get('a[title="My Account"]').click() 
    }
    
    static getRegisterPage(){
        cy.get('li').contains('Register').click()
         cy.url().should('include','account/register')  //RestAPI assertion
    }
    
    static completeRegistrationProcess(){
        cy.get('[id="input-firstname"]').type('eva')
        cy.get('[id="input-lastname"]').type('gupta')
        cy.get('[id="input-email"]').type(Cypress.env("email"))
        cy.get('[id="input-telephone"]').type('9087654321')
        cy.get('[id="input-password"]').type(Cypress.env("password"),{ log: false }) 
        cy.get('[id="input-confirm"]').type(Cypress.env("password"),{ log: false })  
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click() 
    }
    
    static assertRegistration(){
    cy.url().should('include', 'http://opencart.abstracta.us/index.php?route=account/success')   //RestAPI assertion
    }

    static clickLogout()
    {
        Register.clickMyAccount()
        cy.get('li').contains('Logout').click()
        cy.url().should('include','account/logout')   //RestAPI assertion
    }
    
}
    
    export default Register;