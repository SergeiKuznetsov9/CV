import { useTranslation } from "react-i18next";
import { StickerLine } from "../../components/stickerLine/stickerLine";
import cls from "./education.module.scss";

export const Education = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.Education}>
      <StickerLine text={t("образование")} className={cls.sticker} />
      <div className={cls.state}>
        <span>
          {t("Академия Министерства внутренних дел Республики Беларусь")}
        </span>
        <span>2016</span>
      </div>
      <p className={cls.spec}>{t("Факультет права, Юрист")}</p>
      <div className={cls.state}>
        <span>
          {t("Гомельский государственный университет им. Ф. Скорины")}
        </span>
        <span>2008</span>
      </div>
      <p className={cls.spec}>{t("Экономический факультет, Бухгалтер")}</p>
      <div className={cls.state}>
        <span>
          {t("Гомельский государственный университет им. Ф. Скорины")}
        </span>
        <span>2008</span>
      </div>
      <p className={cls.spec}>
        {t("Факультет переподготовки, Переводчик-референт")}
      </p>
    </section>
  );
};
