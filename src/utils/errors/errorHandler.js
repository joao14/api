const BaseError = require('./baseError');

const isOperationalError = (error) => {
  if (error instanceof BaseError) {
    return error.isOperational;
  }

  return false;
};

const logError = (error, level) => {
  const { code, stack, message } = error;

  console.log(level, {
    code,
    stack,
    message,
    timestamp: new Date().toString(),
  });
};


exports.handleError = (error, context) => {
  // Determine whether error is operational or not
  const isOperational = isOperationalError(error);
  const level = isOperational ? 'warn' : 'error';

  // Log all errors
  logError(error, level);

  // Notify the developers if the error is not operational or has status 500 (internal server error)
  if (!isOperational || error.statusCode === 500) {
    notifyError(error, context);
  }

  // Crash the application if error is not operational. Wait until notification is sent.
  if (!isOperational) {
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  }
};
