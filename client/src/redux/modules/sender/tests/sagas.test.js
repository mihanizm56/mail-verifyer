import { put, call } from "redux-saga/effects";
import { testSaga } from "redux-saga-test-plan";
import { sendUserEmailSaga } from "../sagas";
import {
	fetchLoadingSenderStart,
	fetchLoadingSenderFinish,
	resetSenderError,
	setSenderError,
	addSenderUsername,
} from "../actions";
import * as requests from "../../../../services/api/requests";
import * as sleeper from "../../../../utils/helpers/sleep";

beforeEach(() => {
	jest.clearAllMocks();
	jest.restoreAllMocks();
});

jest.mock("../../../../utils/helpers/sleep", () => ({
	sleep: jest.fn(),
}));

describe("test sendUserEmailSaga", () => {
	it("test saga logic if request returns positive response", () => {
		const formPayload = { username: "test username", email: "test email" };
		const mockRequestBody = { body: { ...formPayload } };
		const mockDataResponseSuccess = { message: "success", error: null };

		const sendUserRequest = jest
			.spyOn(requests, "sendUserRequest")
			.mockImplementationOnce(() => Promise.resolve(mockDataResponseSuccess));

		const saga = testSaga(sendUserEmailSaga, addSenderUsername(formPayload));

		saga
			.next()
			.put(fetchLoadingSenderStart())

			.next()
			.put(resetSenderError())
			.next()

			.next()
			.call(requests.sendUserRequest, mockRequestBody)
			.next(mockDataResponseSuccess)

			.put(addSenderUsername(formPayload.username))

			.next()
			.put(fetchLoadingSenderFinish())

			.next()
			.isDone();
	});
	it("test saga logic if request returns negative response", () => {
		const formPayload = { username: "test username", email: "test email" };
		const mockRequestBody = { body: { ...formPayload } };
		const mockDataResponseFailed = { message: "fail", error: "test error" };
		const sendUserRequest = jest.spyOn(requests, "sendUserRequest").mockImplementationOnce(() => Promise.resolve());
		const saga = testSaga(sendUserEmailSaga, addSenderUsername(formPayload));

		saga
			.next()
			.put(fetchLoadingSenderStart())

			.next()
			.put(resetSenderError())
			.next()

			.next()
			.call(requests.sendUserRequest, mockRequestBody)
			.next(mockDataResponseFailed)

			.put(setSenderError(mockDataResponseFailed.error))

			.next()
			.put(fetchLoadingSenderFinish())

			.next()
			.isDone();
	});
	it("test saga logic if request throw an error", () => {
		const formPayload = { username: "test username", email: "test email" };
		const testErrorValue = "test error value";
		const mockRequestBody = { body: { ...formPayload } };
		const sendUserRequest = jest.spyOn(requests, "sendUserRequest").mockImplementationOnce(() => Promise.resolve());
		const saga = testSaga(sendUserEmailSaga, addSenderUsername(formPayload));

		saga
			.next()
			.put(fetchLoadingSenderStart())

			.next()
			.put(resetSenderError())
			.next()

			.next()
			.call(requests.sendUserRequest, mockRequestBody)
			.throw(testErrorValue)

			.put(setSenderError(testErrorValue))

			.next()
			.put(fetchLoadingSenderFinish())

			.next()
			.isDone();
	});
});
