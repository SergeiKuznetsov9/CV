import { Contacts } from "../contacts/contacts";
import { Languages } from "../languages/languages";
import { Skills } from "../skills/skills";
import cls from "./leftSide.module.scss";

export const LeftSide = () => {
  return (
    <section className={cls.LeftSide}>
      <Contacts />
      <Languages />
      <Skills />
    </section>
  );
};
