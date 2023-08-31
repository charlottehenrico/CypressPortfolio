/// <reference types ="cypress" />

export default class YellowOrBlue{

    navigateToYellowOrBlue(){
        cy.contains("Yellow or Blue").click()
        cy.wait(1500)
    }

    clickGenerateColorButton(){
        cy.contains("Generate Color").click()
        cy.wait(1000)
    }

    checkColorGeneratedAndCLickMatching(){
        cy.get('.color').then(($body) =>{
            if($body.text().includes('yellow')){
                cy.get('.form_btn.yellow').click() 
            }
            else if($body.text().includes('blue')){
                cy.get('.blue.form_btn').click() 
            }
        })

    }

    checkColorGeneratedAndClickNotMatching(){
        cy.get('.color').then(($body) =>{
            if($body.text().includes('yellow')){
                cy.get('.blue.form_btn').click()
            }
            else if ($body.text().includes('blue')){
                cy.get('.form_btn.yellow').click()
            }
            cy.wait(500)
        })
    }
    }

