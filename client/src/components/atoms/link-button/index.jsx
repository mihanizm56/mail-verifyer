import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { OpenSansText } from "../../../components";
import "./link-button.css";

export const LinkButton = memo(({ to, text, handleButtonClick }) => (
	<NavLink exact to={to} className={classNames("link-button")} onClick={handleButtonClick}>
		<OpenSansText text={text} isButton />
	</NavLink>
));
