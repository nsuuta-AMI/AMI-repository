// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'




// Cypress configuration
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from logging the exception
    return false;
  });
  
  // Custom commands and other configurations
  // ...