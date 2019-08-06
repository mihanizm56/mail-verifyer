import Joi from "@hapi/joi";
import userSchema from "../../../models/users/joi-schema.mjs";

export const validateUser = userData => Joi.validate(userData, userSchema);
