const express = require('express');
const compression = require('compression');
const cors = require('cors');
const router = require('../api/router');
const { corsOptions } = require('../services/auth/cors');


module.exports = ({ app }) => {
 
  app.disable('x-powered-by');

  app.use(compression());
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(router);

};
