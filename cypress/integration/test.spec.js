
context("Tribruxo", () => {
    it('Renders the home page', () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)

        
        cy.contains('TORNEIO TRIBRUXO')

        cy.get('button').contains('ESCOLHA OS ALUNOS')

        cy.get('span').contains('gryffindor')
        cy.get('span').contains('hufflepuff')

        cy.get('span').contains('ravenclaw')

        cy.get('span').contains('slytherin')

        cy.get('button').should('have.class', 'modalButton').click({multiple: true, force: true})

        cy.get('div').should('have.class', 'styles__Modal-sc-1tstb6j-9 aiwjb')
        cy.get('button').contains('X').click()        

        
        cy.intercept("get", "/", {
            statusCode: 200,
        });
        
        cy.get('button').contains('ESCOLHA OS ALUNOS').click()
        cy.get('button').should('have.class', 'styles__Button-sc-1tstb6j-2 faohzy').click({multiple: true, force: true})

        cy.get('div').should('have.class', 'styles__MainContainer-sc-1tstb6j-3 kmGhcE')
        cy.get('div').should('have.class', 'styles__Container-sc-1tstb6j-6 iLMTDy')

        cy.get('button').should('have.class', 'styles__Button-sc-1tstb6j-2 faohzy').click()
        
        cy.get('a').contains('back to home').click()

    })
})