import { ERROR_INTERNAL_SERVER, ERROR_NOT_VALID_DATA, ERROR_EXIST_USER, ERROR_INVALID_TOKEN } from "./constants";

export const errorCreator = error => {
	switch (error) {
		case ERROR_INTERNAL_SERVER:
			return "Cервер временно недоступен, попробуйте позже";
		case ERROR_NOT_VALID_DATA:
			return "Введите корректные данные пользователя";
		case ERROR_INVALID_TOKEN:
			return "Cервер временно недоступен, попробуйте позже";

		default:
			return "";
	}
};
