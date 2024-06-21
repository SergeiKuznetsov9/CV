import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContextProps = {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);
