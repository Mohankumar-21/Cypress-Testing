const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://main--ecommerce-web-21.netlify.app/', 
    specPattern: 'cypress/e2e/**/*.cy.js',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/report/mochawesome-report',
      overwrite: true,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
});
