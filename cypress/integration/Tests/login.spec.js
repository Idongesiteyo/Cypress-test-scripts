describe('Working with inputs', function () {
    it('overide the current time',function () {
        const date = new Date(2022,5,20).getTime() // returns the current time
        cy.clock(date)
        cy.log(date)
    })


    it('should login page',function () {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.title().should('include','Zero - Log in')

    })


    it('should fill username',function () {
        cy.get('#user_login').clear()
            .type('some invalid name')
            // cy.get('#user_login').as('username')
            // cy.get('@username') variables and alias

    })

    it('should fill password',function () {
        cy.get('#user_password').clear()
            .type('some invalid password')

    }) 

    it('should check the checkbox',function () {
        cy.get('#user_remember_me')
            .should('not.be.checked')
            .click()
        cy.wait(5000)

    })

    it('should submit form',function () {
        cy.contains('Sign in').click()

    })

    it('should display error message',function () {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain','Login and/or password are wrong.') //chaining assertions

    })




})