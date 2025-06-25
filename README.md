# JavaScript Assignment Cypress

> This project was developed as part of a technical assessment for **Telit Cinterion**.

It automates end-to-end testing of the web application [Automation Exercise](https://www.automationexercise.com), using [Cypress](https://www.cypress.io/) for test execution, [Cypress Split](https://github.com/bahmutov/cypress-split) for parallelization, and [Mochawesome](https://github.com/adamgruber/mochawesome) for detailed reporting.

---

![Node.js](https://img.shields.io/badge/node-22.x-brightgreen)
![Cypress](https://img.shields.io/badge/cypress-14.x-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Features Tested

- User **Signup** with dynamic data **(Faker)**
- User **Login** (valid and invalid scenarios)
- **Product Search**
- **Add Product to Cart**
- **Checkout** with payment and order confirmation
- **Parallel test execution across different browsers (Chrome, Firefox, Edge)**
- Individual HTML **reports (Mochawesome)** per browser

---

## 💻 Tech Stack

- [Cypress](https://www.cypress.io/) — End-to-End Testing Framework
- [Faker](https://fakerjs.dev/) — Dynamic Data Generation
- [Mochawesome](https://github.com/adamgruber/mochawesome) — Test Report Generator
- [Cypress Split](https://github.com/bahmutov/cypress-split) — Parallel Test Execution
- JavaScript (ES6+)
- Node.js

---

## 🔧 Prerequisites

- Node.js >= 22.x
- npm >= 10.x

---

## 📦 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/ceciliasampaioqa/javascript_assignment_cypress.git
cd javascript_assignment_cypress
npm install
```

## 🚀 How to run the tests

### Option 1: Run tests in all 3 browsers in parallel

```bash
npm run test:parallel
```

This will:

- Clean previous reports for each browser
- Run tests in parallel on **Chrome**, **Firefox**, and **Edge** using concurrently
- Outputs JSON reports per browser.

### Option 2: Run a single browser manually(You can run simultaneously)

```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

### Run Cypress in interactive mode

```bash
npm run cypress:open
```

---

## 📊 Test Reports (Mochawesome)

Each browser run stores .json results in its specific folder:

```bash
cypress/reports/mochawesome/
  ├── chrome/.jsons/*.json
  ├── firefox/.jsons/*.json
  └── edge/.jsons/*.json
```

## Steps to generate HTML reports per browser:

```bash
npm run merge:chrome && npm run report:chrome
npm run merge:firefox && npm run report:firefox
npm run merge:edge && npm run report:edge

```

Or run everything at once:

```
npm run generate:all:reports
```

### Resulting Reports:

Each report will be generated with a proper title and saved in:

- `cypress/reports/mochawesome/chrome/report-chrome.html`
- `cypress/reports/mochawesome/firefox/report-firefox.html`
- `cypress/reports/mochawesome/edge/report-edge.html`

Open these files in your browser to view the results for each browser separately.

## 🛠️ Test Structure

- **Custom commands:**  
  Location: `cypress/support/commands.js`  
  Commands for signup, login, search, add to cart, and checkout.

- **Tests:**  
  Location: `cypress/e2e/`
  - `addToCart.cy.js`: Tests adding a product to the cart.
  - `checkout.cy.js`: Tests the complete purchase flow.
  - `login.cy.js`: Tests login with valid and invalid credentials.
  - `search.cy.js`: Tests product search.

---

## ⚙️ Configuration

- **BaseUrl:**  
  The tests run against [https://www.automationexercise.com](https://www.automationexercise.com).

- **Parallelism:**  
  Achieved via [cypress-split](https://github.com/bahmutov/cypress-split).

- **Reports:**  
  Generated with [Mochawesome](https://github.com/adamgruber/mochawesome).

---

## 🤝 Contributing

Feel free to open issues or pull requests!

---

## 📄 License

This project is licensed under the MIT license.
