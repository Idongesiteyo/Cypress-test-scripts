describe('write / Read data to JSON / Text file', function() {
    it('should write data into JSON file', function() {
        cy.writeFile('log.json', {Name: 'Idongesit Eyo', Age: 33, Country: 'Nigeria', State: 'Akwa Ibom'})
    })

    it('should write data into text file', function() {
        cy.writeFile('log.txt', {Name: 'Idongesit Eyo', Age: 33, Country: 'Nigeria', State: 'Akwa Ibom'})
    })

    it('should read and verify data from JSON file', function() {
        cy.readFile('log.json')
            .its('Age').should('eq', 33)
    })

    it('should read and verify data from text file', function() {
        cy.readFile('log.txt')
            .should('contain',"Age", "Name", "State")
    })

    
    it('should read and verify browser document content', function() {
        cy.visit('https://www.example.com')
        cy.wait(4000)
        cy.document()
            .its('contentType')
            .should('eq','text/html')

        cy.document()
            .should('have.property', 'charset')
            .and('eq','UTF-8')
    })
})