import senderDataStorage from "../reducer";
import {
	addSenderUsername,
	setSenderError,
	resetSenderError,
	fetchLoadingSenderStart,
	fetchLoadingSenderFinish,
	createNewMail,
} from "../actions";

describe("test reducer", () => {
	describe("test addSenderUsername action", () => {
		const testPayload = "test username";
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, addSenderUsername(testPayload));

		it("get default value in state0", () => {
			expect(state0.username).toEqual("");
		});

		it("get testData in state1", () => {
			expect(state1.username).toEqual(testPayload);
		});
	});
	describe("test setSenderError action", () => {
		const testPayload = "error test";
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, setSenderError(testPayload));

		it("get default value in state0", () => {
			expect(state0.error).toEqual(null);
		});

		it("get testData in state1", () => {
			expect(state1.error).toEqual(testPayload);
		});
	});
	describe("test resetSenderError action", () => {
		const testError = "error test";
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, setSenderError(testError));
		const state2 = senderDataStorage(state1, resetSenderError());

		it("get default value in state0", () => {
			expect(state0.error).toEqual(null);
		});

		it("get testData in state1", () => {
			expect(state1.error).toEqual(testError);
		});

		it("get testData in state1", () => {
			expect(state2.error).toEqual(null);
		});
	});
	describe("test fetchLoadingSenderStart action", () => {
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, fetchLoadingSenderStart());

		it("get default value in state0", () => {
			expect(state0.isLoading).toBeFalsy();
		});

		it("get testData in state1", () => {
			expect(state1.isLoading).toBeTruthy();
		});
	});
	describe("test fetchLoadingSenderFinish action", () => {
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, fetchLoadingSenderStart());
		const state2 = senderDataStorage(state1, fetchLoadingSenderFinish());

		it("get default value in state0", () => {
			expect(state0.isLoading).toBeFalsy();
		});

		it("get testData in state1", () => {
			expect(state1.isLoading).toBeTruthy();
		});

		it("get testData in state1", () => {
			expect(state2.isLoading).toBeFalsy();
		});
	});
	describe("test createNewMail action", () => {
		const initialState = {
			isLoading: false,
			error: null,
			username: "",
		};
		const fullState = {
			isLoading: true,
			error: "test error",
			username: "test username",
		};
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, addSenderUsername(fullState.username));
		const state2 = senderDataStorage(state1, setSenderError(fullState.error));
		const state3 = senderDataStorage(state2, fetchLoadingSenderStart());
		const state4 = senderDataStorage(state3, createNewMail());

		it("get username value in state1", () => {
			expect(state1.username).toEqual(fullState.username);
		});

		it("get error value in state2", () => {
			expect(state2.error).toEqual(fullState.error);
		});

		it("get default value in state3", () => {
			expect(state3.isLoading).toBeTruthy();
		});

		it("get full state in state3", () => {
			expect(state3).toEqual(fullState);
		});

		it("get default value in state4", () => {
			expect(state4).toEqual(initialState);
		});
	});
});
