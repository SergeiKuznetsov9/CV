import { LeftSide } from "../leftSide/leftSide";
import { RightSide } from "../rightSide/rightSide";
import cls from "./cv.module.scss";

export const Cv = () => {
  return (
    <section className={cls.Cv}>
      <LeftSide />
      <RightSide />
    </section>
  );
};
