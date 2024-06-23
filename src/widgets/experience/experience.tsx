import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as SuitcaseIcon } from "../../assets/icons/suitcase.svg";

import cls from "./experience.module.scss";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle title={t("опыт работы")} Icon={SuitcaseIcon} />
    </section>
  );
};
