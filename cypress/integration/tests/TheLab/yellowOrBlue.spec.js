/// <reference types ="cypress" />

import YellowOrBlue from "../../pageObjects/yellowOrblueLab";
import BasePageLab from "../../pageObjects/basePageTheLab";

const basePageLab = new BasePageLab();
const yellowOrBlue = new YellowOrBlue();

describe('GenerateAndClickMatchingColor', ()=>{})
beforeEach(()=>{
    basePageLab.navigateToLabUrlSelectMenu()
    yellowOrBlue.navigateToYellowOrBlue()
})

it ('clickMatchingColorAndAssertSuccessMessage', () => {
    yellowOrBlue.clickGenerateColorButton()
    yellowOrBlue.checkColorGeneratedAndCLickMatching()
    cy.get('.success_message').should('have.text', 'Success!')
})

it ('clickNonMatchingColorAndAssertErrorMessage', () => {
    yellowOrBlue.clickGenerateColorButton()
    yellowOrBlue.checkColorGeneratedAndClickNotMatching()
    cy.get('.fail.success_message').should('have.text', 'Try again!')
})