const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'rtxrdb',
  "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
/*     "reportPageTitle": "Legrande Cypress",
    "reportFilename": `Legrande Cypress Test Report `, */
    "embeddedScreenshots": true,
    "inlineAssets": true
  }, 
 
  e2e: {
    defaultCommandTimeout:15000,
      setupNodeEvents(on, config) {
        //require("cypress-localstorage-commands/plugin")(on,config);
        require('cypress-mochawesome-reporter/plugin')(on);
        return config;
    }, 

    video:false,

      
  }, 
      
     
    
}); 


