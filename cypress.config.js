const { defineConfig } = require("cypress");


module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "overwrite": false,
    "html": true,
    "json": true,
    "reportFilename": `Cinesad-Test-Report`,
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "cdn": true,
    "timestamp":true
  }, 
 
  e2e: {
    defaultCommandTimeout:15000,
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
        return config;
    }, 

    video:false,
      
  }, 
      
     
    
}); 


