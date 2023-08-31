/// <reference types ="cypress" />

const baseurlLab = Cypress.env('baseUrlLab');

export default class BasePageLab{
    
    navigateToLabUrlSelectMenu(){
        cy.visit(baseurlLab)
        cy.get('.veggie_burger').click()
        cy.wait(1000)
    }
}
