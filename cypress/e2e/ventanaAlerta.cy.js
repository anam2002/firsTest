describe('mi suite de ventanas emergentes', () => {
    it('Boton alert', () => {
         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         cy.get('#alertbtn').click()
         cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
         })
    })
   
    it('pop up de boton de Confirmacion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         cy.get('#confirmbtn').click()
         cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it.only('interactuando con tabs de navegacion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //Vamos a programar el quitar el href
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(4000)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

})