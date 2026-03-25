import { COLORS, FONT } from "../../styles/shared";

const FEATURE_GROUPS = [
  {
    label: "User Features", icon: "👤", color: "#e8f4ff", border: "#b8d4f8",
    features: ["Vehicle registration", "Parking history tracking", "Pre-arrival / reservation", "Online payment", "Real-time updates & notifications"],
  },
  {
    label: "Security Features", icon: "🔒", color: "#fff8e8", border: "#f8d880",
    features: ["Authorized vehicle management", "Vehicle blacklist system", "Camera monitoring integration", "Suspicious activity tracking", "Intrusion detection"],
  },
  {
    label: "Smart Parking", icon: "🤖", color: "#efffef", border: "#a8e8a8",
    features: ["Auto number plate recognition (ANPR)", "Smart barrier control", "Real-time occupancy monitoring", "Automatic space assignment", "Zone management (Residents, VIP, Staff, Visitors)"],
  },
  {
    label: "Admin Features", icon: "⚙️", color: "#f0f0ff", border: "#c0c8f8",
    features: ["Manage users & vehicles", "Reports & statistics", "Monitor system status", "Parking slot configuration", "Camera & hardware management"],
  },
];

export default function SystemFeatures() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "14px" }}>
          SYSTEM FEATURES
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: COLORS.dark, letterSpacing: "-0.8px", marginBottom: "16px" }}>
          Everything you need, built in
        </h1>
        <p style={{ fontSize: "16px", color: "#555", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          From smart parking detection to admin analytics — all features are included out of the box.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "16px" }}>
        {FEATURE_GROUPS.map((group, i) => (
          <div
            key={i}
            style={{
              padding: "24px", borderRadius: "18px",
              background: group.color, border: `1.5px solid ${group.border}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <span style={{ fontSize: "22px" }}>{group.icon}</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: COLORS.dark }}>{group.label}</span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {group.features.map((f, j) => (
                <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#333" }}>
                  <span style={{ color: COLORS.accent, fontSize: "12px", fontWeight: 700 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}