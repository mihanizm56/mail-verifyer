import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 8080;
export let dbURL;
export let domain;

switch (process.env.NODE_ENV) {
	case "development":
		dbURL = process.env.DB_URI_DEVELOPMENT;
		domain = process.env.APP_DOMAIN_DEVELOPMENT;
		break;
	case "production":
		dbURL = process.env.DB_URI_PRODUCTION;
		domain = process.env.APP_DOMAIN_PRODUCTION;
		break;
	case "test":
		dbURL = process.env.DB_URI_TEST;
		domain = process.env.APP_DOMAIN_DEVELOPMENT;
		break;

	default:
		DB_URI = process.env.DB_URI_DEVELOPMENT;
		domain = process.env.APP_DOMAIN_DEVELOPMENT;
		break;
}
