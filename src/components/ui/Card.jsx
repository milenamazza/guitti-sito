
import React from "react";
import { colors, borderGlow } from "../../lib/colors";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl p-6 border transition-all hover:scale-[1.02] ${className}`}
      style={{ background: `radial-gradient(120% 120% at 50% 0%, ${colors.bgSoft} 0%, ${colors.bg} 60%)`, borderColor: `${colors.red}33`, ...borderGlow() }}
    >
      {children}
    </div>
  );
}
