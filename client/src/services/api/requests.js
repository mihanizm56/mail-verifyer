export const getRequest = ({ endpoint }) => fetch(endpoint).then(data => data.json());

// export const ERROR_INTERNAL_SERVER = "internal server error";
// export const ERROR_NOT_VALID_DATA = "enter the correct data";
// export const ERROR_EXIST_USER = "user exists";

const successMessage = {
	message: "success",
	error: null,
};

const errorMessage = {
	message: "",
	error: "internal server error",
};

export const putRequest = ({ endpoint, data }) => {
	// const paramsObject = {
	// 	method: "PUT",
	// 	headers: {
	// 		Accept: "application/json",
	// 		"Access-Control-Allow-Origin": "*",
	// 		"Content-Type": "application/json",
	// 		"Cache-Control": "no-cache",
	// 	},
	// 	body: JSON.stringify(data),
	// };
	// return fetch(endpoint, paramsObject).then(data => data.json());
	return Promise.resolve(errorMessage);
};
