import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/clients.css";
import "./styles/portfolio.css";
import "./styles/legal.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);