import { getRequest, putRequest } from "./rest";
import { userRestEndpoint } from "./endpoints";

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
	return getRequest({
		endpoint: `${userRestEndpoint}/${token}`,
	});

	// const resultOfRequest = yield call(getRequest, {
	// 	enpoint: `${userRestEndpoint}/${action.payload}`,
	// });

	// return postRequest({ endpoint: `${HOST_AUTH}/login`, body });
	// return new Promise((resolve, reject) =>
	// 	setTimeout(() => {
	// 		console.log("check fetctUserValidate");
	// 		resolve({ message: "success", username: token });
	// 	}, 1000)
	// );
};

export const sendUserRequest = ({ body }) => {
	console.log("запрос на отправку пользователя", body);
	return putRequest({ endpoint: userRestEndpoint, data: body });
	// return new Promise(resolve =>
	// 	setTimeout(() => {
	// 		console.log("check getUserByToken");
	// 		resolve(successMessage);
	// 	}, 1000)
	// );
};
