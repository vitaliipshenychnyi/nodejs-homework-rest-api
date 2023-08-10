const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().pattern(/^\d+$/).required(),
});

module.exports = {
  addSchema,
};
