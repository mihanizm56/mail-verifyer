import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import "./user-box-sender.css";

export const UserBoxSender = ({ username, handleReset }) => {
	const { t: translate } = useTranslation();

	return (
		<div className="complete-user-box">
			<p className="complete-user-box__text">{translate("mail.sended-successfully", { username })}</p>
			<button className="complete-user-box__button" onClick={handleReset}>
				{translate("mail.repeat-sending")}
			</button>
		</div>
	);
};
