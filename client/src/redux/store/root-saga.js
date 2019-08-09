import { takeEvery } from "redux-saga/effects";
import { SEND_USER_EMAIL, sendUserEmailSaga } from "../modules/sender";
import { VALIDATE_USER, validateUserEmailSaga } from "../modules/sender";

function* rootSaga() {
	// yield takeEvery(SEND_USER_EMAIL, sendUserEmailSaga);
	// yield takeEvery(VALIDATE_USER, validateUserEmailSaga);
}

export default rootSaga;
