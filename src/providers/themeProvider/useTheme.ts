import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext";

type UseThemeResult = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme: Theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
