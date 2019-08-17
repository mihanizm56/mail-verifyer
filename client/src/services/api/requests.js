import { getRequest, putRequest } from "./rest";
import { userRestEndpoint } from "./endpoints";

export const validateUserRequest = ({ token }) =>
	getRequest({
		endpoint: `${userRestEndpoint}/${token}`,
	});

export const sendUserRequest = ({ body }) => putRequest({ endpoint: userRestEndpoint, data: body });
