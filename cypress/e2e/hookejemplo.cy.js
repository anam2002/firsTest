beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})

describe('mi suite de ventanas emergentes', () => {
    it('Boton alert', () => {
         cy.get('#alertbtn').click()
         cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
         })
    })
   
    it('pop up de boton de Confirmacion', () => {
         cy.get('#confirmbtn').click()
         cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('interactuando con tabs de navegacion', () => {
               
        //Vamos a programar el quitar el href
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(4000)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

})