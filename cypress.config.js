const { defineConfig } = require("cypress");

module.exports = defineConfig({
  plugins: ["cypress-mochawesome-reporter"],

  reporter: "cypress-multi-reporters",

  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quiet: true,
      overwrite: true,
      html: true,
      json: true,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
