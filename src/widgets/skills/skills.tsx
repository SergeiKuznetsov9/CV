import { useTranslation } from "react-i18next";
import { ReactComponent as SkillsIcon } from "../../assets/icons/skills.svg";

import cls from "./skills.module.scss";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.Skills}>
      <SectionTitle
        title={t("навыки")}
        Icon={SkillsIcon}
        className={cls.devider}
      />
      <div className={cls.content}>
        <div className={cls.column}>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>Redux (RTK, RTK Query)</div>
          <div>HTML5 (+{t("адаптивная верстка")})</div>
        </div>
        <div className={cls.column}>
          <div>CSS, SASS</div>
          <div>Tailwind</div>
          <div>
            UI-{t("библиотеки")}: Ant, UI-materials, MUI, CoreComponents
          </div>
        </div>
        <div className={cls.column}>
          <div>Node.js + Hapi</div>
          <div>Git</div>
          <div>Webpack</div>
          <div>Cypress</div>
          <div>Jest</div>
          <div>{t("Методология FSD")}</div>
        </div>
      </div>
      <div className={cls.addition}>
        {t("Имеется опыт разработки с использованием Angular(2+) и RxJS")}
      </div>
    </section>
  );
};
