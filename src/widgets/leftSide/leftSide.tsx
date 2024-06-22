import { Contacts } from "../contacts/contacts";
import cls from "./leftSide.module.scss";

export const LeftSide = () => {
  return (
    <section className={cls.LeftSide}>
      <Contacts />
    </section>
  );
};
