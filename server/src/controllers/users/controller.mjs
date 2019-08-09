import sanitize from "mongo-sanitize";
import { addUserInDb, getUserFromDbByUsername, updateUserFromDb } from "../../models/users/user-schema.mjs";
import { validateUser } from "../../services/validation/user/index.mjs";
import { createToken } from "../../services/tokens/index.mjs";
import { sendEmail } from "../../services/emails/emails.mjs";

export const put = async (req, res) => {
	const sanitizedUsername = sanitize(req.body.username);
	const sanitizedUserEmail = sanitize(req.body.email);
	const newUserData = { username: sanitizedUsername, temporary: true };

	try {
		await validateUser(newUserData);
	} catch (error) {
		console.log("error", error);
		res.status(401).json({ message: "fail", error: "enter the correct data" });

		return;
	}

	try {
		const existedUser = await getUserFromDbByUsername({ username: sanitizedUsername });

		if (Boolean(existedUser)) {
			res.status(401).json({ message: "fail", error: "user exists" });
			return;
		}
	} catch (error) {
		console.log("error", error);
		res.status(500).json({ message: "fail", error: "internal server error" });

		return;
	}

	try {
		const newUser = await addUserInDb(newUserData).save();
		const userToken = createToken({ username: sanitizedUsername });

		await sendEmail({ token: userToken, username: newUser.username, email: sanitizedUserEmail });

		res.status(200).json({ message: "success", error: "" });
	} catch (error) {
		console.log("error", error);
		res.status(500).json({ message: "fail", error: "internal server error" });

		return;
	}
};

export const get = async (req, res) => {
	if (Boolean(res.locals.userTokenData.username)) {
		const username = res.locals.userTokenData.username;

		try {
			const userData = await getUserFromDbByUsername({ username });
			userData.temporary = false;

			if (!Boolean(userData)) {
				res.status(401).json({ message: "fail", error: "user does not exists", username });
				return;
			}

			await updateUserFromDb({ username, userData });

			res
				.status(200)
				.json({ message: "success", error: "", data: { username: userData, temporary: userData.temporary } });
			return;
		} catch (error) {
			console.log("error", error);
			res.status(500).json({ message: "fail", error: "internal server error", username: userData });
			return;
		}
	}

	res.status(401).json({ message: "fail", error: "token is not valid" });
	return;
};

export default { get, put };
