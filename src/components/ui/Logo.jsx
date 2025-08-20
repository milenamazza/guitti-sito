
import React from "react";
import { glow, colors } from "../../lib/colors";

export default function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="group flex items-center gap-3" aria-label="Torna alla home">
      <svg width="36" height="36" viewBox="0 0 64 64" className="shrink-0" role="img" aria-label="Logo Guitti">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor={colors.red} />
            <stop offset="100%" stopColor={colors.redDark} />
          </linearGradient>
        </defs>
        <rect rx="14" width="64" height="64" fill="url(#g)" />
        <path d="M18 42l6-20 6 10 10-12 6 22" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 8px rgba(255,31,75,0.6))" }} />
      </svg>
      <span className="text-xl font-extrabold text-white tracking-tight" style={glow()}>
        Guitti <span className="opacity-80">Senza Carrozzone</span>
      </span>
    </button>
  );
}
