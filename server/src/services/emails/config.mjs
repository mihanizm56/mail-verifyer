import dotenv from "dotenv";

dotenv.config();

const username = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;

export default {
	mail: {
		subject: "React verifyer message",
		stmp: {
			host: "smtp.gmail.com",
			port: "465",
			secure: "true",
			auth: {
				user: username,
				pass: password,
			},
		},
	},
};
