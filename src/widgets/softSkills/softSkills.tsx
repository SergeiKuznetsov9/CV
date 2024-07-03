import { useTranslation } from "react-i18next";
import { StickerLine } from "../../components/stickerLine/stickerLine";
import cls from "./softSkills.module.scss";

export const SoftSkills = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.Education}>
      <StickerLine text={t("мягкие навыки")} className={cls.sticker} />
      <div className={cls.state}>
        <ul>
          <li>Внимательность</li>
          <li>Ответственность</li>
          <li>Пунктуалность</li>
          <li>Хороший уровень коммуникации</li>
          <li>Умение работать в команде</li>
          <li>Нацеленность на саморазвитие в выбранной сфере, в т.ч. постоянное обучение</li>
        </ul>
      </div>
    </section>
  );
};
