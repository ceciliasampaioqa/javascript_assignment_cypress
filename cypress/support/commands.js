import { faker } from '@faker-js/faker'

Cypress.Commands.add('signupAndLogout', () => {
  const name = faker.person.firstName()
  const email = faker.internet.email(name)
  const password = faker.internet.password({ length: 10 })

  Cypress.env('userEmail', email)
  Cypress.env('userPassword', password)
  Cypress.env('userName', name)

  cy.visit('/login')

  cy.get('[data-qa="signup-name"]').type(name)
  cy.get('[data-qa="signup-email"]').type(email)
  cy.get('[data-qa="signup-button"]').click()

  cy.get('[data-qa="password"]').type(password)
  cy.get('[data-qa="first_name"]').type(name)
  cy.get('[data-qa="last_name"]').type(faker.person.lastName())
  cy.get('[data-qa="address"]').type(faker.location.streetAddress())

  cy.get('[data-qa="country"]').select('United States')

  cy.get('[data-qa="state"]').type(faker.location.state())
  cy.get('[data-qa="city"]').type(faker.location.city())
  cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
  cy.get('[data-qa="mobile_number"]').type(faker.phone.number('###-###-####'))

  cy.get('[data-qa="create-account"]').click()

  cy.get('[data-qa="continue-button"]').click()
  cy.get('a').contains('Logout').click()
})

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')

  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)

  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('searchProduct', (productName) => {
  cy.visit('/products')

  cy.get('[id="search_product"]').type(productName)
  cy.get('button[id="submit_search"]').click()
})

Cypress.Commands.add('addProductToCart', () => {
  cy.visit('/products')

  cy.contains('Add to cart').first().click()
})

Cypress.Commands.add('checkoutProduct', () => {
  cy.get('[id="cart_items"] a').contains('Proceed To Checkout').click()

  cy.get('textarea[name="message"]').type('Please deliver between 9am to 5pm')

  cy.contains('a', 'Place Order').click()

  cy.get('[name="name_on_card"]').type(faker.person.fullName())
  cy.get('[name="card_number"]').type(faker.finance.creditCardNumber('####-####-####-####'))
  cy.get('[name="cvc"]').type(faker.finance.creditCardCVV())
  cy.get('[name="expiry_month"]').type(faker.date.future().getMonth() + 1) // mês entre 1 e 12
  cy.get('[name="expiry_year"]').type(faker.date.future().getFullYear())

  cy.contains('button', 'Pay and Confirm Order').click()
})
