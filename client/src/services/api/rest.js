export const getRequest = ({ endpoint }) =>
	console.log("endpoint", endpoint) ||
	fetch(endpoint)
		.then(data => data.json())
		.catch(error => console.log("////////////", error) || { error: "request-error", message: "" });

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
	return fetch(endpoint, paramsObject)
		.then(data => data.json())
		.catch(error => ({ error: "request-error", message: "" }));
};
