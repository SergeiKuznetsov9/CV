import { useContext } from "react";
import cls from "./header.module.scss";
import {
  Theme,
  ThemeContext,
  ThemeContextProps,
} from "../../providers/themeProvider";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    console.log(i18n);
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const { changeTheme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <header className={cls.Header}>
      <button onClick={toggleLanguage}>{t("Поменять язык")}</button>
      <button onClick={() => changeTheme(Theme.LIGHT)}>
        {t("Светлая Тема")}
      </button>
      <button onClick={() => changeTheme(Theme.DARK)}>
        {t("Темная Тема")}
      </button>
    </header>
  );
};
