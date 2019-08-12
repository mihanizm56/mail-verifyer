import React from "react";
import { useTranslation } from "react-i18next";

export const ErrorBox = ({ error, username }) => {
	const { t: translate } = useTranslation();

	return (
		<div>
			<p>{translate("error-box.title")}</p>
			<p>{translate("error-box.error", { error })}</p>
			<p>{translate("error-box.username", { username })}</p>
		</div>
	);
};
