import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css"; // Import Tailwind CSS file
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
