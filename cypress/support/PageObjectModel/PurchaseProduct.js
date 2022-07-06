/// <reference types="cypress" />


class PurchaseProduct{

    static searchProduct()
    {
      
      cy.get('input[placeholder="Search"]').type('Canon')
      cy.get('button[class="btn btn-default btn-lg"]').click()
      cy.wait(3000)
    }
    
    static selectProduct(){
        cy.contains('Contact Us').scrollIntoView()
        cy.get(".img-responsive").click()
        cy.url().should('include','Canon')  ///assertion based on the name of the product selected

    }
    static assertCart(){
        cy.get('select').select("15")
        cy.get('[id="button-cart"]').click()
        //assertion : the page should display success 
        cy.get('.alert.alert-success.alert-dismissible').contains("Success")  
    }

static completeCheckoutProcess(){
  cy.get("div[class='alert alert-success alert-dismissible'] a:nth-child(2)").click()
  cy.scrollTo('bottom')
  cy.get("a[class='btn btn-primary']").click()
  cy.get('[id="input-payment-firstname"]').type('eva')
  cy.get('[id="input-payment-lastname"]').type('gupta')
  cy.get('[id="input-payment-address-1"]').type('whitby')
  cy.get('[id="input-payment-city"]').type('whitby')
  cy.get('[id="input-payment-postcode"]').type('L1R1Z2')
  cy.get('#input-payment-country').select("38")
  cy.get('#input-payment-zone').select("610")
  cy.get('#button-payment-address').click()
  cy.get('#button-shipping-address').click()
  cy.get('#button-shipping-method').click()
  
  cy.get('[type="checkbox"]').check()
  cy.get('#button-payment-method').click()
  cy.get('#button-confirm').click()

  cy.url().should('include','checkout/success')  ///RestAPI assertion
  cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3) > a:nth-child(2)") . click()
   cy.url().should('include','account/order')  //retspi assertion
    }
    }
    
    export default PurchaseProduct;