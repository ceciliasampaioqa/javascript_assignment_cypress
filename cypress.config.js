const { defineConfig } = require('cypress')
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `reports/html/`,
    overwrite: true,
    html: false,
    json: true,
    reportFileName: '[name]-report'
  },
  retries: {
    // Adiciona retentativas caso um teste falhe
    runMode: 2,
    openMode: 2
  },
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    setupNodeEvents(on, config) {
      cypressSplit(on, config)

      // Customiza diretório de relatório com base na variável de ambiente REPORT_NAME
      const reportName = config.env.REPORT_NAME || 'default'
      config.reporterOptions = {
        reportDir: 'cypress/reports/mochawesome',
        overwrite: true,
        html: false,
        json: true,
        reportFilename: `${reportName}-[name]-report`
      }

      return config
    }
  }
})
