const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  projectId: 'tdr5pj',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        // Number of finished files in cypress/downloads (used by the Resources download test)
        countDownloads() {
          const dir = config.downloadsFolder;
          if (!fs.existsSync(dir)) return 0;
          return fs.readdirSync(dir).filter((f) => !f.endsWith('.crdownload')).length;
        },
      });
      return config;
    },

  },
     viewport:

     {
      viewportHeight: 800,
      viewportWidth: 880,
    },

    pageLoadTimeout: 180000,

    // Block Hotjar so its "How likely are you to recommend..." survey popup
    // never loads and covers buttons during tests.
    blockHosts: ['*.hotjar.com', '*.hotjar.io'],


    
});

