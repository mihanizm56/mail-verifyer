import { call, put } from "redux-saga/effects";
import { addSenderUsername, setSenderError } from "./actions";
import { fetchLoadingStart, fetchLoadingFinish } from "../../../redux/modules/shared";
import { putRequest } from "../../../services/api/requests";
import { errorCreator } from "../../../utils/helpers/error-creator/error-creator";

export function* sendUserEmailSaga(action) {
	yield put(fetchLoadingStart());
	console.log("check sendUserEmailSaga", action);

	// TODO insert the correct params to request
	const resultOfRequest = yield call(putRequest, action.payload);
	const { message, error } = resultOfRequest;
	console.log("fetchReviewsRequest result", resultOfRequest);

	if (error) {
		const getErrorText = errorCreator(error);
		console.log("saga request failed", getErrorText);
		yield put(setSenderError(getErrorText));
		yield put(fetchLoadingFinish());
	}

	if (message && !error && action.payload.name) {
		console.log("saga request success", action.payload.name);

		yield put(addSenderUsername(action.payload.name));
		yield put(fetchLoadingFinish());
	}
}
