module.exports = {
  allowCypressEnv: false,

  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false
  },
};
