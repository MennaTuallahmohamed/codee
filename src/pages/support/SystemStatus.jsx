import { COLORS, FONT } from "../../styles/shared";

const SERVICES = [
  { name: "API Gateway",          status: "operational", uptime: "99.98%" },
  { name: "Gate Control System",  status: "operational", uptime: "99.95%" },
  { name: "ANPR Camera Network",  status: "degraded",    uptime: "97.20%" },
  { name: "RFID Reader Service",  status: "operational", uptime: "99.99%" },
  { name: "Payment Service",      status: "operational", uptime: "99.97%" },
  { name: "Notification Service", status: "operational", uptime: "99.90%" },
  { name: "Reporting & Analytics",status: "operational", uptime: "99.85%" },
];

const STATUS_COLORS = {
  operational: { dot: "#22c55e", bg: "#f0fdf4", text: "#166534", label: "Operational" },
  degraded:    { dot: "#f59e0b", bg: "#fffbeb", text: "#92400e", label: "Degraded"    },
  outage:      { dot: "#ef4444", bg: "#fef2f2", text: "#991b1b", label: "Outage"      },
};

const INCIDENTS = [
  {
    date: "Mar 24, 2026",
    title: "ANPR camera partial degradation",
    status: "investigating",
    desc: "Some cameras in Zone B are experiencing intermittent read failures. Engineers are on-site.",
  },
];

export default function SystemStatus() {
  const allOk = SERVICES.every((s) => s.status === "operational");

  return (
    <div style={{ fontFamily: FONT, maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>

      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "14px" }}>
          SYSTEM STATUS
        </div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: COLORS.dark, letterSpacing: "-0.8px", marginBottom: "16px" }}>
          Service status
        </h1>

        {/* Overall badge */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "10px 20px", borderRadius: "999px",
            background: allOk ? "#f0fdf4" : "#fffbeb",
            border: `1px solid ${allOk ? "#86efac" : "#fcd34d"}`,
            fontSize: "14px", fontWeight: 600,
            color: allOk ? "#166534" : "#92400e",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: allOk ? "#22c55e" : "#f59e0b", display: "inline-block" }} />
          {allOk ? "All systems operational" : "Some systems degraded"}
        </div>
      </div>

      {/* Services list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
        {SERVICES.map((s, i) => {
          const st = STATUS_COLORS[s.status];
          return (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px", borderRadius: "12px",
                background: "#fff", border: `1px solid ${COLORS.borderLight}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: st.dot, display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", fontWeight: 600, color: COLORS.dark }}>{s.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "12px", color: COLORS.muted }}>{s.uptime} uptime</span>
                <span
                  style={{
                    fontSize: "12px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px",
                    background: st.bg, color: st.text,
                  }}
                >
                  {st.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active incidents */}
      <h2 style={{ fontSize: "18px", fontWeight: 700, color: COLORS.dark, marginBottom: "16px" }}>
        Active incidents
      </h2>
      {INCIDENTS.length === 0 ? (
        <div style={{ padding: "24px", borderRadius: "12px", background: "#f0fdf4", border: "1px solid #86efac", fontSize: "14px", color: "#166534", fontWeight: 500 }}>
          ✓ No active incidents
        </div>
      ) : (
        INCIDENTS.map((inc, i) => (
          <div
            key={i}
            style={{
              padding: "20px 24px", borderRadius: "14px",
              background: "#fffbeb", border: "1px solid #fcd34d",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#92400e" }}>{inc.title}</span>
              <span style={{ fontSize: "12px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", background: "#fef3c7", color: "#92400e" }}>
                {inc.status}
              </span>
            </div>
            <div style={{ fontSize: "12px", color: "#a16207", marginBottom: "8px" }}>{inc.date}</div>
            <div style={{ fontSize: "13px", color: "#78350f", lineHeight: 1.6 }}>{inc.desc}</div>
          </div>
        ))
      )}
    </div>
  );
}