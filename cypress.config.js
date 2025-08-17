const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1200,
    viewportHeight: 720,
    watchForFileChanges: false,
    screenshotOnRunFailure: false,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('before:run', () => {
        require('cypress-intercept-http')(on)
      })
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })

      on('file:preprocessor', cucumber())
    },
    chromeWebSecurity: false,
    blockHosts: [
      '*.googlesyndication.com',
      '*.doubleclick.net',
      '*.google-analytics.com',
      '*.facebook.net'
    ]
  }
})