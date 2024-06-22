import { useContext } from "react";
import cls from "./header.module.scss";
import {
  Theme,
  ThemeContext,
  ThemeContextProps,
} from "../../providers/themeProvider";

export const Header = () => {
  const { changeTheme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <header className={cls.Header}>
      <button onClick={() => changeTheme(Theme.LIGHT)}>LightTheme</button>
      <button onClick={() => changeTheme(Theme.DARK)}>BlackTheme</button>
    </header>
  );
};
