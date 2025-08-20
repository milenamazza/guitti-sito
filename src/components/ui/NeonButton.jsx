
import React from "react";
import { colors, borderGlow } from "../../lib/colors";

export default function NeonButton({ children, href, onClick, className = "" }) {
  const Tag = href ? "a" : "button";
  const common = "inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold transition-all";
  const props = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
    : { onClick };
  return (
    <Tag
      {...props}
      className={`${common} hover:scale-105 ${className}`}
      style={{ color: colors.text, background: `linear-gradient(180deg, ${colors.red} 0%, ${colors.redDark} 100%)`, ...borderGlow() }}
    >
      {children}
    </Tag>
  );
}
