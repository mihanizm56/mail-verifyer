export const getRequest = ({ endpoint }) => fetch(endpoint).then(data => data.json());

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

	return fetch(endpoint, paramsObject).then(data => data.json());
};
