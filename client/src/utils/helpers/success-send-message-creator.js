import { useTranslation } from "react-i18next";

export const createSendSuccessMessage = ({ username }) => {
	const { t: translate } = useTranslation();
	return translate("success.send-email", { username });
};
