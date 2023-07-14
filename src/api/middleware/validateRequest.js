const formatError = (errorDetails) => {
  const errors = {};

  errorDetails.forEach((error) => {
    const { path, message } = error;
    const key = path[0];
    errors[key] = message;
  });

  return errors;
};

const validateRequest = (validator) => {
  return (req, res, next) => {
    const validationOptions = {
      abortEarly: false, // abort after the last validation error
      allowUnknown: true, // allow unknown keys that will be ignored
      stripUnknown: true, // remove unknown keys from the validated data
    };

    const supportedMethods = ['post', 'put', 'patch'];

    try {
      const method = req.method.toLowerCase();
      const data = req.body;

      if (supportedMethods.includes(method) && validator) {
        const { error, value } = validator.validate(data, validationOptions);
        if (error) {
          const formattedError = formatError(error.details);
          return res.status(422).json(formattedError);
        }

        // Replace req.body with validated data
        req.body = value;
        next();
      } else {
        next();
      }
    } catch (err) {
      next(err);
    }
  };
};

module.exports = validateRequest;
