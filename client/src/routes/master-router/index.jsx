import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { MainPageRoute, VerificationPageRoute } from "../slave-router";

export const MainRouterLayout = () => {
	return (
		<Switch>
			<MainPageRoute exact path="/main" />
			<VerificationPageRoute path="/user/:token" />
			<Redirect to="/main" />
		</Switch>
	);
};
