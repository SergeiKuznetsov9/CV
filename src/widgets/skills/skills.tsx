import { StickerLine } from "../../components/stickerLine/stickerLine";
import cls from "./skills.module.scss";

export const Skills = () => {
  return (
    <>
      <section className={cls.Skills}>
        <StickerLine text="навыки" className={cls.sticker} />
        <div className={cls.item}>JavaScript</div>
        <div className={cls.item}>TypeScript</div>
        <div className={cls.item}>React</div>
        <div className={cls.item}>Redux (RTK, RTK Query)</div>
        <div className={cls.item}>Node.js + Hapi</div>
        <div className={cls.item}>Git</div>
        <div className={cls.item}>HTML5 (+адаптивная верстка)</div>
        <div className={cls.item}>CSS, SASS</div>
        <div className={cls.item}>Tailwind</div>
        <div className={cls.item}>
          UI-библиотеки Ant, UI-materials, MUI, CoreComponents
        </div>
        <div className={cls.item}>Webpack</div>
        <div className={cls.item}>Cypress</div>
        <div className={cls.item}>Jest</div>
        <div className={cls.item}>Методология FSD</div>
      </section>
      <section className={cls.Skills}>
        <StickerLine text="имеется опыт работы" className={cls.sticker} />

        <div className={cls.item}>Angular(2+)</div>
        <div className={cls.item}>RxJS</div>
      </section>
    </>
  );
};
