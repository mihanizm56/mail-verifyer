import React from "react";
import { NavLink } from "react-router-dom";
import { OpenSansText } from "../../../components";
import classNames from "classnames";
import "./link-button.css";

export const LinkButton = ({ to, text, handleButtonClick }) => (
	<NavLink exact to={to} className={classNames("link-button")} onClick={handleButtonClick}>
		<OpenSansText text={text} isButton />
	</NavLink>
);

LinkButton.defaultProps = {
	handleButtonClick: () => console.log("default handleButtonClick"),
};
