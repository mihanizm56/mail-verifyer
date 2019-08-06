import nodemailer from "nodemailer";
const config = require("./config.json");

const transporter = nodemailer.createTransport(config.mail.stmp);

const getOptions = async ({ message, email }) => ({
	from: process.env.SENDER_NAME,
	to: config.mail.stmp.auth.user,
	subject: config.mail.subject,
	text: message.trim().slice(0, 500) + "\n" + `отправлено с <${email}>`,
});

export const sendEmail = async (token, email, callback) => {
	const options = await getOptions({ message, email });

	try {
		await transporter.sendMail(options);
	} catch (error) {
		console.log("sendEmail error", error);
		throw new Error(error);
	}
};
