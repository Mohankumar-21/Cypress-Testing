// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Cypress.Commands.add('checkPackageDependency', (repoUrl, dependencyName) => {
//     cy.task('readPackageJsonFromGithub', repoUrl).then((packageJson) => {
//       const dependencies = packageJson.dependencies || {};
//       const devDependencies = packageJson.devDependencies || {};
//       if (dependencies[dependencyName] || devDependencies[dependencyName]) {
//         cy.log(`${dependencyName} is installed.`);
//       } else {
//         cy.log(`${dependencyName} is NOT installed.`);
//       }
//     });
//   });
  