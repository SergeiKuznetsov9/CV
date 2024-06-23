import { useTranslation } from "react-i18next";
import { StickerLine } from "../../components/stickerLine/stickerLine";
import cls from "./languages.module.scss";

export const Languages = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.Languages}>
      <StickerLine text={t("языки")} className={cls.sticker} />
      <div className={cls.item}>
        <span>{t("Английский")}</span>
        <span className={cls.value}>{t("B1 - средний")}</span>
      </div>
      <div className={cls.item}>
        <span>{t("Русский")}</span>
        <span className={cls.value}>{t("Родной")}</span>
      </div>
    </section>
  );
};
