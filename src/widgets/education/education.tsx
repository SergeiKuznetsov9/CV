import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as EducationIcon } from "../../assets/icons/education_cap.svg";

import cls from "./education.module.scss";

export const Education = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle title={t("образование")} Icon={EducationIcon} />
    </section>
  );
};
