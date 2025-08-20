
import React from "react";
import Logo from "../ui/Logo";
import { Menu, X } from "lucide-react";
import { glow } from "../../lib/colors";
import { NavLink } from "react-router-dom";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const pages = [
    { to: "/", label: "Home" },
    { to: "/spettacoli", label: "Spettacoli" },
    { to: "/laboratori", label: "Laboratori" },
    { to: "/calendario", label: "Calendario" },
    { to: "/contatti", label: "Contatti" },
    { to: "/sostienici", label: "Sostienici" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5" style={{ background: "rgba(10,10,12,0.8)" }}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-8 py-3">
        <NavLink to="/" aria-label="Home">
          <Logo />
        </NavLink>

        <nav className="hidden md:flex items-center gap-2">
          {pages.map(p => (
            <NavLink
              key={p.to}
              to={p.to}
              className={({ isActive }) => `px-3 py-2 text-sm font-medium transition-all ${isActive ? "text-white" : "text-gray-200 hover:text-white"}`}
              style={({ isActive }) => (isActive ? glow() : {})}
              end={p.to === "/"}
            >
              {p.label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Apri menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/5" style={{ background: "rgba(10,10,12,0.95)" }}>
          {pages.map(p => (
            <NavLink
              key={p.to}
              to={p.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block w-full text-left px-4 py-3 text-sm font-medium border-b border-white/5 ${isActive ? "text-white" : "text-gray-200"}`}
              style={({ isActive }) => (isActive ? glow() : {})}
              end={p.to === "/"}
            >
              {p.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
