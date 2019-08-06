import React from "react";
import { Switch } from "react-router-dom";
import { MainPageRoute } from "../page-route";

export const MainRouterLayout = () => {
	return (
		<Switch>
			<MainPageRoute path="/" />
		</Switch>
	);
};
