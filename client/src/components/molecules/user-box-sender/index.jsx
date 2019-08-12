import React, { Component } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import "./user-box-sender.css";

export class WrappedComponent extends Component {
	test1 = () => {
		this.props.i18n.changeLanguage("en");
	};

	test2 = () => {
		this.props.i18n.changeLanguage("ru");
	};

	render = () => {
		console.log("render component");

		const { t, username, handleReset } = this.props;

		return (
			<div className="complete-user-box">
				<p className="complete-user-box__text">сообщение пользователю {username} успешно отправлено</p>
				<button className="complete-user-box__button">
					{/* new mail */}

					{t("mail.new")}
				</button>
				<button onClick={this.test1}>en</button>
				<button onClick={this.test2}>ru</button>
			</div>
		);
	};
}

export const UserBoxSender = withTranslation()(WrappedComponent);

// export const UserBoxSender = ({ username, handleReset }) => {
// 	const { t } = useTranslation();

// 	return (
// 		<div className="complete-user-box">
// 			<p className="complete-user-box__text">сообщение пользователю {username} успешно отправлено</p>
// 			<button className="complete-user-box__button" onClick={handleReset}>
// 				{/* new mail */}
// 				{t("mail.new")}
// 			</button>
// 		</div>
// 	);
// };
