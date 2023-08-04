/// <reference types ="cypress" />
const basePage = new BasePage();

import BasePage from "../pageObjects/basepage";

describe('loginTricentisObstacleCourse', ()=>{})
beforeEach(()=>{
    basePage.navigateToTricentisUrl()
})

it ('should login with valid credentials', () => {
    basePage.loginWithValidCredentials()
})