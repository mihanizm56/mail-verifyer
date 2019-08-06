import sanitize from "mongo-sanitize";
import { addUserInDb, getUserFromDbById, updateUserFromDb } from "../../models/users/user-schema.mjs";
import { validateUser } from "../../services/validation/user/index.mjs";
import { createToken } from "../../services/tokens/index.mjs";
import { sendEmail } from "../../services/emails/emails.mjs";

export const put = async (req, res) => {
	const sanitizedUsername = sanitize(req.body.username);
	const sanitizedUserEmail = sanitize(req.body.email);
	const newUserData = { username: sanitizedUsername, temporary: false };

	try {
		await validateUser(newUserData);
	} catch (error) {
		console.log("error", error);

		res.status(401).json({ message: "fail", error: "enter the correct data" });
		return;
	}

	try {
		const newUser = await addUserInDb();
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
	if (res.locals.userData.id) {
		const userId = res.locals.userData.id;

		try {
			const userData = await getUserFromDbById({ userId });
			userData.temporary = true;
		} catch (error) {
			console.log("error", error);
			res.status(401).json({ message: "fail", error: "user does not exists" });
			return;
		}

		try {
			await updateUserFromDb({ userId, userData });
			res.status(200).json({ message: success, error: "" });
		} catch (error) {
			console.log("error", error);
			res.status(500).json({ message: "fail", error: "internal server error" });
			return;
		}
	}

	res.status(401).json({ message: "fail", error: "enter the correct data" });
	return;
};

export default { get, put };
