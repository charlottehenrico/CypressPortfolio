/// <reference types ="cypress" />
const basePage = new BasePage();

import BasePage from "../../pageObjects/basepageTricentis";

describe('loginTricentisObstacleCourse', ()=>{})
beforeEach(()=>{
    basePage.navigateToTricentisUrl()
})

it ('should login with valid credentials', () => {
    basePage.loginWithValidCredentials()
})