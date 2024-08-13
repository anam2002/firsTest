describe('Suite de pruebas de Orange HRM', () => {
  it('login exitoso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[type="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
    cy.get('input[placeholder="Search"]').type("My info")
    cy.get('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').click()
    cy.get('input[name="firstName"]').clear()
    cy.get('input[name="firstName"]').type("Silvia")
    cy.get('input[name="middleName"]').clear()
    cy.get('input[name="middleName"]').type("Araceli")
    cy.get('input[name="lastName"]').clear()
    cy.get('input[name="lastName"]').type("Rodriguez")
  })

  it('doble click', () => {
    cy.visit('https://demoqa.com/buttons')
    cy.get('button[id="doubleClickBtn"]').dblclick()
  })

  it.only('Right click', () => {
    cy.visit('https://demoqa.com/buttons')
    cy.get('button[id="rightClickBtn"]').rightclick()
  })

  it('Dar click solo al 3er boton', () => {
    cy. visit('https://demoqa.com/buttons')
    cy.get('button').eq(3).click()
    cy.wait(2000)
  })
})