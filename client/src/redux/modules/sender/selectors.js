import { createSelector } from "reselect";

const loadingState = state => state.senderDataStorage.isLoading;
const errorState = state => state.senderDataStorage.error;
const getUsername = state => state.senderDataStorage.username;

export const getSenderLoadingState = createSelector(
	[loadingState],
	state => state
);

export const getSenderErrorState = createSelector(
	[errorState],
	state => state
);

export const getSenderUsername = createSelector(
	[getUsername],
	username => username
);
