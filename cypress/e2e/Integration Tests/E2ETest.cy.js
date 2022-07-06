
/// <reference types="cypress" />

import Register from '../../support/PageObjectModel/Register'
import Login from '../../support/PageObjectModel/Login'
import PurchaseProduct from '../../support/PageObjectModel/PurchaseProduct'

describe('E2E test suite', () => {
 
// 1. End to End Registration Test 
  it('test signup e2e', ()=>{
  Register.loadHomePage()
  Register.clickMyAccount()
  Register.getRegisterPage()
  Register.completeRegistrationProcess()
  Register.assertRegistration()
  Register.clickLogout()
})
//2. End to End Login Test
it('test login e2e', ()=>{
  Register.loadHomePage()
  Register.clickMyAccount()
  Login.getLoginPage()
  Login.completeLoginProcess()
  Login.assertLogin()
  Register.clickLogout()
})

// E2E purchase , user is able to search product , add it to cart , complete checkout process and see it in order history
it('test checkout e2e', ()=>{
  Register.loadHomePage()
  Register.clickMyAccount()
  Login.getLoginPage()
  Login.completeLoginProcess()
  Login.assertLogin()
  PurchaseProduct.searchProduct()
  PurchaseProduct.selectProduct()
  PurchaseProduct.assertCart()
  PurchaseProduct.completeCheckoutProcess()
  Register.clickLogout()

})

})