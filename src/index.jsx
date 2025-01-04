import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./navbar.jsx";

createRoot(document.querySelector("#root")).render(
  <>
    <Navbar/>
    <App/>
  </>
)