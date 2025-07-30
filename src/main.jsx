import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // or ./app.css if that's your Tailwind file

import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
