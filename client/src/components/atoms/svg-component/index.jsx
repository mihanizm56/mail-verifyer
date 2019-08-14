//
import React, { memo } from "react";
import "./SVGComponent.css";

type SVGType = {
	path: string,
};

export const SVGComponent = memo(({ path }: SVGType) => (
	<object type="image/svg+xml" data={`${path}`} className="icon" alt="icon">
		>Your browser does not support SVGs
	</object>
));
