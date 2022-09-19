describe('Browser Actions', function() {
    it('should load correct url', function() {
        cy.visit('http://example.com',{timeout: 5000})
    
    })
    
    it('should check correct url', function() {
        cy.url().should('include', 'example.com')
    
    })

    it('should wait for 3 seconds', function() {
        cy.wait(3000) // impliment wait for 3 seconds
    })

    it('should pause and resume', function() {
        cy.pause() // pause the test
    })

    it('should check for correct element', function(){
        cy.get('h1').should('be.visible') //element is visible

    })

    
})

