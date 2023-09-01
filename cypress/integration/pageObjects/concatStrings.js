// <reference types ="cypress" />

export default class ConcatStrings{

    navigateToConcatenateStringsLab(){
        cy.get("Concat strings").click()
        cy.wait(1000)
    }

    clickGenerateStringsButton(){
        cy.get("Generate strings").click()
        cy.wait(500)
    }
}