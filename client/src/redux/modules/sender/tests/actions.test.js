import {
	fetchSendUserEmail,
	addSenderUsername,
	setSenderError,
	resetSenderError,
	fetchLoadingSenderStart,
	fetchLoadingSenderFinish,
	createNewMail,
} from "../actions";
import {
	SEND_USER_EMAIL,
	ADD_SENDER_USERNAME,
	ERROR_SENDER_FETCH,
	LOADING_START_SENDER,
	LOADING_FINISH_SENDER,
	ERROR_SENDER_RESET,
	NEW_MESSAGE,
} from "../constants";

describe("test actions", () => {
	it("test fetchSendUserEmail", () => {
		const action = {
			type: SEND_USER_EMAIL,
			payload: "test",
		};

		expect(fetchSendUserEmail("test")).toEqual(action);
	});
	it("test addSenderUsername", () => {
		const action = {
			type: ADD_SENDER_USERNAME,
			payload: "test",
		};

		expect(addSenderUsername("test")).toEqual(action);
	});
	it("test setSenderError", () => {
		const action = {
			type: ERROR_SENDER_FETCH,
			payload: "test",
		};

		expect(setSenderError("test")).toEqual(action);
	});
	it("test resetSenderError", () => {
		const action = {
			type: ERROR_SENDER_RESET,
		};

		expect(resetSenderError("test")).toEqual(action);
	});
	it("test fetchLoadingSenderStart", () => {
		const action = {
			type: LOADING_START_SENDER,
		};

		expect(fetchLoadingSenderStart("test")).toEqual(action);
	});
	it("test fetchLoadingSenderFinish", () => {
		const action = {
			type: LOADING_FINISH_SENDER,
		};

		expect(fetchLoadingSenderFinish("test")).toEqual(action);
	});
	it("test createNewMail", () => {
		const action = {
			type: NEW_MESSAGE,
		};

		expect(createNewMail("test")).toEqual(action);
	});
});
