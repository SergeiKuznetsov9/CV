import { Contacts } from "../contacts/contacts";
import { Courses } from "../courses/courses";
import { Education } from "../education/education";
import { Languages } from "../languages/languages";
import cls from "./leftSide.module.scss";

export const LeftSide = () => {
  return (
    <section className={cls.LeftSide}>
      <Contacts />
      <Languages />
      <Education />
      <Courses />
    </section>
  );
};
