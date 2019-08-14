import React from "react";
import { OpenSansText, LinkButton } from "../../../components";
import { getSuccessText } from "../../../utils";
import "./success-modal.css";

export const SuccessModal = ({ username }) => (
	<div className="success-modal">
		<div className="success-modal__text">
			<OpenSansText text={getSuccessText({ username })} />
		</div>
		<div className="success-modal__button">
			<LinkButton to="send" text="Отправить заново" />
		</div>
	</div>
);
