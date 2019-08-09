import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";
import { LOADING_START, LOADING_FINISH, ERROR_FETCH, SET_USERNAME } from "../shared/constants";

const initialState = {
	isLoading: false,
	error: null,
	username: "",
};

const loadingLens = lensPath(["isLoading"]);
const errorLens = lensPath(["error"]);
const usernameLens = lensPath(["username"]);

const validatorDataStorage = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERNAME:
			return set(usernameLens, action.payload, state);
		case LOADING_START:
			return set(loadingLens, true, state);
		case LOADING_FINISH:
			return set(loadingLens, false, state);
		case ERROR_FETCH:
			return set(errorLens, action.payload, state);

		default:
			return state;
	}
};

export default validatorDataStorage;
