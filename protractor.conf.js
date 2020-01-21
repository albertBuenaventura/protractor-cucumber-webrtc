'use strict'
const path = require ('path')
let rootDir = path.resolve (__dirname, '../../')
module.exports.config = {
  specs: 'features/*.feature',
  seleniumServerJar: rootDir + '/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar',
  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--disable-gpu',
        '--window-size=800,600',
        '--allow-insecure-localhost',
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream'
      ]
    }
  }
  ],
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  frameworkPath: require.resolve ('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'steps/*.steps.js',
    format: 'json:./test/e2e/.tmp/results.json',
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
  }]
}
