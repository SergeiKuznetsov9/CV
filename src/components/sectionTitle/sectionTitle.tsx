import { FC } from "react";
import cls from "./sectionTitle.module.scss";
import classNames from "classnames";

type SectionTitleProps = {
  className: string;
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const SectionTitle: FC<SectionTitleProps> = ({
  title,
  Icon,
  className,
}) => {
  return (
    <div className={classNames(cls.SectionTitle, className)}>
      <span className={cls.title}>{title}</span>
      <hr className={cls.line} />
      <div className={cls.iconBlock}>{<Icon className={cls.icon} />}</div>
    </div>
  );
};
