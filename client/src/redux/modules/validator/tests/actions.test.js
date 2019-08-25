import { fetchValidateUserToken, addValidatorUsername, setValidateError } from "../actions";
import { VALIDATE_USER, ADD_VALIDATOR_USERNAME, ERROR_VALIDATE_FETCH } from "../constants";

describe("test actions", () => {
	it("test fetchValidateUserToken", () => {
		const action = {
			type: VALIDATE_USER,
			payload: "test 1",
		};

		expect(fetchValidateUserToken("test 1")).toEqual(action);
	});
	it("test addValidatorUsername", () => {
		const action = {
			type: ADD_VALIDATOR_USERNAME,
			payload: "test 2",
		};

		expect(addValidatorUsername("test 2")).toEqual(action);
	});
	it("test setValidateError", () => {
		const action = {
			type: ERROR_VALIDATE_FETCH,
			payload: "test 3",
		};

		expect(setValidateError("test 3")).toEqual(action);
	});
});
