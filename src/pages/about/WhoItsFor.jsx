import { COLORS, FONT } from "../../styles/shared";

const ROLES = [
  {
    icon: "🏠", title: "Residents", color: "#e8f5ff", border: "#b8d8f8", textColor: "#0a4a80",
    desc: "Manage everything related to your vehicles and guests from the app.",
    capabilities: ["Register & manage vehicles", "Invite visitors & generate QR passes", "Reserve parking spots in advance", "View parking history & pay fees online"],
  },
  {
    icon: "👤", title: "Visitors", color: "#f0f0ff", border: "#c8c8f8", textColor: "#2a2a90",
    desc: "Enter and park with a simple QR code — no registration needed.",
    capabilities: ["Receive a QR entry code via SMS or email", "Enter the compound and park temporarily", "No account required"],
  },
  {
    icon: "🛡️", title: "Security Guards", color: "#fff8e8", border: "#f8d880", textColor: "#805000",
    desc: "Fast tools to manage gate activity and verify visitors in real time.",
    capabilities: ["Scan QR codes at the gate", "Approve or deny vehicle entry", "Monitor live gate activity", "Manually open or close barriers"],
  },
  {
    icon: "📊", title: "Parking Operators", color: "#efffef", border: "#a8e8a8", textColor: "#0a600a",
    desc: "Full visibility over your parking facility's occupancy and sessions.",
    capabilities: ["Monitor live occupancy by zone", "View and manage active sessions", "Configure parking zones and rules", "Blacklist or whitelist vehicles"],
  },
  {
    icon: "⚙️", title: "System Admins", color: "#fff0f8", border: "#f0b8d8", textColor: "#800040",
    desc: "Complete control over the platform and all its components.",
    capabilities: ["Manage all users & roles", "Configure cameras and hardware", "Generate reports & analytics", "Set access policies & system settings"],
  },
];

export default function WhoItsFor() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "14px" }}>
          WHO IT'S FOR
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: COLORS.dark, letterSpacing: "-0.8px", marginBottom: "16px" }}>
          Built for every role in the facility
        </h1>
        <p style={{ fontSize: "16px", color: "#555", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          SmartPark serves everyone — from residents to admins — with role-specific tools and access levels.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {ROLES.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex", gap: "24px", alignItems: "flex-start",
              padding: "24px 28px", borderRadius: "18px",
              background: r.color, border: `1.5px solid ${r.border}`,
            }}
          >
            <div
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "#fff", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "26px", flexShrink: 0,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {r.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "18px", fontWeight: 700, color: r.textColor, marginBottom: "4px" }}>
                {r.title}
              </div>
              <div style={{ fontSize: "14px", color: "#555", marginBottom: "14px", lineHeight: 1.5 }}>
                {r.desc}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {r.capabilities.map((cap, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: "13px", padding: "5px 12px", borderRadius: "999px",
                      background: "#fff", color: r.textColor,
                      border: `1px solid ${r.border}`, fontWeight: 500,
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}