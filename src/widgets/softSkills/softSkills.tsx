import { useTranslation } from "react-i18next";
import { StickerLine } from "../../components/stickerLine/stickerLine";
import cls from "./softSkills.module.scss";

export const SoftSkills = () => {
  const { t } = useTranslation();
  return (
    <section className={cls.SoftSkills}>
      <StickerLine text={t("мягкие навыки")} className={cls.sticker} />
      <div className={cls.state}>
        <p className={cls.item}>{t("Внимательность")}</p>
        <p className={cls.item}>{t("Ответственность")}</p>
        <p className={cls.item}>{t("Пунктуалность")}</p>
        <p className={cls.item}>{t("Хороший уровень коммуникации")}</p>
        <p className={cls.item}>{t("Умение работать в команде")}</p>
        <p className={cls.item}>
          {t(
            "Нацеленность на саморазвитие в выбранной сфере, в т.ч. постоянное обучение"
          )}
        </p>
      </div>
    </section>
  );
};
