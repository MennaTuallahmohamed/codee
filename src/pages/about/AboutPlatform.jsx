import { COLORS, FONT } from "../../styles/shared";

const PROBLEMS = [
  { icon: "🚦", text: "Long queues at entry gates" },
  { icon: "📋", text: "Manual visitor verification" },
  { icon: "🅿️", text: "No real-time parking availability" },
  { icon: "💳", text: "No automated billing" },
  { icon: "🔐", text: "Security risks & unauthorized access" },
  { icon: "📊", text: "Lack of data & analytics" },
];

const SECTORS = [
  "Residential compounds", "Shopping malls", "Office buildings",
  "Hospitals", "Universities", "Smart cities",
];

export default function AboutPlatform() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "16px" }}>
          ABOUT THE PLATFORM
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: COLORS.dark, lineHeight: 1.15, letterSpacing: "-1px", marginBottom: "20px" }}>
          Smart Parking &<br />Access Control Platform
        </h1>
        <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
          A unified platform combining web, mobile, and hardware integration — ANPR cameras, smart barriers, and RFID — to automate every aspect of parking management.
        </p>
      </div>

      {/* Problems */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: COLORS.dark, marginBottom: "8px" }}>
          What we solve
        </h2>
        <p style={{ color: COLORS.muted, marginBottom: "28px", fontSize: "15px" }}>
          Most parking facilities suffer from the same set of problems.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "16px 18px", borderRadius: "14px",
                border: `1px solid ${COLORS.borderLight}`,
                background: "#fafbff",
              }}
            >
              <span style={{ fontSize: "24px" }}>{p.icon}</span>
              <span style={{ fontSize: "14px", color: COLORS.dark, fontWeight: 500 }}>{p.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Platform includes */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: COLORS.dark, marginBottom: "20px" }}>
          What the platform includes
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["Web platform", "Mobile integration", "ANPR cameras", "Smart barrier gates", "RFID readers", "Automated billing", "Real-time monitoring", "Digital visitor passes"].map((item, i) => (
            <span
              key={i}
              style={{
                padding: "8px 18px", borderRadius: "999px",
                background: COLORS.bgLight,
                color: COLORS.primary, fontSize: "14px", fontWeight: 500,
                border: `1px solid #d0dcff`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Target sectors */}
      <section>
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: COLORS.dark, marginBottom: "20px" }}>
          Built for
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
          {SECTORS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "18px", borderRadius: "14px", textAlign: "center",
                background: "#fff", border: `1px solid ${COLORS.borderLight}`,
                fontSize: "14px", fontWeight: 500, color: COLORS.dark,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}