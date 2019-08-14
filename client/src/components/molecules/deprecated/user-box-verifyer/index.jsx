import React from "react";
import { useTranslation } from "react-i18next";

export const UserBoxVerifyer = ({ username }) => {
	const { t: translate } = useTranslation();

	return (
		<div>
			<p>{translate("user-verify.success", { username })}</p>
		</div>
	);
};
