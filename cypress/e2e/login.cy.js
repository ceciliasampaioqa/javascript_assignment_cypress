describe('User Login - Valid and Invalid Credentials', () => {
  before(() => {
    cy.signupAndLogout()
  })
  it('should login successfully with valid credentials', () => {
    const email = Cypress.env('userEmail')
    const password = Cypress.env('userPassword')

    cy.login(email, password)

    cy.contains('a', 'Logged in as').should('contain.text', Cypress.env('userName'))
    cy.contains('a', 'Logout').should('be.visible')
  })
  it('should display error with invalid credentials', () => {
    cy.login('wrong@email.com', 'incorrectPassword')

    cy.get('.login-form p').should('contain.text', 'Your email or password is incorrect!')
  })
})
