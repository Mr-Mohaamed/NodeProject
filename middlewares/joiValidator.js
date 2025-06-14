const APIError = require("../utils/apiError");
const joiValidator = (schema) => {
  return async function (req, res, next) {
    try {
      const { error } = schema.validate(req.body, {
        abortEarly: true,
      });
      if (error) {
        throw new APIError(error?.details[0]?.message, 400);
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = joiValidator;
