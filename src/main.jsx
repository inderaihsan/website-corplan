import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import RundownKegiatan from "./pages/RundownKegiatan.jsx";
import Gallery from "./pages/Gallery.jsx";
import RHRGreenIdea from "./pages/RHRGreenIdea.jsx";
import Participants from "./pages/DaftarPeserta.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rundown-kegiatan" element={<RundownKegiatan />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rhr-green-idea" element={<RHRGreenIdea />} />
        <Route path="/participant" element={<Participants />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
