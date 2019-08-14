import React from "react";
import { OpenSansText } from "../../../components";
import sn from "classnames";
import "./button.css";

export const LinkButton = ({ text, handleButtonClick }) => (
	<div className={sn("button")} onClick={handleButtonClick}>
		<OpenSansText text={text} isButton />
	</div>
);

LinkButton.defaultProps = {
	handleButtonClick: () => console.log("default handleButtonClick"),
};
