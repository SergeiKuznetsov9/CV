import { MainPage } from "./pages/main/MainPage";
import cls from "./app.module.scss";
import { Header } from "./widgets/header/header";

export const App = () => {
  return (
    <div className={cls.app}>
      <div className={cls.blur}>
        <Header className={cls.header} />
        <MainPage />
      </div>
    </div>
  );
};
