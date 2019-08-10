import {
	VALIDATE_USER,
	ADD_VALIDATOR_USERNAME,
	ERROR_VALIDATE_FETCH,
	LOADING_START_VALIDATOR,
	LOADING_FINISH_VALIDATOR,
} from "./constants";

export const fetchValidateUserEmail = payload => ({ type: VALIDATE_USER, payload });

export const addValidatorUsername = payload => ({ type: ADD_VALIDATOR_USERNAME, payload });

export const setValidateError = payload => ({ type: ERROR_VALIDATE_FETCH, payload });

export const fetchLoadingValidatorStart = () => ({ type: LOADING_START_VALIDATOR });

export const fetchLoadingValidatorFinish = () => ({ type: LOADING_FINISH_VALIDATOR });
