import { ERROR_INTERNAL_SERVER, ERROR_NOT_VALID_DATA, ERROR_EXIST_USER } from "./constants";

export const errorCreator = error => {
	switch (error) {
		case ERROR_INTERNAL_SERVER:
			return "Cервер временно недоступен";
		case ERROR_NOT_VALID_DATA:
			return "Введите корректные данные";
		case ERROR_EXIST_USER:
			return "Пользователь с таким именем уже существует";

		default:
			return { name: "", email: "" };
	}
};
