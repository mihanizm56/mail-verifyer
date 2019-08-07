import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import config from "./config.json";

const nodemailerTransport = nodemailer.createTransport(config.mail.stmp);
const pathForTemplate = path.join(process.cwd(), "src", "services", "emails");

var options = {
	viewEngine: {
		extName: ".hbs",
		partialsDir: pathForTemplate,
		layoutsDir: pathForTemplate,
		defaultLayout: "email.hbs",
	},
	viewPath: pathForTemplate,
	extName: ".hbs",
};

nodemailerTransport.use("compile", hbs(options));

const getMailMessage = async ({ message, email, token }) => ({
	from: process.env.SENDER_NAME,
	to: email,
	subject: config.mail.subject,
	template: "email",
	context: {
		name: "test_name",
		email: "test_email",
	},
});

export const sendEmail = async ({ token, email }) => {
	const message = await getMailMessage({ message: "тестовое сообщение", email, token });

	try {
		await nodemailerTransport.sendMail(message);
		console.log("mail was sent");
	} catch (error) {
		console.log("sendEmail error", error);
		throw new Error(error);
	}

	nodemailerTransport.close();
};
