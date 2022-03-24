const withTM = require('next-transpile-modules')(['react-360-view']);

module.exports = withTM({
  env: {
    PUBLIC_URL: ""
  }
});
