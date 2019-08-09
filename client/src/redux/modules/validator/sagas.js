import { call, put } from "redux-saga/effects";
import { addValidatorUsername, setValidateError } from "./actions";
import { fetchLoadingStart, fetchLoadingFinish } from "../../../redux/modules/shared";
import { getRequest } from "../../../services/api/requests";
import { errorCreator } from "../../../utils/helpers/error-creator/error-creator";

export function* validateUserEmailSaga(action) {
	yield put(fetchLoadingStart());
	console.log("check validateUserEmailSaga", action);

	// TODO insert the correct params to request
	const resultOfRequest = yield call(getRequest, action.type);
	const { message, error, username } = resultOfRequest;
	console.log("fetchReviewsRequest result", resultOfRequest);

	if (error) {
		const getErrorText = errorCreator(error);
		console.log("saga request failed", getErrorText);
		yield put(setValidateError(getErrorText));
		yield put(addValidatorUsername(username));
		yield put(fetchLoadingFinish());
	}

	if (message && !error && username) {
		console.log("saga request success", action.payload.name);

		yield put(addValidatorUsername(username));
		yield put(fetchLoadingFinish());
	}

	// продумать что делать если ни того ни другого
	// yield put(fetchLoadingFinish());
}
