import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createAppStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
// import { App } from "./modules";
import "./styles/main.css";
import "./styles/shared.css";
import "./styles/keyframes.css";
import "./styles/variables.css";
import "./assets/fonts/index.css";

import { ErrorModal, SuccessModal } from "./components";

import "./services/i18n";

const ROOT_ELEMENT = document.getElementById("root");
const store = createAppStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Suspense fallback={<div />}>
				{/* <SuccessModal username="test-username" /> */}
				{/* <ErrorModal username="test-username" error="test-error" handleButtonClick={() => console.log("check")} /> */}
				{/* <App /> */}
			</Suspense>
		</BrowserRouter>
	</Provider>,
	ROOT_ELEMENT
);
