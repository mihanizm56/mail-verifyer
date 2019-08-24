import { createSelector } from "reselect";

const errorState = state => state.validatorDataStorage.error;
const getUsername = state => state.validatorDataStorage.username;

export const getValidatorErrorState = createSelector(
	[errorState],
	state => state
);

export const getValidatorUsername = createSelector(
	[getUsername],
	username => username
);
