import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as SuitcaseIcon } from "../../assets/icons/suitcase.svg";

import cls from "./experience.module.scss";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle
        title={t("опыт работы")}
        Icon={SuitcaseIcon}
        className={cls.devider}
      />
      <div className={cls.content}>
        <div className={cls.point}>
          10.2023 —
          <br />
          {t("н.в.")}
        </div>
        <div className={cls.description}>
          <p className={cls.organization}>{t("Клевертек")}</p>
          <p className={cls.position}>{t("frontend-разработчик")}</p>
          <p className={cls.chapterTitle}>{t("Обязанности")}</p>
          <ul className={cls.list}>
            <li>Разработка UI-приложения (добавление новых фич)</li>
            <li>
              Поддержка UI-приложения (поддержание в актуальном состоянии
              зависимостей)
            </li>
            <li>Устранение выявленных деффектов</li>
            <li>
              Рефакторинг кода, устранение codeSmells и прочих замечаний,
              выявленных sonarqube
            </li>
            <li>Разработка Unit и e2e тестов фронтенд части</li>
          </ul>
          <p className={cls.chapterTitle}>{t("Содержание работы")}</p>
          <p className={cls.workDescription}>
            Разрабатываемое приложение относится к сфере финтеха (для АО
            "АльфаБанк"). Построено на основе микросервисной архитектуры.
          </p>
          <p className={cls.workDescription}>
            Основная используемая технология — Реакт, также используется NodeJS;
          </p>
          <p className={cls.workDescription}>
            В сфере ответственности имеются модули, написанные как на классах,
            так и на функциях.
          </p>
          <p className={cls.workDescription}>
            В качестве стейт-менеджера — используется RTK, в т.ч. RTK-Query.
            Использование библиотек Jest и Cypress для разработки тестов.
            Подключение модулей приложения посредствам WMF (Webpack). Активное
            использование библиотеки Core-components. Устранение выявленных при
            помощи AppSec уязвимостей.
          </p>
          <p className={cls.workDescription}>
            В качестве дополнительной нагрузки осуществляется подготовка учебных
            докладов по техническим темам для принятых на работу начинающих
            специальистов
          </p>
        </div>
      </div>
      <div className={cls.content}>
        <div className={cls.point}>
          04.2023 —
          <br />
          10.2023
        </div>
        <div className={cls.description}>
          <p className={cls.organization}>{t("Асист-Лаб")}</p>
          <p className={cls.position}>{t("frontend-разработчик")}</p>
          <p className={cls.chapterTitle}>{t("Обязанности")}</p>
          <ul className={cls.list}>
            <li>
              Разработка UI-приложений с использованием различных технологий
              (React, NextJs, Angular(2+))
            </li>
          </ul>
          <p className={cls.chapterTitle}>{t("Содержание работы")}</p>
          <p className={cls.workDescription}>
            Аутсорсинговая компания, специализирующейся на работе с
            израильскими, европейскими и американскими заказчиками. На практике
            подтянул навыки владения английским языком.
          </p>
          <p className={cls.workDescription}>
            Также в процессе данного опыта посчастливилось использовать широкий
            набор инструментов разработки (Node (express), React, Next, Angular
            (естественно с плотным использованием RxJS)), а также принять
            участие в разработке фронтенд приложений различной направленности
            (приложение для клиники глазной хирургии, CRM-система с широким
            функционалом для американского заказчика, интернет портал для
            клиентов и поставщиков услуг в сфере увеселительных мероприятий…).
          </p>
        </div>
      </div>
    </section>
  );
};
