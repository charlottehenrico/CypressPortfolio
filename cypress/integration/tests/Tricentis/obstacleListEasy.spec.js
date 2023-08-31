/// <reference types ="cypress" />
const basePage = new BasePage();
const obstacleCourse = new ObstacleCourse();

import BasePage from "../../pageObjects/basepageTricentis";
import ObstacleCourse from "../../pageObjects/obstacleCourseTricentis";

describe('SelectAndDoEasyObstacleCourse', ()=>{})
beforeEach(()=>{
    basePage.navigateToTricentisUrl()
    basePage.loginWithValidCredentials()
    cy.waitFor()
})

it ('should select the correct Easy obstacle', () => {
    const obstaclenumber = "33678";
    obstacleCourse.selectObstacleList()
    obstacleCourse.selectObstacleEasy(obstaclenumber)
    
})