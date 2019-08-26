import React, { memo } from "react";
import { MainWrapper } from "../../components";
import "./App.css";

export const App = memo(() => (
	<div className="global-wrapper">
		<MainWrapper />
	</div>
));
