import { useTranslation } from "react-i18next";
import cls from "./downloadSwitcher.module.scss";

export const DownloadSwitcher = () => {
  const { t } = useTranslation();

  return <button className={cls.downloadSwitcher}>{t("Скачать")}</button>;
};
