const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/',
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here
    },
  },
});
