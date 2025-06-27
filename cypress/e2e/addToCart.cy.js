describe('Add Product to Cart', () => {
  it('should add a product to cart and verify cart updates', () => {
    cy.addProductToCart()

    cy.get('.modal-content')
      .should('contain.text', 'Added!')
      .and('contain.text', 'Your product has been added to cart.')

    cy.get('.modal-content').contains('View Cart').click()
    cy.get('[class="cart_descriptions"]').should('be.exist')
  })
})
