import sanitize from "mongo-sanitize";
import { addUserInDb, getUserFromDbById, updateUserFromDb } from "../../models/users/index.mjs";

export const put = async (req, res) => {
	const sanitizedUsername = sanitize(req.body.username);
	const temporary = false;
	// const access_token = createToken(serializedUserData.id);
};

export const get = async (req, res) => {
	const userId = res.locals.userData.id;
	const userData = await getUserFromDbById({ userId });
	userData.temporary = true;

	await updateUserFromDb({ userId, userData });
};
