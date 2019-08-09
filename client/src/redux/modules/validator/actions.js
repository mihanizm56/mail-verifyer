import { VALIDATE_USER } from "./constants";

export const fetchValidateUserEmail = payload => ({ type: VALIDATE_USER, payload });

export const setUsername = payload => ({ type: SET_USERNAME, payload });
