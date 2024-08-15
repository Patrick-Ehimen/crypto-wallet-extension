import { StrictMode } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

import App from "./App.jsx";

import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </StrictMode>
);
