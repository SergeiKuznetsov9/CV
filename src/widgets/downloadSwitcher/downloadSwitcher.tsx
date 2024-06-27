import { useTranslation } from "react-i18next";
import cls from "./downloadSwitcher.module.scss";

export const DownloadSwitcher = () => {
  const { t } = useTranslation();

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
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
