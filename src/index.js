import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter basename='/react-portfolio/'> */}
      <App />
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);
