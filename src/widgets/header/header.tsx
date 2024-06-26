import { FC } from "react";
import classNames from "classnames";
import { ThemeSwitcher } from "../themeSwitcher/themeSwitcher";
import cls from "./header.module.scss";
import { LanguageSwitcher } from "../languageSwitcher/languageSwitcher";
import { DownloadSwitcher } from "../downloadSwitcher/downloadSwitcher";

type HeaderProps = {
  className: string;
};

export const Header: FC<HeaderProps> = ({ className }) => (
  <header className={classNames(cls.Header, className)}>
    <div>
      <DownloadSwitcher />
    </div>
    <div className={cls.switchers}>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  </header>
);
