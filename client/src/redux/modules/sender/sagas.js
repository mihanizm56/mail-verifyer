import { call, put } from "redux-saga/effects";
import {
	addSenderUsername,
	setSenderError,
	fetchLoadingSenderStart,
	fetchLoadingSenderFinish,
	resetSenderError,
} from "./actions";
import { sendUserRequest } from "../../../services/api";
import { ERROR_INTERNAL_SERVER } from "../../../constants";

const sleep = ms => setTimeout(() => {}, ms);

export function* sendUserEmailSaga(action) {
	yield put(fetchLoadingSenderStart());
	yield put(resetSenderError());
	yield sleep(2000);

	try {
		const resultOfRequest = yield call(sendUserRequest, { body: action.payload });
		const { message, error = ERROR_INTERNAL_SERVER } = resultOfRequest;

		if (error) {
			yield put(setSenderError(error));
			yield put(fetchLoadingSenderFinish());
		}

		if (message && !error && action.payload.username) {
			yield put(addSenderUsername(action.payload.username));
			yield put(fetchLoadingSenderFinish());
		}
	} catch (error) {
		console.log("error in sendUserEmailSaga", error);

		yield put(setSenderError(error));
		yield put(fetchLoadingSenderFinish());
	}
}
