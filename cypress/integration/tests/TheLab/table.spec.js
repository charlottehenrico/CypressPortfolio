/// <reference types ="cypress" />

import TablesLab from "../../pageObjects/tablesLab";
import BasePageLab from "../../pageObjects/basePageTheLab";

const tablesLab = new TablesLab();
const basePageLab = new BasePageLab();

describe('GoToTable', ()=>{})
beforeEach(()=>{
    basePageLab.navigateToLabUrlSelectMenu()
    tablesLab.navigateToTablesLab()
    
})

it ('shouldclearAllFiltersAndEmptyTable', () => {
    tablesLab.clearfilters()
    cy.get('table#animalTable').getTable().should(tableData => {
        expect(tableData).to.be.empty
      })
})

it ('shouldclearOneFilterAndCheckTableCorresponds', ()=>{
    const animal = "lion";
    tablesLab.clearOneFilter(animal)
    tablesLab.checkTableContainsNoUnselectedAnimals(animal)
})