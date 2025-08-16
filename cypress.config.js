const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1200,
    viewportHeight: 720,
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
    defaultCommandTimeout: 10000,
  }
});
