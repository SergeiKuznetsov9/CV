import { MainPage } from "./pages/main/MainPage";
import cls from "./app.module.scss";
import { Header } from "./widgets/header/header";

export const App = () => {
  return (<>
      {/* <Header className={cls.header} /> */}
      <MainPage />
    </>)
};
