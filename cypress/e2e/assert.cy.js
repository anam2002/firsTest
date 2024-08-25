describe("Test Suite Tipos de Assert", () => {
  it('doble click', () => {
    cy.visit('https://demoqa.com/buttons')
    cy.get('button[id="doubleClickBtn"]').dblclick()
    cy.get('#doubleClickMessage').should('contain', "You have done a double click")
  })

  it('Right click', () => {
    cy.visit('https://demoqa.com/buttons')
    cy.get('button[id="rightClickBtn"]').rightclick()
    cy.get('#rightClickMessage').should('contain', 'You have done a right click')
  })

  it('Dar click solo al 3er boton', () => {
    cy.visit('https://demoqa.com/buttons')
    cy.get('button').eq(3).click()
    cy.get("#dynamicClickMessage").should("be.visible").and('contain', "You have done a dynamic")
    cy.wait(2000)
  })


     it('Coincide el atributo con el valor del atributo', () => {
         cy.visit("https://demoqa.com/automation-practice-form")
         cy.get("#firstName").should('have.attr', 'placeholder', 'First Name')
     })

     it('assert concatenado', () => {
       cy.visit("https://demoqa.com/automation-practice-form")
       cy.get('#lastName').should('be.visible').should('have.attr', 'placeholder', 'Last Name')
     })

     it('o tambien se puede concatenar usando expect', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get('#lastName').then((variable) => {
           expect(variable).to.be.visible
           expect(variable).to.have.attr('placeholder', 'Last Name')
        })
      })

      it.only('asset Concat', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get('#firstName').then((variable2) => {
           assert.equal(variable2.attr('placeholder'), 'First Name')

          })
        })
     
})