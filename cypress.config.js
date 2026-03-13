<<<<<<< HEAD
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
=======
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
>>>>>>> 5e0524dd1873b89365e7de8efee8b5923355cb3c
