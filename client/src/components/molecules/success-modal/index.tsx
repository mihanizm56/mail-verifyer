import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { OpenSansText, LinkButton } from "../..";
import "./success-modal.css";

type SuccessModalProps = {
	handleButtonClick?: () => void,
	successText: string,
	buttonClickRedirectsTo: string,
};

export const SuccessModal = memo(({ handleButtonClick, successText, buttonClickRedirectsTo }: SuccessModalProps) => {
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
});
