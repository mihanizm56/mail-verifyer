import React from "react";
import { useTranslation } from "react-i18next";
import errorIcon from "../../../assets/icons/icon-error.svg";
import { SVGComponent, OpenSansText, LinkButton } from "../../../components";
import { errorCreator } from "../../../utils/helpers/error-creator";
import "./error-modal.css";

export const ErrorModal = ({ error, handleButtonClick }) => {
	const errorText = errorCreator(error);
	const { t: translate } = useTranslation();

	return (
		<div className="error-modal">
			<SVGComponent path={errorIcon} />
			<div className="error-modal__content">
				<OpenSansText text={translate("errors.error-type-label")} />
				<OpenSansText text={errorText} />
			</div>
			<div className="error-modal__button">
				<LinkButton to="/send" text={translate("buttons.send-new")} handleButtonClick={handleButtonClick} />
			</div>
		</div>
	);
};

ErrorModal.defaultProps = {
	handleButtonClick: () => console.log("default handleButtonClick"),
};
