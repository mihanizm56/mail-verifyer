import React, { memo } from "react";
import { OpenSansText } from "../../../components";
import classNames from "classnames";
import "./button.css";

export const Button = memo(({ text, handleButtonClick, type }) => (
	<button type={type} className={classNames("button")} onClick={handleButtonClick}>
		<OpenSansText text={text} isButton />
	</button>
));
