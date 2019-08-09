import { call, put } from "redux-saga/effects";
import { stopSubmit } from "redux-form";
import { fetchValidateUserEmail } from "./actions";
import { fetchError } from "../shared/actions";
// import {
// 	fetchLoginRequest,
// 	fetchAuthRequest,
// 	deleteUser,
// 	deleteTokens,
// 	saveUser,
// 	saveTokens,
// 	fetchRefreshRequest,
// } from "../../../services";

export function* validateUserEmailSaga(action) {
	const { token } = action.payload;

	if (token) {
		try {
			// const resultOfRequest = yield call(fetchAuthRequest, login, password);
			console.log("check resultOfRequest authSaga", resultOfRequest);
			const { message, error } = resultOfRequest;

			if (message && !error) {
				yield put(loginSuccessAction());
				saveUser(login);
				saveTokens(access_token, refresh_token, expiresIn);
			} else if (error === "enter the correct user data") {
				yield put(stopSubmit("auth", { login: "enter correct user data", password: "enter correct user data" }));
				yield put(loginFailedAction());
			} else if (error === "internal server error") {
				stopSubmit("auth", {
					login: "network connection error, please retry",
					user: "network connection error, please retry",
				});
				yield put(loginFailedAction());
			} else if (error === "not authorized") {
				yield put(stopSubmit("auth", { login: "enter correct user data", password: "enter correct user data" }));
				yield put(loginFailedAction());
			}
		} catch (error) {
			yield put(
				stopSubmit("auth", {
					login: "network connection error, please retry",
					user: "network connection error, please retry",
				})
			);
			yield put(loginFailedAction());
		}
	} else {
		yield put(fetchError());
	}
}
