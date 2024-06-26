import { useTranslation } from "react-i18next";
import { Experience } from "../experience/experience";

import cls from "./rightSide.module.scss";
import { Skills } from "../skills/skills";

export const RightSide = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.RightSide}>
      <h1 className={cls.name}>{t("Кузнецов Сергей")}</h1>
      <h2 className={cls.position}>{t("Frontend-разработчик")}</h2>
      <Skills />
      <Experience />
    </section>
  );
};
