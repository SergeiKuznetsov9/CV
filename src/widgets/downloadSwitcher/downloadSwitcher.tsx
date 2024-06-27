import { useTranslation } from "react-i18next";
import cls from "./downloadSwitcher.module.scss";
import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../../providers/themeProvider";

export const DownloadSwitcher = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext) as ThemeContextProps;

  const downloadFile = () => {
    const fileName = `cv-${theme}-${i18n.language}.pdf`;
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button className={cls.downloadSwitcher} onClick={downloadFile}>
        {t("Скачать")}
      </button>
    </>
  );
};
