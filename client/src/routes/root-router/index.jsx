import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { SendPageRoute, VerificationPageRoute } from "../pages-routes";

export const MainRouterLayout = () => {
	return (
		<Switch>
			<SendPageRoute exact path="/send" />
			<VerificationPageRoute exact path="/verify/:token" />
			<Redirect to="/send" />
		</Switch>
	);
};
