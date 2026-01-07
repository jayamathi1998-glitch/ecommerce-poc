module.exports = {
  default: {
    require: [
      'step-definitions/*.js',
      'support/hooks.js'
    ],
    format: ['progress', 'html:reports/cucumber-reporter.html'],
    timeout: 120000
  }
};