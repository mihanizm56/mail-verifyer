import React, { memo } from "react";
import "./SVGIcon.css";

type SVGIconProps = {
	path: string,
};

export const SVGIcon = memo(({ path }: SVGIconProps) => (
	<object type="image/svg+xml" data={`${path}`} className="icon">
		>Your browser does not support SVGs
	</object>
));
