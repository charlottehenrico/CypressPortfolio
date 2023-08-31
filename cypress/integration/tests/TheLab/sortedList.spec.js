/// <reference types ="cypress" />
const basePageLab = new BasePageLab();
const sortedList= new SortedList();

import BasePageLab from "../../pageObjects/basePageTheLab";
import SortedList from "../../pageObjects/sortedList";

describe('SelectAndDoToDoList', ()=>{})
beforeEach(()=>{
    basePageLab.navigateToLabUrlSelectMenu()
    sortedList.navigateToSortedList()
    cy.url().should('eq', 'http://thelab.boozang.com/sortedList') // => true
})

it ('should add to do to the list', () => {


    const itemOne = "Learn Cypress";
    const itemTwo = "Create Cypress portfolio repo";
    const itemThree = "Include visual testing";
    //Add a clear list api method here
    sortedList.addToDoToList(itemOne)
    sortedList.addToDoToList(itemTwo)
    sortedList.addToDoToList(itemThree)
})

it('Checks texts of list items', () => {
    const itemOne = "Learn Cypress";
    const itemTwo = "Create Cypress portfolio repo";
    const itemThree = "Include visual testing";
    cy
      .get('.collection_item').then((items) => {
        expect(items[0]).to.contain.text(itemOne)
        expect(items[1]).to.contain.text(itemTwo)
        expect(items[2]).to.contain.text(itemThree)
      })
  });