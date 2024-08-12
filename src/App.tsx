import { MainPage } from "./pages/main/MainPage";
import cls from "./app.module.scss";
import { Header } from "./widgets/header/header";
import { PetProjectPage } from "./pages/petProjects/PetProjectsPage";

export const App = () => {
  return (
    <div className={cls.app}>
      <Header className={cls.header} />
      <MainPage />
      <PetProjectPage />
    </div>
  );
};
