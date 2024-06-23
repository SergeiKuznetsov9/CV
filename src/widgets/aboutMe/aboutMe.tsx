import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as AccountIcon } from "../../assets/icons/account_avatar.svg";

import cls from "./aboutMe.module.scss";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle title={t("о себе")} Icon={AccountIcon} />
    </section>
  );
};
