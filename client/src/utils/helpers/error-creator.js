import { useTranslation } from "react-i18next";
import { ERROR_INTERNAL_SERVER, ERROR_NOT_VALID_DATA, ERROR_INVALID_TOKEN } from "../../constants";

export const errorCreator = error => {
	console.log("errorCreator", error);

	const { t: translate } = useTranslation();

	switch (error) {
		case ERROR_INTERNAL_SERVER:
			return translate("errors.server");

		case ERROR_NOT_VALID_DATA:
			return translate("errors.userdata");

		case ERROR_INVALID_TOKEN:
			return translate("errors.server");

		default:
			return translate("errors.server");
	}
};
