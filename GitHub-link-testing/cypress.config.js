const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://github.com/Mohankumar-21/ecommerce-frontend/', 
    specPattern: 'cypress/e2e/**/*.cy.js',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/report/mochawesome-report',
      overwrite: true,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss',
    },
    setupNodeEvents(on, config) {
    
      return require('./cypress/plugins/index.js')(on, config);
    }
  },
});
