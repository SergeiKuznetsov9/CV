import { useContext } from "react";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import {
  Theme,
  ThemeContext,
  ThemeContextProps,
} from "../../providers/themeProvider";
import cls from "./themeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextProps;

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    changeTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className={cls.themeSwitcher}>
      {theme === Theme.LIGHT ? (
        <MoonIcon className={cls.themeIcon} />
      ) : (
        <SunIcon className={cls.themeIcon} />
      )}
    </button>
  );
};
