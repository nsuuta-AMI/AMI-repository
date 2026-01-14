const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4mdk1r',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

  },
     viewport:

     {
      viewportHeight: 1080,
      viewportWidth: 1660,
    },

    pageLoadTimeout: 180000,
  
    
    
});


