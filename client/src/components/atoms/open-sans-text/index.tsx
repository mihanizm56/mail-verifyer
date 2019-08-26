import React from "react";
import classNames from "classnames";
import "./OpenSansText.css";

type OpenSansTextProps = {
	text: string,
	bold?: boolean,
	isButton?: boolean,
};

export const OpenSansText = ({ text, bold, isButton }: OpenSansTextProps) => (
	<span
		className={classNames("open-sans-text", {
			"open-sans-text--button": isButton,
		})}
	>
		{text}
	</span>
);
