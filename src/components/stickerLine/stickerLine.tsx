import { FC } from "react";
import cls from "./stickerLine.module.scss";
import classNames from "classnames";

type StickerLineProps = {
  text: string;
  className: string;
};

export const StickerLine: FC<StickerLineProps> = ({ text, className }) => {
  return <h3 className={classNames(cls.StickerLine, className)}>{text}</h3>;
};
