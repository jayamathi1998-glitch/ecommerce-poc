module.exports = {
  default: {
    require: [
      'step-definitions/*.js',
      'support/hooks.js'
    ],
    format: ['progress'],
    timeout: 120000
  }
};