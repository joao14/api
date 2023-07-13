const BaseError = require('./baseError');
const httpCodes = require('./httpCodes');

class BadRequestError extends BaseError {
  constructor(
    message,
    statusCode = httpCodes.BAD_REQUEST,
    name = 'Bad Request',
    isOperational = true,
  ) {
    super(message, statusCode, name, isOperational);
  }
}

class UnauthorizedError extends BaseError {
  constructor(
    message,
    statusCode = httpCodes.UNAUTHORIZED,
    name = 'Unauthorized',
    isOperational = true,
  ) {
    super(message, statusCode, name, isOperational);
  }
}

class ForbiddenError extends BaseError {
  constructor(
    message,
    statusCode = httpCodes.FORBIDDEN,
    name = 'Forbidden',
    isOperational = true,
  ) {
    super(message, statusCode, name, isOperational);
  }
}

class NotFoundError extends BaseError {
  constructor(
    message,
    statusCode = httpCodes.NOT_FOUND,
    name = 'Not Found',
    isOperational = true,
  ) {
    super(message, statusCode, name, isOperational);
  }
}

class ValidationError extends BaseError {
  constructor(
    message,
    statusCode = httpCodes.UNPROCESSABLE,
    name = 'Validation Error',
    isOperational = true,
  ) {
    super(message, statusCode, name, isOperational);
  }
}

class InternalServerError extends BaseError {
  constructor(
    message,
    statusCode = httpCodes.INTERNAL_SERVER,
    name = 'Internal Server Error',
    isOperational = true,
  ) {
    super(message, statusCode, name, isOperational);
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
  InternalServerError,
};
