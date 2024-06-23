import ReactDOM from "react-dom/client";
import { App } from "./app";
import { ThemeProvider } from "./providers/themeProvider";
import "./configs/i18n";
import "./styles/index.scss";
import { Suspense } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <Suspense fallback={""}>
      <App />
    </Suspense>
  </ThemeProvider>
);
