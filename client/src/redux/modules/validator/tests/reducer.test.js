import senderDataStorage from "../reducer";
import { addValidatorUsername, setValidateError } from "../actions";

describe("test reducer", () => {
	describe("test addValidatorUsername action", () => {
		const testPayload = "test username";
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, addValidatorUsername(testPayload));

		it("get default value in state0", () => {
			expect(state0.username).toEqual("");
		});

		it("get testData in state1", () => {
			expect(state1.username).toEqual(testPayload);
		});
	});
	describe("test setValidateError action", () => {
		const testPayload = "error test";
		const state0 = senderDataStorage(undefined, "get_defaut_state");
		const state1 = senderDataStorage(state0, setValidateError(testPayload));

		it("get default value in state0", () => {
			expect(state0.error).toEqual(null);
		});

		it("get testData in state1", () => {
			expect(state1.error).toEqual(testPayload);
		});
	});
});
