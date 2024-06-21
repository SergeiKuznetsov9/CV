import { MainPage } from "./pages/main/MainPage";
import { useTheme } from "./providers/themeProvider/useTheme";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <MainPage />
    </div>
  );
}

export default App;
