// 🎨 COLORS SYSTEM
export const COLORS = {
  primary: "#4F46E5",        // main brand
  secondary: "#06B6D4",      // accent

  background: "#FFFFFF",
  surface: "#F8FAFC",

  dark: "#0F172A",           // main text
  muted: "#64748B",          // secondary text

  borderLight: "#E5E7EB",

  bgLight: "#F3F4F6",
  bgHover: "#F1F5F9",

  success: "#22C55E",
  error: "#EF4444",
};


// 🔤 FONT SYSTEM
export const FONT = "'Inter', sans-serif";


// ✏️ INPUT STYLE (Reusable)
export const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: `1px solid ${COLORS.borderLight}`,
  fontSize: "14px",
  outline: "none",
  fontFamily: FONT,
  transition: "0.2s ease",
};


// 🔘 PRIMARY BUTTON
export const btnPrimary = {
  backgroundColor: COLORS.primary,
  color: "#fff",
  padding: "12px 18px",
  borderRadius: "10px",
  border: "none",
  fontSize: "14px",
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: FONT,
  transition: "0.2s ease",
};


// 🔘 SECONDARY BUTTON
export const btnSecondary = {
  backgroundColor: COLORS.surface,
  color: COLORS.dark,
  padding: "12px 18px",
  borderRadius: "10px",
  border: `1px solid ${COLORS.borderLight}`,
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  fontFamily: FONT,
};


// 🌫️ SHADOWS
export const SHADOW = {
  light: "0 4px 12px rgba(0,0,0,0.06)",
  medium: "0 8px 24px rgba(0,0,0,0.08)",
  heavy: "0 12px 40px rgba(0,0,0,0.12)",
};