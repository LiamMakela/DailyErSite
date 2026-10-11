import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import NightlyErPage from "./pages/NightlyErPage.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/nightlyer" element={<NightlyErPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
