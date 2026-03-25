import { COLORS, FONT, inputStyle, btnPrimary } from "../../styles/shared";

export default function LoginForm({ onSwitch, onClose }) {
  return (
    <>
      <h2 style={{ fontSize: "22px", fontWeight: 700, color: COLORS.dark, marginBottom: "6px", fontFamily: FONT }}>
        Welcome back
      </h2>
      <p style={{ fontSize: "14px", color: COLORS.muted, marginBottom: "24px", fontFamily: FONT }}>
        Sign in to your account to continue
      </p>

      <input placeholder="Email address" type="email" style={inputStyle} />
      <input placeholder="Password" type="password" style={{ ...inputStyle, marginTop: "12px" }} />

      <div style={{ textAlign: "right", margin: "10px 0 20px", fontFamily: FONT }}>
        <span style={{ fontSize: "13px", color: COLORS.accent, cursor: "pointer" }}>
          Forgot password?
        </span>
      </div>

      <button style={btnPrimary}>Sign In →</button>

      <p style={{ textAlign: "center", fontSize: "13px", color: COLORS.muted, marginTop: "20px", fontFamily: FONT }}>
        Don't have an account?{" "}
        <span
          onClick={() => onSwitch("register")}
          style={{ color: COLORS.accent, fontWeight: 600, cursor: "pointer" }}
        >
          Create one
        </span>
      </p>
    </>
  );
}