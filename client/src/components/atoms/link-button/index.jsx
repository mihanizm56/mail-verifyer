import React from "react";
import { NavLink } from "react-router-dom";
import { OpenSansText } from "../../../components";
import sn from "classnames";
import "./link-button.css";

export const LinkButton = ({ to, text, handleButtonClick }) => (
	<NavLink exact to={to} className={sn("link-button")}>
		<OpenSansText text={text} isButton />
	</NavLink>
);

LinkButton.defaultProps = {
	handleButtonClick: () => console.log("default handleButtonClick"),
};
