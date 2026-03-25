import { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";
import { NAV_ITEMS } from "./navConfig";
import { COLORS, FONT } from "../../styles/shared";

export default function Navbar({ onAuthOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${COLORS.border}`,
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: FONT,
      }}
    >
      {/* ── Logo ── */}
      <div
        onClick={() => (window.location.href = "/")}
        style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      >
        <div
          style={{
            width: "36px", height: "36px", borderRadius: "10px",
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "20px", color: "#fff",
          }}
        >
          🅿
        </div>
        <span style={{ fontSize: "18px", fontWeight: 700, color: COLORS.dark, letterSpacing: "-0.3px" }}>
          SmartPark
        </span>
      </div>

      {/* ── Nav Links ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            style={{ position: "relative" }}
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              style={{
                background: activeDropdown === item.label ? COLORS.bgLight : "transparent",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: FONT,
                color: activeDropdown === item.label ? COLORS.accent : "#444",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.15s ease, background 0.15s ease",
              }}
            >
              {item.label}
              <span
                style={{
                  fontSize: "9px",
                  transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  opacity: 0.6,
                }}
              >
                ▼
              </span>
            </button>

            <Dropdown items={item.dropdown} visible={activeDropdown === item.label} />
          </div>
        ))}
      </div>

      {/* ── Auth Buttons ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={() => onAuthOpen("login")}
          style={{
            background: "none",
            border: `1.5px solid ${COLORS.borderHover}`,
            padding: "9px 20px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: FONT,
            color: "#444",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.borderHover; e.currentTarget.style.color = "#444"; }}
        >
          Sign in
        </button>

        <button
          onClick={() => onAuthOpen("register")}
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
            border: "none",
            padding: "9px 20px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: FONT,
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(45,110,245,0.35)",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}