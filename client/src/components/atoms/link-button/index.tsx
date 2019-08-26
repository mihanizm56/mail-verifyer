import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { OpenSansText } from "../../../components";
import "./link-button.css";

type LinkButtonProps = {
	to: string,
	text: string,
	handleButtonClick?: () => void,
};

export const LinkButton = memo(({ to, text, handleButtonClick }: LinkButtonProps) => (
	<NavLink exact to={to} className={classNames("link-button")} onClick={handleButtonClick}>
		<OpenSansText text={text} isButton />
	</NavLink>
));
