const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack(config) {
    config.plugins = config.plugins || []
    if (process.env.NODE_ENV !== "production") {
      // Read the .env file
      config.plugins.push(
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      )
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};
