export const config = {
    specs: [
        './mocha.test.js'
    ],
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec',
        [
            'allure',
            {
                disableWebdriverScreenshotsReporting: false,
                disableWebdriverStepsReporting: true,
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 15000
    },
}
