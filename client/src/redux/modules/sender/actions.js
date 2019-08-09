import { SEND_USER_EMAIL, ADD_SENDER_USERNAME } from "./constants";

export const fetchSendUserEmail = payload => ({ type: SEND_USER_EMAIL, payload });

export const addUsername = payload => ({ type: ADD_SENDER_USERNAME, payload });
