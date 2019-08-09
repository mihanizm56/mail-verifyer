import { createSelector } from "reselect";

const loadingState = state => state.validatorDataStorage.isLoading;
const errorState = state => state.validatorDataStorage.error;

export const getValidatorLoadingState = createSelector(
	[loadingState],
	state => state
);

export const getValidatorErrorState = createSelector(
	[errorState],
	state => state
);
