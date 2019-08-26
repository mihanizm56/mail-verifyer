import React, { memo } from "react";
import { OpenSansText } from "../../../components";
import classNames from "classnames";
import "./button.css";

type ButtonProps = {
	text: string,
	handleButtonClick?: () => void,
	type: "button" | "submit" | "reset" | undefined,
};

export const Button = memo(({ text, handleButtonClick, type }: ButtonProps) => (
	<button type={type} className={classNames("button")} onClick={handleButtonClick}>
		<OpenSansText text={text} isButton />
	</button>
));
