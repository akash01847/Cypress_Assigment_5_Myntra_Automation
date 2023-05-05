const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
  },
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        defaultCommandTimeout: 15000
      }
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
