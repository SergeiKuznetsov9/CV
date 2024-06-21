import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { ThemeProvider } from "./providers/themeProvider/themeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
