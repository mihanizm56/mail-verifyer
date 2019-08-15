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
	yield put(fetchLoadingValidatorStart());
	yield sleep(10000);
	console.log("check validateUserEmailSaga", action);

	// TODO insert the correct params to request
	const resultOfRequest = yield call(validateUserRequest, { body: action.payload });
	const { message, error, username } = resultOfRequest;
	console.log("fetchReviewsRequest result", resultOfRequest);

	if (error) {
		console.log("saga request failed", error);
		yield put(setValidateError(error));
		yield put(addValidatorUsername(username));
		yield put(fetchLoadingValidatorFinish());
	}

	if (message && !error && username) {
		console.log("saga request success", action.payload.name);

		yield put(addValidatorUsername(username));
		yield put(fetchLoadingValidatorFinish());
	}

	// продумать что делать если ни того ни другого
	// yield put(fetchLoadingValidatorFinish());
}
