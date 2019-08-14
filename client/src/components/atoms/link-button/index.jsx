import React from "react";
import { NavLink } from "react-router-dom";
import { OpenSansText } from "../../../components";
import sn from "classnames";
import "./link-button.css";

export const LinkButton = ({ to, text, handleButtonClick }) => (
	<div className={sn("link-button")}>
		<NavLink exact onClick={handleButtonClick} to={to} className={sn("link-button__button")}>
			<OpenSansText text={text} isButton />
		</NavLink>
	</div>
);

LinkButton.defaultProps = {
	handleButtonClick: () => {},
};
