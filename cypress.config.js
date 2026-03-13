const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tdr5pj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

  },
     viewport:

     {
      viewportHeight: 800,
      viewportWidth: 880,
    },

    pageLoadTimeout: 180000,
  
    
    
});