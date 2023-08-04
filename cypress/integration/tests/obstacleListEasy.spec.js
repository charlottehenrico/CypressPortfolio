/// <reference types ="cypress" />
const basePage = new BasePage();

import BasePage from "../pageObjects/basepage";
import ObstacleCourse from "../pageObjects/obstacleCourse";

describe('SelectAndDoEasyObstacleCourse', ()=>{})
beforeEach(()=>{
    basePage.navigateToTricentisUrl()
    basePage.loginWithValidCredentials()
    cy.waitFor()
})

it ('should select the correct Easy obstacle', () => {
    const obstaclenumber = "33678";
    ObstacleCourse.selectObstacleList()
    ObstacleCourse.selectObstacleEasy(obstaclenumber)
    
})