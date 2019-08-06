import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { rootReducer } from "./root-reducer";

export const history = createBrowserHistory();

export const createAppStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer(history),
		compose(
			applyMiddleware(routerMiddleware(history), sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
		)
	);

	sagaMiddleware.run(rootSaga);
	return store;
};
