import { MainPage } from "./pages/main/MainPage";
import cls from "./app.module.scss";
import { useContext } from "react";
import {
  Theme,
  ThemeContext,
  ThemeContextProps,
} from "./providers/themeProvider/themeContext";

export const App = () => {
  const { changeTheme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <div className={cls.app}>
      <button onClick={() => changeTheme(Theme.DARK)}>DarkTheme</button>
      <button onClick={() => changeTheme(Theme.LIGHT)}>LightTheme</button>
      <MainPage />
    </div>
  );
};
