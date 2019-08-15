import React from "react";
import { OpenSansText, LinkButton } from "../../../components";
import { getSuccessText } from "../../../utils";
import "./success-modal.css";

export const SuccessModal = ({ handleButtonClick, successText, buttonClickRedirectsTo }) => (
	<div className="success-modal">
		<div className="success-modal__text">
			<OpenSansText text={successText} />
		</div>
		<div className="success-modal__button">
			<LinkButton to={buttonClickRedirectsTo} text="Отправить заново" handleButtonClick={handleButtonClick} />
		</div>
	</div>
);
