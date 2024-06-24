import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as CoursesIcon } from "../../assets/icons/courses.svg";

import cls from "./courses.module.scss";

export const Courses = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle
        title={t("курсы")}
        Icon={CoursesIcon}
        className={cls.devider}
      />
      <div className={cls.content}>
        <div className={cls.point}>2021</div>
        <div className={cls.description}>
          <p className={cls.organization}>{t("IT-Академия")}</p>
          <p className={cls.course}>
            {t("Разработка веб-приложений с использованием Javascript")}
          </p>
        </div>
      </div>
      <div className={cls.content}>
        <div className={cls.point}>2021</div>
        <div className={cls.description}>
          <p className={cls.organization}>{t("IT-Академия")}</p>
          <p className={cls.course}>
            {t("Разработка веб-сайтов с использованием HTML, CSS и JavaScript")}
          </p>
        </div>
      </div>
    </section>
  );
};
