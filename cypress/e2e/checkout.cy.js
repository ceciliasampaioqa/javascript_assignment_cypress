describe('Checkout Process', () => {
  beforeEach(() => {
    cy.signupAndLogout()
  })
  it('should complete the checkout process successfully', () => {
    const email = Cypress.env('userEmail')
    const password = Cypress.env('userPassword')

    cy.login(email, password)

    cy.addProductToCart()

    cy.contains('View Cart').click()

    cy.checkoutProduct()

    cy.contains('[data-qa="order-placed"]', 'Order Placed!').should('be.visible')
  })
})
