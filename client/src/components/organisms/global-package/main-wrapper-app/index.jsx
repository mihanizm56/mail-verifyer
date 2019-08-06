import React, { memo } from "react";
import { MainRouterLayout } from "../../../../routes";
import "./MainWrapper.css";

export const MainWrapper = memo(props => (
	<div className="main-wrapper">
		<MainRouterLayout />
	</div>
));
