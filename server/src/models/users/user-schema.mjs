import mongoose from "mongoose";
import "./model.mjs";

export const UserModel = mongoose.model("User");

export const getUserFromDbByUsername = ({ username }) => UserModel.findOne({ username });

export const addUserInDb = userData => {
	const newUser = new UserModel({ ...userData });

	return newUser;
};

export const updateUserFromDb = ({ username, userData }) =>
	UserModel.findOneAndUpdate({ username }, userData, { overwrite: false });
