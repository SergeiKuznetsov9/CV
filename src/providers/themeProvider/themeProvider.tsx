import { FC, ReactNode, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = () => ({
    theme,
    setTheme,
  });

  return (
    <ThemeContext.Provider value={defaultProps()}>
      {children}
    </ThemeContext.Provider>
  );
};
