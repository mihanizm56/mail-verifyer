import { tokenVerify } from "../../services/tokens/index.mjs";

export const cookieTokenAuth = (req, res, next) =>
	tokenVerify(req.params.token, (error, userData) => {
		if (!error && userData.id) {
			console.log("valid cookieTokenAuth");

			res.locals.userTokenData = userData;
			next();
		} else {
			res.status(401).send({ message: "", error: "not valid token" });
		}
	});
