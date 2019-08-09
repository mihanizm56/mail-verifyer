import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";
import { LOADING_START, LOADING_FINISH, ERROR_FETCH } from "../shared/constants";

const initialState = {
	isLoading: false,
	error: null,
};

const loadingLens = lensPath(["isLoading"]);
const errorLens = lensPath(["error"]);

const senderDataStorage = (state = initialState, action) => {
	switch (action.type) {
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

export default senderDataStorage;
