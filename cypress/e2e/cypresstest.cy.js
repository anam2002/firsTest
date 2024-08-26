describe('click for position', () => {
    it('click en Canva', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get("#action-canvas").click("topLeft")
      cy.get("#action-canvas").click("top")
      cy.get("#action-canvas").click("topRight")
      cy.get("#action-canvas").click("left")
      cy.get("#action-canvas").click("right")
      cy.get("#action-canvas").click("bottom")
      cy.get("#action-canvas").click("bottomLeft")
      cy.get("#action-canvas").click("bottomRight")
      cy.get("#action-canvas").click("center")
      cy.get("#action-canvas").click(80,75)
      cy.get("#action-canvas").click(180,75)
      
      cy.get(".action-labels > span:nth-of-type(6)").click()    //este es para dar click en un boton especifico que en este caso es el bootn 6
      cy.get(".action-labels > .label").click({ multiple: true })  // y este es para dar click a los 6 botones

      cy.get(".opacity-cover").click()  // este es para dar click al bootn que esta opacado o que no se puede acceder
      
    })
})
