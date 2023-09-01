/// <reference types ="cypress" />

export default class TablesLab{

    navigateToTablesLab(){
        cy.get('li span:contains(Tables)').click()
        cy.wait(1000)
    }

    clearfilters(){
        cy.get('input[name="lion"]').click()
        cy.wait(500)
        cy.get('input[name="elephant"]').click()
        cy.wait(500)
        cy.get('input[name="zebra"]').click()
        cy.wait(500)
    }

    clearOneFilter(animal){
        cy.get('input[name='+ animal+ ']').click()
    }

    checkTableContainsNoUnselectedAnimals(animal){
        // cy.get('tbody tr').eq(0)              
        // .find('td').eq(2)  
        // .should('not.have.value', animal)
        const expected = [{
            "Species": animal 
          }]
          cy.get('table').getTable().should(tableData => {
            expected.forEach(item => expect(tableData).to.not.equal(animal))
          })
    }
}