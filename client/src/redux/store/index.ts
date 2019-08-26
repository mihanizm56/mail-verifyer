import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import { rootReducer } from "./root-reducer";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

type ISenderDataStorage = {
	isLoading: boolean,
	error?: string,
	username?: string,
};

type IValidatorDataStorage = {
	error?: string,
	username?: string,
};

export type StoreType = {
	senderDataStorage: ISenderDataStorage,
	validatorDataStorage: IValidatorDataStorage,
};

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const createAppStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(sagaMiddleware),
			composeEnhancers
		)
	);

	sagaMiddleware.run(rootSaga);
	return store;
};
