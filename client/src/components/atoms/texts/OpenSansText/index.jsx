import React, { createRef } from "react";
import "./OpenSansText.css";
import styleName from "classnames";
import { getClass } from "../../../../utils";

export const OpenSansText = ({ text, bold }: OpenSansTextProps) => (
	<p
		style={styleName("open-sans-text", {
			bold: "bold",
		})}
	>
		{text}
	</p>
);
