import { SEND_USER_EMAIL, ADD_SENDER_USERNAME, ERROR_SENDER_FETCH } from "./constants";

export const fetchSendUserEmail = payload => ({ type: SEND_USER_EMAIL, payload });

export const addSenderUsername = payload => ({ type: ADD_SENDER_USERNAME, payload });

export const setSenderError = payload => ({ type: ERROR_SENDER_FETCH, payload });
