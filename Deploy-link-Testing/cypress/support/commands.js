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




// it('Check "ADD TO CART (0)" button presence on a product page', () => {
//     cy.visit(`${baseUrl}/men`, { timeout: 60000 });
//     cy.get('a[href^="/product/"]').should('have.length.greaterThan', 0, { timeout: 10000 });
//     cy.get('a[href^="/product/"]').first().click({ force: true });
//     cy.url().should('include', '/product/');s
//     cy.get('button').contains('ADD TO CART (0)').should('exist').and('be.visible');
//   });