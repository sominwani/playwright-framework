const config = {
    paths: ['tests/features/**/*.feature'],
    require: ['tests/step_definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'summary',
      'progress-bar',
      'json:tests/reports/cucumber_report.json',
    ],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 120000,
    setDefaultTimeout: 120000
  };

module.exports = {
   default: config
 }