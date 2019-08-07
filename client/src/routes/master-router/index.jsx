import React from "react";
import { Switch } from "react-router-dom";
import { MainPageRoute, VerificationPageRoute } from "../slave-router";

export const MainRouterLayout = () => {
	return (
		<Switch>
			<MainPageRoute exact path="/" />
			<VerificationPageRoute exact path="/user/:token" />
			<Redirect to='/'>
		</Switch>
	);
};
