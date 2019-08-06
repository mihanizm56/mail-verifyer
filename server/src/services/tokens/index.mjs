import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwt_secret_key = process.env.SECRET;
const timeAccessTokenExpires = process.env.TIME_TO_EXPIRE;

export const createToken = userData =>
	jwt.sign({ ...userData }, jwt_secret_key, {
		expiresIn: `${timeAccessTokenExpires}h`,
	});

export const tokenVerify = (token, callback) => jwt.verify(token, jwt_secret_key, callback);
