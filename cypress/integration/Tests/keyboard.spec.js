describe('Keyboard press simulation', function () {
    it('should submit search box by pressing enter', function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just some text {enter}')

    })

})