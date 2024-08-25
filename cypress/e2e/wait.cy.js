describe('esperas en cypress', () => {
    it('wait', () => {
    cy.visit('https://www.automationtesting.co.uk/loader.html')
    cy.wait(8000)
    cy.get('#loaderBtn').click()
    cy.get('#p_wording').should('contain', 'And you have clicked the button!')
    })

    it.only('wait por cada elemento', () => {
        cy.visit('https://www.automationtesting.co.uk/loader.html')
        cy.get('#loaderBtn', {timeout:4000}).click()
    })



    })