import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createAppStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
// import { App } from "./modules";
import "./styles/main.css";
import "./styles/shared.css";
import "./styles/keyframes.css";
import "./assets/fonts/index.css";

import { ErrorBox } from "./components";

import "./services/i18n";

const ROOT_ELEMENT = document.getElementById("root");
const store = createAppStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Suspense fallback={<div />}>
				<ErrorBox username="test-username" error="test-error" />
				{/* <App /> */}
			</Suspense>
		</BrowserRouter>
	</Provider>,
	ROOT_ELEMENT
);
