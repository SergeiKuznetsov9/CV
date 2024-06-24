import { useTranslation } from "react-i18next";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { Experience } from "../experience/experience";
import { Education } from "../education/education";
import { Courses } from "../courses/courses";

import cls from "./rightSide.module.scss";

export const RightSide = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.RightSide}>
      <h1 className={cls.name}>{t("Кузнецов Сергей")}</h1>
      <h2 className={cls.position}>{t("Frontend-разработчик")}</h2>
      <p className={cls.location}>
        <LocationIcon width="15px" height="15px" />
        <span>{t("Республика Беларусь, г.Гомель")}</span>
      </p>
      <Experience />
      <Education />
      <Courses />
    </section>
  );
};
