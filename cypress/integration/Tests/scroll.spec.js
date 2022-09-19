describe('should select box', function() {
    it('should load website with the select box', function() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(5000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(5000)
        cy.get('header').scrollIntoView()
    }) 

})   