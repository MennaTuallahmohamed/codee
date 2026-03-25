import { useState, useEffect } from "react";
import LoginForm    from "./LoginForm";
import RoleStep     from "./RoleStep";
import RegisterForm from "./RegisterForm";
import { COLORS, FONT } from "../../styles/shared";

export default function AuthModal({ mode, onClose }) {
  const [formMode,     setFormMode]     = useState(mode);       // 'login' | 'register'
  const [step,         setStep]         = useState(mode === "register" ? "role" : "form");
  const [selectedRole, setSelectedRole] = useState(null);

  // reset when parent changes mode (e.g. switching from login → register)
  useEffect(() => {
    setFormMode(mode);
    setStep(mode === "register" ? "role" : "form");
    setSelectedRole(null);
  }, [mode]);

  function switchTo(newMode) {
    setFormMode(newMode);
    setStep(newMode === "register" ? "role" : "form");
    setSelectedRole(null);
  }

  return (
    /* Backdrop */
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(4px)",
        zIndex: 2000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "36px",
          width: "100%",
          maxWidth: "440px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
          fontFamily: FONT,
          position: "relative",
          animation: "slideUp 0.25s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "#f3f3f3", border: "none", borderRadius: "50%",
            width: "30px", height: "30px", cursor: "pointer",
            fontSize: "16px", color: "#666",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          ×
        </button>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
          <div
            style={{
              width: "34px", height: "34px", borderRadius: "10px",
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px",
            }}
          >
            🅿
          </div>
          <span style={{ fontSize: "18px", fontWeight: 700, color: COLORS.dark }}>SmartPark</span>
        </div>

        {/* Content */}
        {formMode === "login" && (
          <LoginForm onSwitch={switchTo} onClose={onClose} />
        )}

        {formMode === "register" && step === "role" && (
          <RoleStep
            selectedRole={selectedRole}
            onSelect={setSelectedRole}
            onNext={() => setStep("form")}
            onSwitch={switchTo}
          />
        )}

        {formMode === "register" && step === "form" && (
          <RegisterForm
            selectedRole={selectedRole}
            onBack={() => setStep("role")}
          />
        )}
      </div>
    </div>
  );
}