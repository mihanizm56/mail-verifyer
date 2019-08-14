import React from "react";
import errorIcon from "../../../assets/icons/icon-error.svg";
import { Link } from "react-router-dom";
import { SVGComponent, OpenSansText, LinkButton } from "../../../components";
import { errorCreator } from "../../../utils/helpers/error-creator/error-creator";
import "./error-modal.css";

export const ErrorModal = ({ error, isButtonRedirect = true }) => {
	return (
		<div className="error-modal">
			<SVGComponent path={errorIcon} />
			<div className="error-modal__content">
				<OpenSansText text="Тип ошибки: " />
				<OpenSansText text="Самая длинная ошибка ............///" />
			</div>
			{isButtonRedirect && (
				<div className="error-modal__button">
					<LinkButton to="/send" text="Отправить заново" />
				</div>
			)}
		</div>
	);
};
