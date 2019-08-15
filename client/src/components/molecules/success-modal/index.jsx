import React from "react";
import { useTranslation } from "react-i18next";
import { OpenSansText, LinkButton } from "../../../components";
import { getSuccessText } from "../../../utils";
import "./success-modal.css";

export const SuccessModal = ({ handleButtonClick, successText, buttonClickRedirectsTo }) => {
	const { t: translate } = useTranslation();

	return (
		<div className="success-modal">
			<div className="success-modal__text">
				<OpenSansText text={successText} />
			</div>
			<div className="success-modal__button">
				<LinkButton
					to={buttonClickRedirectsTo}
					text={translate("buttons.send-new")}
					handleButtonClick={handleButtonClick}
				/>
			</div>
		</div>
	);
};
