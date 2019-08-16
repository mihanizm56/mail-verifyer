import { tokenVerify } from "../../services/tokens/index.mjs";

export const userTokenVerification = (req, res, next) =>
	tokenVerify(req.params.token, (error, userData) => {
		if (error || !userData.username) {
			console.log("error token", error);

			res.status(401).send({ message: "", error: "enter the correct data" });
		} else {
			console.log("valid cookieTokenAuth");

			res.locals.userTokenData = userData;
			next();
		}
	});
