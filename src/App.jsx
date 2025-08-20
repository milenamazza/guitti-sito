
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import SpettacoliPage from "./pages/SpettacoliPage";
import LaboratoriPage from "./pages/LaboratoriPage";
import CalendarioPage from "./pages/CalendarioPage";
import ContattiPage from "./pages/ContattiPage";
import SostieniciPage from "./pages/SostieniciPage";
import { colors } from "./lib/colors";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen" style={{ background: colors.bg, color: colors.text }}>
      <style>{`
        ::selection { background: ${colors.red}55; color: white; }
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-thumb { background: ${colors.red}66; border-radius: 999px; }
      `}</style>

      <HashRouter>
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <main onClick={()=> mobileMenuOpen && setMobileMenuOpen(false)}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/spettacoli" element={<SpettacoliPage />} />
            <Route path="/laboratori" element={<LaboratoriPage />} />
            <Route path="/calendario" element={<CalendarioPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
            <Route path="/sostienici" element={<SostieniciPage />} />
          </Routes>
          <Footer />
        </main>
      </HashRouter>
    </div>
  );
}
