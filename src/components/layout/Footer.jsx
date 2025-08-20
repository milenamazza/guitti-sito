
import React from "react";
import { glow } from "../../lib/colors";
import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-white font-bold" style={glow()}>Guitti Senza Carrozzone</h4>
          <p className="text-gray-300 mt-2 text-sm">CF/PI: 00000000000 · Via del Teatro 1, 00000 Città</p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-gray-300 hover:text-white" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-gray-300 hover:text-white" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-gray-300 hover:text-white" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2" style={glow()}>Contatti</h5>
          <p className="text-gray-300 text-sm flex items-center gap-2"><Mail className="h-4 w-4"/><a className="hover:underline" href="mailto:info@gsc.it">info@gsc.it</a></p>
          <p className="text-gray-300 text-sm flex items-center gap-2"><Phone className="h-4 w-4"/><a className="hover:underline" href="tel:+390000000000">+39 000 000 0000</a></p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2" style={glow()}>Link utili</h5>
          <ul className="text-sm space-y-1 text-gray-300">
            <li><a href="#/sostienici" className="hover:underline">5×1000 / Dona ora</a></li>
            <li><a href="#/calendario" className="hover:underline">Calendario</a></li>
            <li><a href="#/laboratori" className="hover:underline">Laboratori</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} Guitti Senza Carrozzone · Tutti i diritti riservati</div>
    </footer>
  );
}
