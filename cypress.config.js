const { defineConfig } = require('cypress')

require('dotenv').config()

module.exports = defineConfig({
    video: true,
    reporter: 'node_modules/cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'mochawesome',
        mochawesomeReporterOptions: {
            reportDir: 'results/mocha',
            overwrite: false,
            html: false,
            json: true,
            timestamp: 'mmddyyyy_HHMMss',
            showSkipped: true,
            charts: true,
            quite: true,
            embeddedScreenshots: true,
        },
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
            config.env = process.env
            return config
        },
        specPattern: 'specs/**/*.{js,jsx,ts,tsx}',
        baseUrl: process.env.BaseURL,
        supportFile: false
    }
})
