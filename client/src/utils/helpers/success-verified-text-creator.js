import { useTranslation } from "react-i18next";

export const getVerifiedSuccessText = ({ username }) => {
	const { t: translate } = useTranslation();

	return translate("success.verified", { username });
};
