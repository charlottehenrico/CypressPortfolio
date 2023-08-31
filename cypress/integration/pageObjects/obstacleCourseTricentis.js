/// <reference types ="cypress" />

export default class ObstacleCourse{
    
    selectObstacleList(){
        // Open the dropdown menu by clicking the toggle button
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        // Select the desired option by clicking on it
        cy.contains('.dropdown-toggle li a', 'Obstacle Course').click()
    }

    selectObstacleEasy(obstacleNumber){
        cy.get('#search').type("Easy" + "{enter}")
        cy.contains('. table table-hover tr td a', obstacleNumber).click()
    }
}