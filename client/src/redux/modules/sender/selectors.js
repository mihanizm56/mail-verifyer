import { createSelector } from "reselect";

const loadingState = state => state.senderDataStorage.isLoading;
const errorState = state => state.senderDataStorage.error;

export const getSenderLoadingState = createSelector(
	[loadingState],
	state => state
);

export const getSenderErrorState = createSelector(
	[errorState],
	state => state
);
