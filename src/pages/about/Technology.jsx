import { COLORS, FONT } from "../../styles/shared";

const STACK = [
  { layer: "Frontend",  items: ["React", "Next.js", "Tailwind CSS"], icon: "🖥️" },
  { layer: "Backend",   items: ["Node.js", "NestJS", "Django"],      icon: "⚡" },
  { layer: "Database",  items: ["PostgreSQL"],                        icon: "🗄️" },
  { layer: "AI & Vision", items: ["OpenCV", "YOLO"],                  icon: "🤖" },
  { layer: "Hardware",  items: ["ANPR Cameras", "Barrier Gates", "RFID Readers"], icon: "🔧" },
  { layer: "Protocols", items: ["Modbus", "ONVIF"],                   icon: "📡" },
];

const SECURITY = [
  { icon: "🔑", title: "Authentication",     desc: "Secure login with JWT-based session management." },
  { icon: "🛡️", title: "Authorization",      desc: "Role-based access control for all user types." },
  { icon: "🔒", title: "Data encryption",    desc: "All sensitive data encrypted at rest and in transit." },
  { icon: "📋", title: "Access logs",        desc: "Full audit trail of every gate event and user action." },
  { icon: "🚨", title: "Intrusion detection",desc: "Alerts triggered on suspicious or unauthorized activity." },
];

export default function Technology() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "14px" }}>
          TECHNOLOGY & SECURITY
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: COLORS.dark, letterSpacing: "-0.8px", marginBottom: "16px" }}>
          Modern stack. Hardened security.
        </h1>
        <p style={{ fontSize: "16px", color: "#555", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Built on proven technologies and designed with security at every layer.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 style={{ fontSize: "20px", fontWeight: 700, color: COLORS.dark, marginBottom: "20px" }}>
        Technology stack
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px", marginBottom: "56px" }}>
        {STACK.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "20px", borderRadius: "14px",
              background: "#fafbff", border: `1px solid ${COLORS.borderLight}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ fontSize: "20px" }}>{s.icon}</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.8px" }}>
                {s.layer}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {s.items.map((item, j) => (
                <span
                  key={j}
                  style={{
                    padding: "4px 12px", borderRadius: "999px",
                    background: COLORS.bgLight, color: COLORS.primary,
                    fontSize: "13px", fontWeight: 500, border: "1px solid #d0dcff",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Security */}
      <h2 style={{ fontSize: "20px", fontWeight: 700, color: COLORS.dark, marginBottom: "20px" }}>
        Security model
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {SECURITY.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "flex-start", gap: "16px",
              padding: "18px 20px", borderRadius: "14px",
              background: "#fff", border: `1px solid ${COLORS.borderLight}`,
            }}
          >
            <span style={{ fontSize: "22px", flexShrink: 0 }}>{s.icon}</span>
            <div>
              <div style={{ fontSize: "15px", fontWeight: 600, color: COLORS.dark, marginBottom: "3px" }}>{s.title}</div>
              <div style={{ fontSize: "13px", color: COLORS.muted, lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}