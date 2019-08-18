import { call, put } from "redux-saga/effects";
import { addSenderUsername, setSenderError, fetchLoadingSenderStart, fetchLoadingSenderFinish } from "./actions";
import { sendUserRequest } from "../../../services/api";
import { sleep } from "../../../utils";
import { ERROR_INTERNAL_SERVER } from "../../../constants";

export function* sendUserEmailSaga(action) {
	yield put(fetchLoadingSenderStart());
	yield sleep(2000);
	console.log("check sendUserEmailSaga", action);
	try {
		const resultOfRequest = yield call(sendUserRequest, { body: action.payload });
		const { message, error = ERROR_INTERNAL_SERVER } = resultOfRequest;
		console.log("sendUserEmailSaga result", resultOfRequest);

		if (error) {
			console.log("saga request failed", error);
			yield put(setSenderError(error));
			yield put(fetchLoadingSenderFinish());
		}

		if (message && !error && action.payload.username) {
			console.log("saga request success", action.payload.name);

			yield put(addSenderUsername(action.payload.username));
			yield put(fetchLoadingSenderFinish());
		}
	} catch (error) {
		console.log("error in sendUserEmailSaga", error);

		yield put(setSenderError(error));
		yield put(fetchLoadingSenderFinish());
	}
}
