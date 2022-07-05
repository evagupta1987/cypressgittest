const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "32um25",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});
