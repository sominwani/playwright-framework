This is a test framework for playwright demo.

## Github Actions

Please check the .github folder for some sample github actions created for this demo

## Getting Started

To set up the framework

```bash
npm install 
```
## Execute tests on different browsers

Set the browser in.env file. Available options are chrome, firefox, webkit

## Execute test

To execute tests from command line 

```bash
npx cucumber-js; node ./htmlReportGenerator.js 
```

Or execute package.json script

```bash
npm run test:e2e
```