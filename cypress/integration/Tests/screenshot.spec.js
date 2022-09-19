describe('Screenshots', function() {
    it('full page screenshots', function() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})
    })

    it('single element screenshot', function() {
        
        cy.get('header').screenshot()
        cy.get('#populate').screenshot()
        
        
    })

})