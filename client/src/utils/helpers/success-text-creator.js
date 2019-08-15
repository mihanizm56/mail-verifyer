import { useTranslation } from "react-i18next";

export const getSuccessText = ({ username }) => {
	const { t: translate } = useTranslation();

	return translate("success.verified", { username });
};
