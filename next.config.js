// next.config.js

module.exports = {
    // Your custom webpack configuration goes here
    webpack: (config, { isServer }) => {
      // Custom webpack configuration for the server
      if (isServer) {
        // Do something specific for the server build
      }
  
      // Custom webpack configuration for the client
      // ...
  
      return config;
    },
  
    // Define environment variables
    env: {
      // Example environment variable
      // API_URL: process.env.API_URL || 'https://api.example.com',
    },
  
    // Other configuration options
    // ...
  
    // Example: Enable serverless mode (useful for serverless deployments like Vercel)
    // target: 'serverless',
  };