import { call, put } from "redux-saga/effects";
import { setError } from "../../../redux/modules/shared";

export function* sendUserEmailSaga(action) {
	console.log("check sendUserEmailSaga", action);
	yield put(setError("test-error-setted"));
}
