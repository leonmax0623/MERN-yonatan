const withTM = require('next-transpile-modules')(['react-360-view']);

module.exports = withTM({
  env: {
    PUBLIC_URL: "",
    API_BASE_URL: process.env.API_BASE_URL
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});
