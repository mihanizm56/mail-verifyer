import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const options = {
	fallbackLng: "en",
	debug: true,
	backend: {
		allowMultiLoading: false,
	},
	interpolation: {
		escapeValue: false,
	},
	load: "languageOnly",
};

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init(options);

export default i18n;
