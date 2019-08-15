import React, { createRef } from "react";
import "./OpenSansText.css";
import sn from "classnames";
import { getClass } from "../../../utils";

export const OpenSansText = ({ text, bold, isButton }: OpenSansTextProps) => (
	<span
		className={sn("open-sans-text", {
			"open-sans-text--button": isButton,
		})}
	>
		{text}
	</span>
);
