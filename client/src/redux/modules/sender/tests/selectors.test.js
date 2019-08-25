import { getSenderLoadingState, getSenderErrorState, getSenderUsername } from "../selectors";

describe("test Selectors", () => {
	it("getSenderLoadingState choosen data", () => {
		const testStore = {
			senderDataStorage: {
				isLoading: true,
				error: "test error",
				username: "test username",
			},
		};
		const selected = getSenderLoadingState(testStore);

		expect(selected).toEqual(testStore.senderDataStorage.isLoading);
	});
	it("getSenderErrorState choosen data", () => {
		const testStore = {
			senderDataStorage: {
				isLoading: true,
				error: "test error",
				username: "test username",
			},
		};
		const selected = getSenderErrorState(testStore);

		expect(selected).toEqual(testStore.senderDataStorage.error);
	});
	it("getSenderUsername choosen data", () => {
		const testStore = {
			senderDataStorage: {
				isLoading: true,
				error: "test error",
				username: "test username",
			},
		};
		const selected = getSenderUsername(testStore);

		expect(selected).toEqual(testStore.senderDataStorage.username);
	});
});
