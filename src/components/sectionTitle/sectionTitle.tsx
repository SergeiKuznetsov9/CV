import { FC } from "react";
import cls from "./sectionTitle.module.scss";

type SectionTitleProps = {
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const SectionTitle: FC<SectionTitleProps> = ({ title, Icon }) => {
  return (
    <div className={cls.SectionTitle}>
      <span className={cls.title}>{title}</span>
      <hr className={cls.line} />
      <div className={cls.iconBlock}>{<Icon className={cls.icon} />}</div>
    </div>
  );
};
