import { call, put } from "redux-saga/effects";
import {
	addValidatorUsername,
	setValidateError,
	fetchLoadingValidatorStart,
	fetchLoadingValidatorFinish,
} from "./actions";
import { getRequest, validateUserRequest } from "../../../services/api";
import { sleep, errorCreator } from "../../../utils";

export function* validateUserEmailSaga(action) {
	try {
		yield put(fetchLoadingValidatorStart());
		yield sleep(10000);
		console.log("check validateUserEmailSaga", action);

		const resultOfRequest = yield call(validateUserRequest, { token: action.payload });
		console.log("resultOfRequest", resultOfRequest);

		const { message, error, username } = resultOfRequest;
		console.log("fetchReviewsRequest result", resultOfRequest);

		if (error) {
			console.log("saga request failed", error);

			yield put(setValidateError(error));
			yield put(addValidatorUsername(username));
			yield put(fetchLoadingValidatorFinish());
		}

		if (message && !error && username) {
			console.log("saga request success", username);

			yield put(addValidatorUsername(username));
			yield put(fetchLoadingValidatorFinish());
		}
	} catch (error) {
		console.log("get error in validateUserEmailSaga", error);

		yield put(setValidateError(error));
		yield put(fetchLoadingValidatorFinish());
	}
}
