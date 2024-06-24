import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as EducationIcon } from "../../assets/icons/education_cap.svg";

import cls from "./education.module.scss";

export const Education = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle
        title={t("образование")}
        Icon={EducationIcon}
        className={cls.devider}
      />
      <div className={cls.content}>
        <div className={cls.point}>2019</div>
        <div className={cls.description}>
          <p className={cls.organization}>
            {t("Академия Министерства внутренних дел Республики Беларусь")}
          </p>
          <p className={cls.department}>{t("Факультет права")}</p>
          <p className={cls.profession}>{t("Юрист")}</p>
        </div>
      </div>
      <div className={cls.content}>
        <div className={cls.point}>2008</div>
        <div className={cls.description}>
          <p className={cls.organization}>
            {t("Гомельский государственный университет им. Ф. Скорины, Гомель")}
          </p>
          <p className={cls.department}>{t("Экономический факультет")}</p>
          <p className={cls.profession}>{t("Бухгалтер")}</p>
        </div>
      </div>
    </section>
  );
};
