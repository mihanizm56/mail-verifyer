import nodemailer from "nodemailer";
import config from "./config.json";

const transporter = nodemailer.createTransport(config.mail.stmp);

const getOptions = async ({ message, email, token }) => ({
	from: process.env.SENDER_NAME,
	to: email,
	subject: config.mail.subject,
	text: `токен ${token}` + "\n" + `отправлено с <${email}>`,
});

export const sendEmail = async ({ token, email }) => {
	const options = await getOptions({ message: "тестовое сообщение", email, token });

	try {
		await transporter.sendMail(options);
		console.log("mail was sent");
	} catch (error) {
		console.log("sendEmail error", error);
		throw new Error(error);
	}
};
