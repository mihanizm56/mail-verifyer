import { call, put } from "redux-saga/effects";
import { addSenderUsername, setSenderError, fetchLoadingSenderStart, fetchLoadingSenderFinish } from "./actions";
import { putRequest, sendUserRequest } from "../../../services/api";
import { sleep, errorCreator } from "../../../utils";

export function* sendUserEmailSaga(action) {
	yield put(fetchLoadingSenderStart());
	yield sleep(2000);
	console.log("check sendUserEmailSaga", action);

	// TODO insert the correct params to request
	const resultOfRequest = yield call(sendUserRequest, { body: action.payload });
	const { message, error } = resultOfRequest;
	console.log("fetchReviewsRequest result", resultOfRequest);

	if (error) {
		console.log("saga request failed", error);
		yield put(setSenderError(error));
		yield put(fetchLoadingSenderFinish());
	}

	if (message && !error && action.payload.name) {
		console.log("saga request success", action.payload.name);

		yield put(addSenderUsername(action.payload.name));
		yield put(fetchLoadingSenderFinish());
	}
}
