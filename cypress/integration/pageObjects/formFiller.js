/// <reference types ="cypress" />

export default class FormFiller{
    
    navigateToFormFiller(){
        cy.contains("Form Fill").click()
    }

    addFirstName(name){
        cy.get('input[name="firstname"]').clear().type(name)
        cy.wait(500)
    }

    addLastName(lastname){
        cy.get('input[name="lastname"]').clear().type(lastname)
        cy.wait(500)
    }

    addEmail(email){
        cy.get('input[name="email"]').clear().type(email)
        cy.wait(500)
    }

    addPassword(password){
        cy.get('input[name="password"]').clear().type(password)
        cy.wait(500)
    }

    clickSaveToDb(){
        cy.get('.add').click()
        cy.wait(500)
    }

    clickCheckDBUsers(){
        cy.get('.orange').click()
        cy.wait(1500)
        //run through list and match name and email with added one
        //cy.get('Delete').click({multiple:true})
    
    }
    checkUserNameMatch(name){
        cy.get('tr:nth-of-type(1) > td:nth-of-type(1)').contains(name)
    }

}