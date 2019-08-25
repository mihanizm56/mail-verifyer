import { VALIDATE_USER, ADD_VALIDATOR_USERNAME, ERROR_VALIDATE_FETCH } from "./constants";

// saga subscriber
export const fetchValidateUserEmail = payload => ({ type: VALIDATE_USER, payload });

export const addValidatorUsername = payload => ({ type: ADD_VALIDATOR_USERNAME, payload });

export const setValidateError = payload => ({ type: ERROR_VALIDATE_FETCH, payload });
