import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";
import { ADD_SENDER_USERNAME, ERROR_SENDER_FETCH } from "./constants";
import { LOADING_START, LOADING_FINISH } from "../shared/constants";

const initialState = {
	isLoading: false,
	error: null,
	username: "",
};

const loadingLens = lensPath(["isLoading"]);
const errorLens = lensPath(["error"]);
const usernameLens = lensPath(["username"]);

const senderDataStorage = (state = initialState, action) => {
	switch (action.type) {
		case ADD_SENDER_USERNAME:
			return set(usernameLens, action.payload, state);
		case LOADING_START:
			return set(loadingLens, true, state);
		case LOADING_FINISH:
			return set(loadingLens, false, state);
		case ERROR_SENDER_FETCH:
			return set(errorLens, action.payload, state);

		default:
			return state;
	}
};

export default senderDataStorage;
