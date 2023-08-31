/// <reference types ="cypress" />

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');
const baseurl = Cypress.env('baseUrl');


// Use 'username' and 'password' variables in your test scenarios.

export default class BasePage{
    
    navigateToTricentisUrl(){
        cy.visit(baseurl)
        cy.get('.nav > :nth-child(3) > a').click()
    }

    loginWithValidCredentials(){
        cy.contains("Login")
        cy.get('#UserName').type(username)
        cy.get('#Password').type(password)
        cy.get('.btn').click()
    
    }
}

