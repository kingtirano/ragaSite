import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu.jsx";
import Slider from "./components/Slider.jsx";
import Upcoming from "./components/Upcoming.jsx";
import About from "./components/About.jsx";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Menu />
    <Slider />
    <Upcoming />
    <About />
  </React.StrictMode>
);
