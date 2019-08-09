import React, { memo } from "react";
import { SendForm } from "../../components";
import "./App.css";

export const App = memo(() => {
	return (
		<div className="global-wrapper">
			{/* <MainWrapper /> */}
			<SendForm />
		</div>
	);
});
