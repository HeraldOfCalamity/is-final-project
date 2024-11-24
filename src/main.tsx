import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AppTheme from "./components/AppTheme.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppTheme>
        <App />
      </AppTheme>
    </BrowserRouter>
  </StrictMode>
);
