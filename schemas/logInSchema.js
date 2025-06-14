// { name, email, password, passwordConfirm }
const joi = require("joi");

const logInSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.email": "Invalid email address",
  }),
  password: joi.string().required(),
});

module.exports = logInSchema;
