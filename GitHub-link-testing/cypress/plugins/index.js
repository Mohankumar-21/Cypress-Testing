const axios = require('axios');

module.exports = (on, config) => {
  on('task', {
    async readPackageJsonFromGithub(repoUrl) {
      const apiUrl = `https://api.github.com/repos/${repoUrl}/contents/package.json`;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Accept': 'application/vnd.github.v3.raw',
       
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(`Failed to fetch package.json from ${repoUrl}: ${error.message}`);
      }
    }
  });

  return config;
};
