import React from "react";
import errorIcon from "../../../assets/icons/icon-error.svg";
import { Link } from "react-router-dom";
import { SVGComponent, OpenSansText, LinkButton } from "../../../components";
import { errorCreator } from "../../../utils/helpers/error-creator";
import "./error-modal.css";

export const ErrorModal = ({ errorText, handleButtonClick }) => {
	return (
		<div className="error-modal">
			<SVGComponent path={errorIcon} />
			<div className="error-modal__content">
				<OpenSansText text="Тип ошибки: " />
				<OpenSansText text={errorCreator(errorText)} />
			</div>
			<div className="error-modal__button">
				<LinkButton to="/send" text="Отправить заново" handleButtonClick={handleButtonClick} />
			</div>
		</div>
	);
};

ErrorModal.defaultProps = {
	handleButtonClick: () => console.log("default handleButtonClick"),
};
