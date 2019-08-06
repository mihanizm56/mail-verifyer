import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createAppStore, history } from "./redux/store";
import { App } from "./modules";
import { ConnectedRouter } from "connected-react-router";
import "./styles/main.css";
import "./styles/shared.css";
import "./styles/keyframes.css";
import "./assets/fonts/index.css";

const ROOT_ELEMENT = document.getElementById("root");
const store = createAppStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	ROOT_ELEMENT
);
