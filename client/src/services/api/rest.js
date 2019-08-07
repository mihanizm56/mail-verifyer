import { getRequest, putRequest } from "./requests";

export const fetctUserValidate = (login, password, user) => {
	console.log("запрос на создание пользователя", login, password, user);

	// return postRequest({ endpoint: `${HOST_AUTH}/login`, data: { login, password, user } });
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("check fetctUserValidate");
			resolve({
				error:''
				message: "success"
			});
			// reject({ error: "test-error" });
		}, 2000)
	);
};

export const getUserByToken = () => {
	// return getRequest({ endpoint: `${HOST_API}/reviews` });
	return new Promise(resolve =>
		setTimeout(() => {
			console.log("check getUserByToken");
			resolve({error:'',message:'success',data:{username:'test',temporary:false}});
		}, 2000)
	);
};