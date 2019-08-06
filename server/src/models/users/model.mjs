import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	temporary: {
		type: Boolean,
		required: true,
		unique: false,
	},
});

mongoose.model("User", usersSchema, "Users");
