import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import config from "./config.json";
import { domain } from "../../services/variables/index.mjs";

dotenv.config();

const nodemailerTransport = nodemailer.createTransport(config.mail.stmp);
const pathForTemplate = path.join(process.cwd(), "src", "services", "emails");

const options = {
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

const getMailMessage = async ({ email, link }) => ({
	from: process.env.SENDER_NAME,
	to: email,
	subject: config.mail.subject,
	template: "email",
	context: {
		link,
		email: "test_email",
	},
});

export const sendEmail = async ({ token, email }) => {
	const link = `${domain}/verify/${token}`;
	const message = await getMailMessage({ email, link });

	try {
		await nodemailerTransport.sendMail(message);
		console.log("mail was sent");
	} catch (error) {
		console.log("sendEmail error", error);
		throw new Error(error);
	}

	nodemailerTransport.close();

	return Promise.resolve("mail was sended");
};
