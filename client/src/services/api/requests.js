import { getRequest, putRequest } from "./requests";

// export const ERROR_INTERNAL_SERVER = "internal server error";
// export const ERROR_NOT_VALID_DATA = "enter the correct data";

const successMessage = {
	message: "success",
	error: null,
	username: "test username success",
};

const errorMessage = {
	message: "",
	error: "enter the correct data",
	username: "",
};

export const validateUserRequest = ({ token }) => {
	console.log("запрос на проверку токена пользователя", token);
	// const resultOfRequest = yield call(getRequest, {
	// 	enpoint: `${userRestEndpoint}/${action.payload}`,
	// });

	// return postRequest({ endpoint: `${HOST_AUTH}/login`, body });
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check fetctUserValidate");
			resolve(errorMessage);
			// reject({ error: "test-error" });
		}, 1000)
	);
};

export const sendUserRequest = ({ body }) => {
	console.log("запрос на отправку пользователя", body);
	// return getRequest({ endpoint: `${HOST_API}/reviews` });
	return new Promise(resolve =>
		setTimeout(() => {
			console.log("check getUserByToken");
			resolve(errorMessage);
		}, 1000)
	);
};
