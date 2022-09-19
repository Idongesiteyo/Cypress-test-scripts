describe('customer command', function () {
    it('should login to application using custom cypress command', function () {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.Login('username','password')
    })

})