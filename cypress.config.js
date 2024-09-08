const { defineConfig } = require('cypress')
const addContext = require('mochawesome/addContext');

require('dotenv').config()

module.exports = defineConfig({
    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'results/mocha',
        overwrite: false,
        html: false,
        json: true,
        timestamp: 'mmddyyyy_HHMMss',
        showSkipped: true,
        charts: true,
        quite: true,
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    failOnStatusCode: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'results/mochareports/assets/screenshots',
    videosFolder: 'results/mochareports/assets/videos',
    watchForFileChanges: true,
       retries: {
        runMode: 1,
        openMode: 0,
    },
    e2e: {
        setupNodeEvents(on, config) {
            // Setup mochawesome reports plugin
            require('cypress-mochawesome-reporter/plugin')(on);

            // Set cypress config values
            config.env = process.env
            return config
        },
        specPattern: 'specs/**/*.{js,jsx,ts,tsx}',
        baseUrl: process.env.BaseURL,
        supportFile: 'utils/support/index.js'
    }
})
