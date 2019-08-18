import { TIMEOUT_VALUE } from "../../constants";

const fetchWithTimer = async ({ request, timeoutValue }) => {
	const timeoutException = new Promise(resolve =>
		setTimeout(() => resolve({ error: "request-error", message: "" }), timeoutValue)
	);

	return Promise.race([request, timeoutException]);
};

export const getRequest = ({ endpoint }) => {
	return Promise.resolve({ error: "error" });
	// const request = fetch(endpoint)
	// 	.then(data => data.json())
	// 	.catch(error => console.log("getRequest error", error) || { error: "request-error", message: "" });

	// return fetchWithTimer({ request, timeoutValue: TIMEOUT_VALUE });
};

export const putRequest = ({ endpoint, data }) => {
	return Promise.resolve({ error: "error" });
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
	// const request = fetch(endpoint, paramsObject)
	// 	.then(data => data.json())
	// 	.catch(error => ({ error: "request-error", message: "" }));

	// return fetchWithTimer({ request, timeoutValue: TIMEOUT_VALUE });
};
