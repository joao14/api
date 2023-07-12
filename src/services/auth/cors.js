const { rootDomain } = require('../../config');

// eslint-disable-next-line security/detect-non-literal-regexp
const rootDomainRegex = new RegExp(`${rootDomain}$`);

// List of allowed origins
const whitelist = [/localhost/i, rootDomainRegex];

exports.corsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: whitelist,
  credentials: true,
  preflightContinue: false,
};
