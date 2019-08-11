import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import "./user-box-sender.css";

export const UserBoxSender = ({ username, handleReset, intl }) => {
	return (
		<div className="complete-user-box">
			<p className="complete-user-box__text">сообщение пользователю {username} успешно отправлено</p>
			<button className="complete-user-box__button" onClick={handleReset}>
				{/* new mail */}
				<FormattedMessage id="test" defaultMessage="default message" />
			</button>
		</div>
	);
};

// export const UserBoxSender = injectIntl(UserBoxSenderComponent);
