import { createSelector } from "reselect";

const loadingState = state => state.validatorDataStorage.isLoading;
const errorState = state => state.validatorDataStorage.error;
const getUsername = state => state.validatorDataStorage.username;

export const getValidatorLoadingState = createSelector(
	[loadingState],
	state => state
);

export const getValidatorErrorState = createSelector(
	[errorState],
	state => state
);

export const getValidatorUsername = createSelector(
	[getUsername],
	username => username
);
