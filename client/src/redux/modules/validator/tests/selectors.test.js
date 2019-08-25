import { getValidatorErrorState, getValidatorUsername } from "../selectors";

describe("test Selectors", () => {
	it("getValidatorErrorState choosen data", () => {
		const testStore = {
			validatorDataStorage: {
				error: null,
				username: "",
			},
		};
		const selected = getValidatorErrorState(testStore);

		expect(selected).toEqual(testStore.validatorDataStorage.error);
	});
	it("getValidatorUsername choosen data", () => {
		const testStore = {
			validatorDataStorage: {
				error: null,
				username: "",
			},
		};
		const selected = getValidatorUsername(testStore);

		expect(selected).toEqual(testStore.validatorDataStorage.username);
	});
});
