import { StickerLine } from "../../components/stickerLine/stickerLine";
import cls from "./languages.module.scss";

export const Languages = () => {
  return (
    <section className={cls.Languages}>
      <StickerLine text="языки" className={cls.sticker} />
      <div className={cls.item}>
        <span>Английский</span>
        <span className={cls.value}>B1 - средний</span>
      </div>
      <div className={cls.item}>
        <span>Русский</span>
        <span className={cls.value}>Родной</span>
      </div>
    </section>
  );
};
