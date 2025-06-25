describe('Product Search', () => {
  it('should display search results and view product details', () => {
    const productNames = ['Sleeveless Dress', 'Blue Top', 'Men Tshirt']
    const productName = productNames[Math.floor(Math.random() * productNames.length)]

    cy.searchProduct(productName)
    cy.contains(productName).should('be.visible')
    cy.contains('a', 'View Product').click()
    cy.contains('Add to cart').should('be.visible')
  })
})
