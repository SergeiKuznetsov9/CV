import ReactDOM from "react-dom/client";
import { App } from "./app";
import { ThemeProvider } from "./providers/themeProvider";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
