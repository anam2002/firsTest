describe("Test Suite Tipos de Assert", () => {
     it('Coincide el atributo con el valor del atributo', () => {
         cy.visit("https://demoqa.com/automation-practice-form")
         cy.get("#firstName").should('be.visible').should('have.attr', 'placeholder', 'First Name')
     })

     it('expect concat', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get('#firstName').then((object) => {
           expect(object).to.be.visible
           expect(object).to.have.attr('placeholder', 'First Name')
        })
     })
})