import { ROLES } from "../navbar/navConfig";
import { COLORS, FONT, btnPrimary } from "../../styles/shared";

export default function RoleStep({ selectedRole, onSelect, onNext, onSwitch }) {
  return (
    <>
      <h2 style={{ fontSize: "22px", fontWeight: 700, color: COLORS.dark, marginBottom: "6px", fontFamily: FONT }}>
        Create your account
      </h2>
      <p style={{ fontSize: "14px", color: COLORS.muted, marginBottom: "20px", fontFamily: FONT }}>
        First, tell us — what's your role?
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        {ROLES.map((r) => {
          const isSelected = selectedRole === r.value;
          return (
            <div
              key={r.value}
              onClick={() => onSelect(r.value)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: "12px",
                border: `2px solid ${isSelected ? COLORS.accent : "#eee"}`,
                background: isSelected ? COLORS.bgLight : "#fff",
                cursor: "pointer",
                transition: "all 0.15s ease",
                fontFamily: FONT,
              }}
            >
              <span style={{ fontSize: "22px" }}>{r.icon}</span>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: COLORS.dark }}>{r.label}</div>
                <div style={{ fontSize: "12px", color: COLORS.muted }}>{r.desc}</div>
              </div>
              {isSelected && (
                <div style={{ marginLeft: "auto", color: COLORS.accent, fontSize: "18px" }}>✓</div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => selectedRole && onNext()}
        style={{
          ...btnPrimary,
          opacity: selectedRole ? 1 : 0.45,
          cursor: selectedRole ? "pointer" : "not-allowed",
        }}
      >
        Continue →
      </button>

      <p style={{ textAlign: "center", fontSize: "13px", color: COLORS.muted, marginTop: "16px", fontFamily: FONT }}>
        Already have an account?{" "}
        <span
          onClick={() => onSwitch("login")}
          style={{ color: COLORS.accent, fontWeight: 600, cursor: "pointer" }}
        >
          Sign in
        </span>
      </p>
    </>
  );
}