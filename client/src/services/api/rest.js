import { TIMEOUT_VALUE } from "../../constants";

const fetchWithTimer = async ({ request }) => {
	const timeoutException = new Promise(resolve =>
		setTimeout(() => resolve({ error: "request-error", message: "" }), TIMEOUT_VALUE)
	);

	return Promise.race([request, timeoutException]);
};

export const getRequest = ({ endpoint }) => {
	const request = fetch(endpoint)
		.then(data => data.json())
		.catch(error => console.log("getRequest error", error) || { error: "request-error", message: "" });

	return fetchWithTimer({ request });
};

export const putRequest = ({ endpoint, data }) => {
	const paramsObject = {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
		},
		body: JSON.stringify(data),
	};
	const request = fetch(endpoint, paramsObject)
		.then(data => data.json())
		.catch(error => ({ error: "request-error", message: "" }));

	return fetchWithTimer({ request });
};
