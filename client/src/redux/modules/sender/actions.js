import {
	SEND_USER_EMAIL,
	ADD_SENDER_USERNAME,
	ERROR_SENDER_FETCH,
	LOADING_START_SENDER,
	LOADING_FINISH_SENDER,
	ERROR_SENDER_RESET,
	NEW_MESSAGE,
} from "./constants";

// saga subscriber
export const addSenderUsername = payload => ({ type: ADD_SENDER_USERNAME, payload });

export const fetchSendUserEmail = payload => ({ type: SEND_USER_EMAIL, payload });

export const setSenderError = payload => ({ type: ERROR_SENDER_FETCH, payload });

export const resetSenderError = () => ({ type: ERROR_SENDER_RESET });

export const fetchLoadingSenderStart = () => ({ type: LOADING_START_SENDER });

export const fetchLoadingSenderFinish = () => ({ type: LOADING_FINISH_SENDER });

export const createNewMail = () => ({ type: NEW_MESSAGE });
