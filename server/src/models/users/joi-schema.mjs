import Joi from "@hapi/joi";

export default Joi.object().keys({
	username: Joi.string()
		.min(1)
		.max(20)
		.required(),
	temporary: Joi.boolean().required(),
});
