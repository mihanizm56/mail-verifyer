import { ERROR_INTERNAL_SERVER, ERROR_NOT_VALID_DATA, ERROR_EXIST_USER } from "./constants";

export const errorCreator = error => {
	switch (error) {
		case ERROR_INTERNAL_SERVER:
			return { name: "сервер временно недоступен", email: "сервер временно недоступен" };
		case ERROR_NOT_VALID_DATA:
			return { name: "Введите корректные данные", email: "Введите корректные данные" };
		case ERROR_EXIST_USER:
			return {
				name: "Пользователь с таким именем уже существует",
				email: "Пользователь с таким именем уже существует",
			};

		default:
			return { name: "", email: "" };
	}
};
