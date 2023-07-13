const expressLoader = require('./express');

const startServer = async ({ app }) => {
  expressLoader({
    app
  });
};

module.exports = startServer;
