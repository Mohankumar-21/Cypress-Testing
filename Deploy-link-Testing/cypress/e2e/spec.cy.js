describe('E-commerce Site Tests', () => {
  const baseUrl = 'https://main--ecommerce-web-21.netlify.app';

  it('Visit the base URL', () => {
    cy.visit(baseUrl, { timeout: 60000 });
  });

  it('Check if specified pages exist', () => {
    const pages = [
      '/login',
      '/shop',
      '/men',
      '/women',
      '/cart'
    ];

    pages.forEach(page => {
      cy.visit(`${baseUrl}${page}`, { timeout: 60000 });
      cy.url().should('include', page); 
      cy.get('body').should('be.visible'); 
    });
  });



  it('Verify ADD TO CART button present or not', () => {
    cy.visit(`${baseUrl}/mens`);
    cy.get('a[href^="/product/"]').then($links => {
      if ($links.length > 0) {
        const randomIndex = Math.floor(Math.random() * $links.length);
        const randomProductLink = $links.eq(randomIndex);
        const href = randomProductLink.attr('href');
        const productId = href.split('/').pop();
        cy.wrap(randomProductLink).click().then(() => {
          cy.url().should('include', `/product/${productId}`);
          cy.get('button').contains(/^ADD TO CART \(\d+\)$/).should('exist').and('be.visible').click();
        });
      } else {
        cy.log('No product links found');
      }
    });
  });

  it('Verifies that without token ADD TO CART button does not work', () => {

    cy.clearLocalStorage();

    cy.visit(`${baseUrl}/mens`);
    
    cy.get('a[href^="/product/"]').then($links => {
      if ($links.length > 0) {
        const randomIndex = Math.floor(Math.random() * $links.length);
        const randomProductLink = $links.eq(randomIndex);
        const href = randomProductLink.attr('href');
        const productId = href.split('/').pop(); 
        cy.wrap(randomProductLink).click().then(() => {
          cy.url().should('include', `/product/${productId}`);
          cy.get('button').contains(/^ADD TO CART \(\d+\)$/).should('exist').and('be.visible').click();
          cy.contains('You need to sign in to add items to the cart').should('be.visible');
        });
      } else {
        cy.log('No product links found');
      }
    });
  });


  it('Check token is present after login in the website', () => {
    const loginUrl = `${baseUrl}/login`;
    cy.visit(loginUrl);
    cy.get('input[type="email"]').type('new@gmail.com');
    cy.get('input[type="password"]').type('12345678');
    cy.get('button').contains('Continue').click();
    cy.url().should('include', baseUrl);
    cy.wait(2000);
    cy.window().then((window) => {
      console.log(window.localStorage);
    });

    cy.window().then((window) => {
      const token = window.localStorage.getItem('auth-token');
      expect(token).to.exist; 
    });
  });

  it('Verifies that after login ADD TO CART button works', () => {
    cy.visit(`${baseUrl}/login`);
    cy.get('input[type="email"]').type('new@gmail.com');
    cy.get('input[type="password"]').type('12345678');
    cy.get('button').contains('Continue').click();
    cy.url().should('include', baseUrl);

    cy.visit(`${baseUrl}/mens`);

    cy.get('a[href^="/product/"]').then($links => {
      if ($links.length > 0) {
        const randomIndex = Math.floor(Math.random() * $links.length);
        const randomProductLink = $links.eq(randomIndex);
        const href = randomProductLink.attr('href');
        const productId = href.split('/').pop();
        cy.wrap(randomProductLink).click().then(() => {
          cy.url().should('include', `/product/${productId}`);
          cy.get('button').contains(/^ADD TO CART \(\d+\)$/).should('exist').and('be.visible').click();
          cy.get('button').should('not.have.text', '0');
        });
      } else {
        cy.log('No product links found');
      }
    });
  });
  
});
