describe('Device test', function() {
    // How to test different devices
    it('720p', function() {
        cy.viewport(1280,720)
        cy.visit('http://example.com')
        cy.wait(3000)
    })

    it('1080p', function() {
        cy.viewport(1980,1080)
        cy.visit('http://example.com')
        cy.wait(3000)
    })

    it('iphone x', function() {
        cy.viewport("iphone-x")
        cy.visit('http://example.com')
        cy.wait(3000)
    })

    it('iPad mini', function() {
        cy.viewport('ipad-mini')
        cy.visit('http://example.com')
        cy.wait(3000)
    })

    it('Macbook 15', function() {
        cy.viewport('macbook-15')
        cy.visit('http://example.com')
        cy.wait(3000)
    })

    it('Samsung Galaxy s10', function() {
        cy.viewport('samsung-s10')
        cy.visit('http://example.com')
        cy.wait(3000)
    })



})