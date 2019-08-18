import { call, put } from "redux-saga/effects";
import {
	addValidatorUsername,
	setValidateError,
	fetchLoadingValidatorStart,
	fetchLoadingValidatorFinish,
} from "./actions";
import { validateUserRequest } from "../../../services/api";

export function* validateUserEmailSaga(action) {
	try {
		yield put(fetchLoadingValidatorStart());

		const resultOfRequest = yield call(validateUserRequest, { token: action.payload });
		const { message, error, username } = resultOfRequest;

		if (error) {
			yield put(setValidateError(error));
		}

		if (message && !error && username) {
			yield put(addValidatorUsername(username));
		}

		yield put(fetchLoadingValidatorFinish());
	} catch (error) {
		console.log("get error in validateUserEmailSaga", error);

		yield put(setValidateError(error));
		yield put(fetchLoadingValidatorFinish());
	}
}
