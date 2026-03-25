import { useState } from "react";

// ── Shared design tokens ──────────────────────────────────────────────────────
const COLORS = {
  primary:    "#185FA5",
  primaryHov: "#1558b0",
  light:      "#E6F1FB",
  border:     "#378ADD",
  borderDef:  "#d1d9e6",
  dark:       "#1a1a2e",
  muted:      "#6b7280",
  bg:         "#fafbff",
  bgPage:     "#f5f7fa",
};

const FONT = "'Inter', sans-serif";

const inputStyle = {
  width: "100%",
  display: "block",
  padding: "12px 14px",
  border: `1.5px solid ${COLORS.borderDef}`,
  borderRadius: "10px",
  fontSize: "14px",
  fontFamily: FONT,
  color: COLORS.dark,
  background: COLORS.bg,
  outline: "none",
  transition: "border-color .2s, box-shadow .2s",
  marginTop: "12px",
};

const btnPrimary = {
  width: "100%",
  padding: "13px",
  background: COLORS.primary,
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: 600,
  fontFamily: FONT,
  cursor: "pointer",
  marginTop: "20px",
  letterSpacing: "0.01em",
  transition: "background .2s",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function FocusInput({ style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        ...inputStyle,
        ...style,
        ...(focused
          ? {
              borderColor: COLORS.primary,
              boxShadow: `0 0 0 3px rgba(26,111,212,.1)`,
              background: "#fff",
            }
          : {}),
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

// ── Account-type selector (shown first) ──────────────────────────────────────

const ROLES = [
  {
    value: "business",
    label: "Business account",
    desc:  "Manage your Fleet account or Personal Pages for visitor passes and subusers.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="17" width="28" height="16" rx="3" stroke={COLORS.primary} strokeWidth="1.8"/>
        <path d="M13 17v-4a7 7 0 0114 0v4" stroke={COLORS.primary} strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="11" y="23" width="6" height="4" rx="1" stroke={COLORS.primary} strokeWidth="1.5"/>
        <circle cx="26" cy="25" r="2" stroke={COLORS.primary} strokeWidth="1.4"/>
        <path d="M23 30c0-1.7 1.3-3 3-3s3 1.3 3 3" stroke={COLORS.primary} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: "customer",
    label: "Customer account",
    desc:  "Access account settings, billing history, vehicle information and more.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="16" cy="14" r="5.5" stroke={COLORS.primary} strokeWidth="1.8"/>
        <path d="M6 31c0-5.5 4.5-10 10-10" stroke={COLORS.primary} strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="28" cy="19" r="4" stroke={COLORS.primary} strokeWidth="1.6"/>
        <path d="M22 31c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={COLORS.primary} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function RoleSelector({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: 700,
          color: COLORS.dark,
          marginBottom: "28px",
          fontFamily: FONT,
          letterSpacing: "-0.4px",
        }}
      >
        Sign in to Parkmobile
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {ROLES.map((role) => {
          const isHov = hovered === role.value;
          return (
            <div
              key={role.value}
              onClick={() => onSelect(role.value)}
              onMouseEnter={() => setHovered(role.value)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: isHov ? "#fff" : COLORS.bgPage,
                border: `1.5px solid ${isHov ? COLORS.border : "#e5e9f0"}`,
                borderRadius: "14px",
                padding: "28px 28px 24px",
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              <div style={{ marginBottom: "14px" }}>{role.icon}</div>
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: COLORS.primary,
                  marginBottom: "8px",
                  fontFamily: FONT,
                }}
              >
                {role.label}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: COLORS.muted,
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  fontFamily: FONT,
                }}
              >
                {role.desc}
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: COLORS.primary,
                  fontFamily: FONT,
                }}
              >
                Sign in
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke={COLORS.primary}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Register form ─────────────────────────────────────────────────────────────

function RegisterForm({ selectedRole, onBack }) {
  const role = ROLES.find((r) => r.value === selectedRole);
  const [hovBtn, setHovBtn] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "22px",
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: COLORS.primary,
            fontSize: "14px",
            fontFamily: FONT,
            padding: 0,
            fontWeight: 500,
          }}
        >
          ← Back
        </button>
        {role && (
          <div
            style={{
              fontSize: "13px",
              color: COLORS.muted,
              fontFamily: FONT,
              background: COLORS.light,
              borderRadius: "8px",
              padding: "4px 10px",
            }}
          >
            <strong style={{ color: COLORS.dark }}>{role.label}</strong>
          </div>
        )}
      </div>

      <h2
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: COLORS.dark,
          marginBottom: "20px",
          fontFamily: FONT,
        }}
      >
        Your details
      </h2>

      <FocusInput placeholder="Full name"        type="text"     style={{ marginTop: 0 }} />
      <FocusInput placeholder="Email address"    type="email"    />
      <FocusInput placeholder="Phone number"     type="tel"      />
      <FocusInput placeholder="Password"         type="password" />
      <FocusInput placeholder="Confirm password" type="password" style={{ marginBottom: "20px" }} />

      <button
        style={{
          ...btnPrimary,
          background: hovBtn ? COLORS.primaryHov : COLORS.primary,
        }}
        onMouseEnter={() => setHovBtn(true)}
        onMouseLeave={() => setHovBtn(false)}
      >
        Create Account →
      </button>

      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#aaa",
          marginTop: "14px",
          fontFamily: FONT,
        }}
      >
        By registering you agree to our{" "}
        <a href="#" style={{ color: COLORS.primary }}>Terms</a> &{" "}
        <a href="#" style={{ color: COLORS.primary }}>Privacy Policy</a>
      </p>
    </>
  );
}

// ── Root export ───────────────────────────────────────────────────────────────

export default function AuthCard() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bgPage,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "36px 32px",
          width: "100%",
          maxWidth: "440px",
          boxShadow: "0 4px 24px rgba(0,0,0,.07)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: COLORS.primary,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: COLORS.dark }}>
              ParkMobile
            </div>
            <div style={{ fontSize: "10px", color: COLORS.muted }}>by Arrive</div>
          </div>
        </div>

        {/* Step router */}
        {selectedRole === null ? (
          <RoleSelector onSelect={setSelectedRole} />
        ) : (
          <RegisterForm
            selectedRole={selectedRole}
            onBack={() => setSelectedRole(null)}
          />
        )}
      </div>
    </div>
  );
}