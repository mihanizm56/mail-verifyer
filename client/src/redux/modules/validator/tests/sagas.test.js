import { put, call } from "redux-saga/effects";
import { testSaga } from "redux-saga-test-plan";
import { validateUserEmailSaga } from "../sagas";
import { addValidatorUsername, fetchValidateUserToken, setValidateError } from "../actions";
import * as requests from "../../../../services/api/requests";

beforeEach(() => {
	jest.clearAllMocks();
	jest.restoreAllMocks();
});

describe("test validateUserEmailSaga", () => {
	it("test saga logic if request returns positive response", () => {
		const token = "123";
		const mockRequestBody = { token };
		const mockDataResponseSuccess = { message: "success", error: null, username: "test username" };

		const validateUserRequest = jest
			.spyOn(requests, "validateUserRequest")
			.mockImplementationOnce(() => Promise.resolve());

		const saga = testSaga(validateUserEmailSaga, fetchValidateUserToken(token));

		saga
			.next()
			.call(requests.validateUserRequest, mockRequestBody)
			.next(mockDataResponseSuccess)

			.put(addValidatorUsername(mockDataResponseSuccess.username))
			.next()

			.isDone();
	});
	it("test saga logic if request returns negative response", () => {
		const token = "123";
		const mockRequestBody = { token };
		const mockDataResponseFailed = { message: "fail", error: "test error", username: "" };

		const validateUserRequest = jest
			.spyOn(requests, "validateUserRequest")
			.mockImplementationOnce(() => Promise.resolve());

		const saga = testSaga(validateUserEmailSaga, fetchValidateUserToken(token));

		saga
			.next()
			.call(requests.validateUserRequest, mockRequestBody)
			.next(mockDataResponseFailed)

			.put(setValidateError(mockDataResponseFailed.error))
			.next()

			.isDone();
	});
	it("test saga logic if request throw an error", () => {
		const token = "123";
		const testError = "test error";
		const mockRequestBody = { token };
		const mockDataResponseFailed = { message: "fail", error: "test error", username: "" };

		const validateUserRequest = jest
			.spyOn(requests, "validateUserRequest")
			.mockImplementationOnce(() => Promise.resolve());

		const saga = testSaga(validateUserEmailSaga, fetchValidateUserToken(token));

		saga
			.next()
			.call(requests.validateUserRequest, mockRequestBody)
			.throw(testError)

			.put(setValidateError(mockDataResponseFailed.error))
			.next()

			.isDone();
	});
});
