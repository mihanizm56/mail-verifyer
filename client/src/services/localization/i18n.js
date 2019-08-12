import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import common_en from "./locales/en/translation.json";
import common_ru from "./locales/ru/translation.json";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		debug: true,

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},

		// resources: {
		// 	en: {
		// 		translation: { mail: { new: "test-ru" } },
		// 	},
		// 	ru: {
		// 		translation: { mail: { new: "test-en" } },
		// 	},
		// },
	});

export default i18n;
