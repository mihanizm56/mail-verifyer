import { ERROR_FETCH, LOADING_START, LOADING_FINISH } from "./constants";

export const fetchLoadingStart = () => ({ type: LOADING_START });

export const fetchLoadingFinish = () => ({ type: LOADING_FINISH });
