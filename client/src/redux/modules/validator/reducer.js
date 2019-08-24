import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";
import { ADD_VALIDATOR_USERNAME, ERROR_VALIDATE_FETCH } from "./constants";

const initialState = {
	error: null,
	username: "",
};

const errorLens = lensPath(["error"]);
const usernameLens = lensPath(["username"]);

const validatorDataStorage = (state = initialState, action) => {
	switch (action.type) {
		case ADD_VALIDATOR_USERNAME:
			return set(usernameLens, action.payload, state);
		case ERROR_VALIDATE_FETCH:
			return set(errorLens, action.payload, state);

		default:
			return state;
	}
};

export default validatorDataStorage;
