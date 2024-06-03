describe('Check package.json dependencies', () => {
  const Github_URL = '';   //'Mohankumar-21/ecommerce-frontend
  const fileName = 'ShopContext.js';

  it('Visit the URL', ()=>
  {
    cy.visit('https://github.com/Mohankumar-21/ecommerce-frontend/')
  })
  
  it('Checks if axios, react-dom, and react-router-dom are installed', () => {
    cy.task('readPackageJsonFromGithub', Github_URL)
      .then(packageJson => {
        expect(packageJson.dependencies).to.have.property('axios');
        expect(packageJson.dependencies).to.have.property('react-dom');
        expect(packageJson.dependencies).to.have.property('react-router-dom');
      });
  });
  
  it('Verifies the presence of ShopContext.js file', () => {
    const searchFile = (path, retryCount = 3) => {
      return cy.request({
        method: 'GET',
        url: `https://api.github.com/repos/${Github_URL}/contents/${path}`,
        failOnStatusCode: false 
      }).then(response => {
        if (response.status === 403 && retryCount > 0) {
          
          return cy.wait(1000).then(() => searchFile(path, retryCount - 1));
        } else if (response.status === 200 && Array.isArray(response.body)) {
         
          const items = response.body;
          const checkItems = (items) => {
            if (!items.length) return cy.wrap(false); // Base case: no more items to check

            const item = items.shift(); // Get the first item

            if (item.type === 'file' && item.name === fileName) {
              return cy.wrap(true); // File found
            } else if (item.type === 'dir') {
              return searchFile(`${path}/${item.name}`).then(found => {
                if (found) {
                  return cy.wrap(true); // File found in a subdirectory
                } else {
                  return checkItems(items); // Check the next item
                }
              });
            } else {
              return checkItems(items); // Check the next item
            }
          };

          return checkItems(items); // Start checking the items
        } else if (response.status === 200 && response.body.name === fileName) {
          return cy.wrap(true); // The file is found
        } else {
          return cy.wrap(false); // The file is not found
        }
      });
    };
    searchFile('').then(found => {
      expect(found).to.be.true;
    });
  });
  
  
  
});
