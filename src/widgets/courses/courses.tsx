import { useTranslation } from "react-i18next";
import { StickerLine } from "../../components/stickerLine/stickerLine";
import cls from "./courses.module.scss";

export const Courses = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.Education}>
      <StickerLine text={t("курсы")} className={cls.sticker} />
      <div className={cls.state}>
        <span>{t("IT-Академия")}</span>
        <span>2021</span>
      </div>
      <p className={cls.spec}>
        {t("Разработка веб-приложений с использованием Javascript")}
      </p>
      <div className={cls.state}>
        <span>{t("IT-Академия")}</span>
        <span>2021</span>
      </div>
      <p className={cls.spec}>
        {t("Разработка веб-сайтов с использованием HTML, CSS и JavaScript")}
      </p>
    </section>
  );
};
