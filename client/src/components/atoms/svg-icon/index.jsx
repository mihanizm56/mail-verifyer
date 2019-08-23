//
import React, { memo } from "react";
import "./SVGIcon.css";

// type SVGType = {
// 	path: string,
// };

export const SVGIcon = memo(({ path }) => (
	<object type="image/svg+xml" data={`${path}`} className="icon" alt="icon">
		>Your browser does not support SVGs
	</object>
));
