import { useTranslation } from "react-i18next";
import cls from "./languageSwitcher.module.scss";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <button onClick={toggleLanguage} className={cls.languageSwitcher}>
      {t("English")}
    </button>
  );
};
