import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { MainPageRoute, VerificationPageRoute } from "../slave-router";

export const MainRouterLayout = () => {
	return (
		<Switch>
			<MainPageRoute exact path="/user" />
			<VerificationPageRoute exact path="/user/:token" />
			<Redirect to="/user" />
		</Switch>
	);
};
