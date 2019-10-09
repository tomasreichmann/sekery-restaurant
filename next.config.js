require('dotenv').config();

module.exports = {
  webpack: (config, {webpack}) => {
    config.plugins = config.plugins || [];

    const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
    if (!FIREBASE_API_KEY) {
      throw new Error("Missing process.env.FIREBASE_API_KEY");
    }

    config.plugins.push(new webpack.DefinePlugin({
      FIREBASE_API_KEY: `"${FIREBASE_API_KEY}"`
    }));

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};
