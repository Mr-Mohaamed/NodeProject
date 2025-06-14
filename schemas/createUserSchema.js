// { name, email, password, passwordConfirm }
const joi = require("joi");

const createUserSchema = joi
  .object({
    name: joi.string().required(),
    email: joi.string().email().required().messages({
      "string.email": "Invalid email address",
    }),
    password: joi
      .string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required()
      .messages({
        "string.pattern.base": "Password is Weak",
      }),
    passwordConfirm: joi.ref("password"),
  })
  .messages({
    "any.only": "Passwords do not match",
  });

module.exports = createUserSchema;
