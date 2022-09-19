describe('should select box', function() {
    it('should load website with the select box', function() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        // selecting an item in a drop down menu

    })

    it('should select an option for the select box', function() {
        cy.get('#preferred-interface').select('Both')
            .should('have.value', 'Both')

            cy.get('#preferred-interface').select('JavaScript API')
            .should('have.value', 'JavaScript API')

    })
})