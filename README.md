# JavaScript Assignment Cypress

> This project was developed as part of a technical assessment for **Telit Cinterion**.

Automates end-to-end testing of the [Automation Exercise](https://www.automationexercise.com) web application, using [Cypress](https://www.cypress.io/) for test execution, [Cypress Split](https://github.com/bahmutov/cypress-split) for parallelization, and [Mochawesome](https://github.com/adamgruber/mochawesome) for detailed reporting.

---

![Node.js](https://img.shields.io/badge/node-22.x-brightgreen)
![Cypress](https://img.shields.io/badge/cypress-14.x-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Features Tested

- User **Signup** with dynamic data (**Faker**)
- User **Login** (valid and invalid scenarios)
- **Product Search**
- **Add Product to Cart**
- **Checkout** with payment and order confirmation
- **Parallel test execution** across **Chrome**, **Firefox**, and **Edge**
- Detailed HTML **reports (Mochawesome)** per browser
- Robust CI/CD pipeline with artifact upload and automatic summary

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

---

## 🚀 How to Run the Tests

### 1. Run all browsers in parallel (Local)

```bash
npm run test:parallel
```

- Cleans previous reports
- Runs tests in **Chrome**, **Firefox**, and **Edge** simultaneously
- Generates JSON reports per browser

### 2. Run a specific browser (Local - You can run simultaneously)

```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

### 3. Cypress interactive mode

```bash
npm run cypress:open
```

---

## 🏗️ Test Structure

- **Custom commands:**  
  `cypress/support/commands.js`

  - Dynamic signup and logout
  - Parameterized login
  - Product search
  - Add to cart
  - Complete checkout

- **Tests:**  
  `cypress/e2e/`
  - `addToCart.cy.js`: Add to cart
  - `checkout.cy.js`: Complete purchase flow
  - `login.cy.js`: Login (valid and invalid)
  - `search.cy.js`: Product search

---

## 📊 Test Reports (Mochawesome)

- Test runs generate `.json` files per browser in:

  ```
  cypress/reports/mochawesome/.jsons/
  ```

  Examples:

  - `chrome-login-report.json`
  - `firefox-search-report.json`
  - `edge-addToCart-report.json`

- After merging, HTML reports are generated in:
  ```
  cypress/reports/mochawesome/report-chrome.html
  cypress/reports/mochawesome/report-firefox.html
  cypress/reports/mochawesome/report-edge.html
  ```

### Generate HTML reports manually

```bash
npm run generate:all:reports
```

Or individually:

```bash
npm run merge:chrome && npm run report:chrome
npm run merge:firefox && npm run report:firefox
npm run merge:edge && npm run report:edge
```

Open the `.html` files in your browser to view the results.

---

## ⚙️ CI/CD with GitHub Actions

The pipeline (`.github/workflows/cypress-tests.yml`) automatically:

1. **Runs tests in parallel** on Chrome, Firefox, and Edge
2. **Generates and uploads artifacts** (JSONs and HTMLs)
3. **Creates an automatic summary** in GitHub Actions
4. **Easy download of reports** via artifacts

### How to access reports in CI

1. Go to the **Actions** tab on GitHub
2. Click on the completed workflow
3. Download the artifacts (HTML and JSON reports)
4. Open the HTML files for detailed analysis

---

## 🛠️ Technical Highlights

- **True parallelization** of tests per browser
- **Custom commands** for reusability and test clarity
- **Dynamic data generation** to avoid duplication and ensure robustness
- **Detailed reports** separated by browser
- **Complete CI/CD pipeline**, ready for enterprise environments

---

## 🤝 Contributing

Feel free to open issues or pull requests!

---

## 📄 License

This project is licensed under the MIT license.
