/// <reference types ="cypress" />

export default class SortedList{
    
    navigateToSortedList(){
        cy.contains("Sorted list").click()
    }

    addToDoToList(text){
         //Get list count here as n and then use n to repeat the function below
        cy.get('ul.collection').then((collection)=>{
        if (collection.find('.delete_icon').length > 0){
            cy.get('.delete_icon').click({ multiple: true });
        }}
    )
        cy.get('input').clear().type(text)
        cy.wait(500)
        cy.contains("Add todo").click()
        cy.wait(2000)

    }}
