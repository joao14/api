const { handleError } = require('../../utils/errors/errorHandler');
const { environment } = require('../../config');

const createErrorContext = (req) => {
  const { session, body, query, params, cookies, headers, url, method } = req;

  const context = {
    environment,
    action: method,
    url,
    query,
    params,
    body,
    session,
    cookies,
    headers,
  };

  return context;
};


const handleApiError = async (error, req, res, next) => {
  const context = createErrorContext(req);
  handleError(error, context); 

  if (res.headersSent) return; 

  const { statusCode = 500, message } = error;
  const resMessage = statusCode === 500 ? 'Error interno' : message;

  res.status(statusCode).json(resMessage);
};

module.exports = handleApiError;
