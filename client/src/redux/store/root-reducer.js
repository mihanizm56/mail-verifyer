import { combineReducers } from "redux";
import validatorReducer from "../modules/validator";
import senderReducer from "../modules/sender";

export const rootReducer = combineReducers({
	senderDataStorage: senderReducer,
	validatorDataStorage: validatorReducer,
});
