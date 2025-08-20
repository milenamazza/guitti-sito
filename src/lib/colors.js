
export const colors = {
  bg: "#0a0a0c",
  bgSoft: "#111116",
  red: "#ff1f4b",
  redDark: "#b30e2f",
  text: "#f5f5f5",
  muted: "#c8c8c8",
};

export const glow = (c = colors.red) => ({
  textShadow: `0 0 6px ${c}80, 0 0 12px ${c}80, 0 0 24px ${c}40`,
});

export const borderGlow = (c = colors.red) => ({
  boxShadow: `0 0 12px ${c}40, inset 0 0 12px ${c}20`,
});
