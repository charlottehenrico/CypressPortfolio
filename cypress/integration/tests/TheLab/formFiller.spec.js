/// <reference types ="cypress" />

import FormFiller from "../../pageObjects/formFiller";
import BasePageLab from "../../pageObjects/basePageTheLab";

const basePageLab = new BasePageLab();
const formFiller = new FormFiller();

describe('SelectAndcompleteForm', ()=>{})
beforeEach(()=>{
    basePageLab.navigateToLabUrlSelectMenu()
    formFiller.navigateToFormFiller()
    cy.url().should('eq', 'http://thelab.boozang.com/formFill') // => true
})

it ('should complete fields on the form', () => {
    const name = "John";
    const lastname = "Michaels";
    const email = name + lastname + "@gmail.com";
    const password = Cypress.env('passwordLabForm');
    formFiller.addFirstName(name)
    formFiller.addLastName(lastname)
    formFiller.addEmail(email)
    formFiller.addPassword(password)
    formFiller.clickSaveToDb()
    formFiller.clickCheckDBUsers()
    formFiller.checkUserNameMatch(name)
})
