import React from "react";
import "./user-box-sender.css";

export const UserBoxSender = ({ username, handleReset }) => {
	return (
		<div className="complete-user-box">
			<p className="complete-user-box__text">сообщение пользователю {username} успешно отправлено</p>
			<button className="complete-user-box__button" onClick={handleReset}>
				new mail
			</button>
		</div>
	);
};
