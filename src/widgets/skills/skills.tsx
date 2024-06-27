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
      <div className={cls.contentDesktop}>
        <ul className={cls.column}>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux (RTK, RTK Query)</li>
          <li>HTML5 (+{t("адаптивная верстка")})</li>
        </ul>
        <ul className={cls.column}>
          <li>CSS, SASS</li>
          <li>Tailwind</li>
          <li>UI-{t("библиотеки")}: Ant, UI-materials, MUI, CoreComponents</li>
        </ul>
        <ul className={cls.column}>
          <li>Node.js + Hapi</li>
          <li>Git</li>
          <li>Webpack</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>{t("Методология FSD")}</li>
        </ul>
      </div>
      <div className={cls.contentTablet}>
        <ul className={cls.column}>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux (RTK, RTK Query)</li>
          <li>HTML5 (+{t("адаптивная верстка")})</li>
          <li>CSS, SASS</li>
          <li>Tailwind</li>
        </ul>
        <ul className={cls.column}>
          <li>UI-{t("библиотеки")}: Ant, UI-materials, MUI, CoreComponents</li>
          <li>Node.js + Hapi</li>
          <li>Git</li>
          <li>Webpack</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>{t("Методология FSD")}</li>
        </ul>
      </div>
      <div className={cls.contentMobile}>
        <ul className={cls.column}>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux (RTK, RTK Query)</li>
          <li>HTML5 (+{t("адаптивная верстка")})</li>
          <li>CSS, SASS</li>
          <li>Tailwind</li>
          <li>UI-{t("библиотеки")}: Ant, UI-materials, MUI, CoreComponents</li>
          <li>Node.js + Hapi</li>
          <li>Git</li>
          <li>Webpack</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>{t("Методология FSD")}</li>
        </ul>
      </div>
      <div className={cls.addition}>
        {t("Имеется опыт разработки с использованием Angular(2+) и RxJS")}
      </div>
    </section>
  );
};
