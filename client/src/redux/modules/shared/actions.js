import { ERROR_FETCH } from "./constants";

export const fetchError = payload => ({ type: ERROR_FETCH, payload });
