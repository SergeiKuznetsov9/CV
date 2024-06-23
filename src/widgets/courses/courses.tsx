import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as CoursesIcon } from "../../assets/icons/courses.svg";

import cls from "./courses.module.scss";

export const Courses = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle title={t("курсы")} Icon={CoursesIcon} />
    </section>
  );
};
