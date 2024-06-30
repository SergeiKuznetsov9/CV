import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: "ru",
    lng: "ru",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: process.env.REACT_APP_API_TRANSLATIONS,
    },
  });

export default i18n;
