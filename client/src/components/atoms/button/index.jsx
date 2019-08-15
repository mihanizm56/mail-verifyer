import React from "react";
import { OpenSansText } from "../../../components";
import sn from "classnames";
import "./button.css";

export const Button = ({ text, handleButtonClick, type }) => (
	<button type={type} className={sn("button")} onClick={handleButtonClick}>
		<OpenSansText text={text} isButton />
	</button>
);

Button.defaultProps = {
	handleButtonClick: () => console.log("default handleButtonClick"),
};
