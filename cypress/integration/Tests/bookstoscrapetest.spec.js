describe('Browser Actions',function() {

it('Should load book website', function() {
    cy.visit('https://books.toscrape.com/')
    cy.url().should('include','books.toscrape')
    cy.wait(3000)
    cy.log('Before Reload') // use this for checkpointing
    cy.wait(3000)
    cy.reload()
    cy.log('After Reload')
})

it('Should click on Travel', function() {
    cy.get('a')
        .contains('Travel')
        .click()
    cy.get('h1').contains('Travel')

})

it('Should display correct number of books', function() {
    cy.get('.product_pod')
        .its('length')
        .should('equal', 11)

})

it('should click on poetry', function() {
    cy.get('a')
        .contains('Poetry')
        .click()
})
    

it('should display correct number of books in the list', function() {
    cy.get('.product_pod')
        .its('length')
        .should('equal', 19)
})


it('should click on Olio and verify the price', function() {
    cy.get('a')
        .contains('Olio')
        .click()
    cy.get('.price_color')
        .contains('£23.88')
})


})