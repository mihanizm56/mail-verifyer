import { VALIDATE_USER, ADD_VALIDATOR_USERNAME } from "./constants";

export const fetchValidateUserEmail = payload => ({ type: VALIDATE_USER, payload });

export const setUsername = payload => ({ type: ADD_VALIDATOR_USERNAME, payload });
