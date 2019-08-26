import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import errorIcon from "../../../assets/icons/icon-error.svg";
import { SVGIcon, OpenSansText, LinkButton } from "../..";
import { errorCreator } from "../../../utils/helpers/error-creator";
import "./error-modal.css";

type ErrorModalProps = {
	error?: string,
	handleButtonClick?: () => void,
};

export const ErrorModal = memo(({ error, handleButtonClick }: ErrorModalProps) => {
	const errorText = errorCreator(error);
	const { t: translate } = useTranslation();

	return (
		<div className="error-modal">
			<SVGIcon path={errorIcon} />
			<div className="error-modal__content">
				<OpenSansText text={translate("errors.error-type-label")} />
				<OpenSansText text={errorText} />
			</div>
			<div className="error-modal__button">
				<LinkButton to="/send" text={translate("buttons.send-new")} handleButtonClick={handleButtonClick} />
			</div>
		</div>
	);
});
