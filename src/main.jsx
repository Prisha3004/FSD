import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Us4 from "./Us4.jsx";
import Us7 from "./Us7.jsx";
import H2 from "./H2.jsx";
import Calc from "./Calc.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Calc />
  </StrictMode>,
);
