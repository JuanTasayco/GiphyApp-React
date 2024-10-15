import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GiphyApp from "./GiphyApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global/styles.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GiphyApp></GiphyApp>
  </StrictMode>
);
