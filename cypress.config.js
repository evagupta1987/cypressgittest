const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  projectId: "32um25",
  env:{
    "email":"cypress3@test.com",
    "password":"cypress"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true
  },
});
