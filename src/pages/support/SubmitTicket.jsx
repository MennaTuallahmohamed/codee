import { COLORS, FONT, inputStyle, btnPrimary } from "../../styles/shared";

const ISSUE_TYPES = [
  "Login issue", "Vehicle issue", "Visitor QR issue",
  "Payment problem", "Gate malfunction", "Camera problem",
  "RFID issue", "Report issue", "Other",
];

const PRIORITIES = [
  { value: "low",      label: "Low",      color: "#22c55e", desc: "Minor inconvenience" },
  { value: "medium",   label: "Medium",   color: "#f59e0b", desc: "Affecting my workflow" },
  { value: "high",     label: "High",     color: "#ef4444", desc: "Blocking access or payments" },
];

export default function SubmitTicket() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "640px", margin: "0 auto", padding: "60px 24px" }}>

      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "14px" }}>
          SUBMIT A TICKET
        </div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: COLORS.dark, letterSpacing: "-0.8px", marginBottom: "14px" }}>
          Report an issue
        </h1>
        <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
          Describe your problem and we'll get back to you as soon as possible.
        </p>
      </div>

      <div style={{ background: "#fff", border: `1px solid ${COLORS.borderLight}`, borderRadius: "20px", padding: "32px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
          <input placeholder="Contact name" style={inputStyle} />
          <input placeholder="Email address" type="email" style={inputStyle} />
        </div>

        <select
          style={{ ...inputStyle, marginBottom: "12px", appearance: "none", color: "#444" }}
          defaultValue=""
        >
          <option value="" disabled>Issue type</option>
          {ISSUE_TYPES.map((t, i) => <option key={i} value={t}>{t}</option>)}
        </select>

        {/* Priority */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "13px", color: COLORS.muted, marginBottom: "10px", fontWeight: 500 }}>Priority</div>
          <div style={{ display: "flex", gap: "10px" }}>
            {PRIORITIES.map((p) => (
              <label
                key={p.value}
                style={{
                  flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                  gap: "4px", padding: "12px 8px", borderRadius: "12px",
                  border: `2px solid #eee`, cursor: "pointer", textAlign: "center",
                  transition: "all 0.15s ease",
                }}
              >
                <input type="radio" name="priority" value={p.value} style={{ display: "none" }} />
                <span style={{ fontSize: "16px", fontWeight: 700, color: p.color }}>{p.label}</span>
                <span style={{ fontSize: "11px", color: COLORS.muted }}>{p.desc}</span>
              </label>
            ))}
          </div>
        </div>

        <input placeholder="Subject" style={{ ...inputStyle, marginBottom: "12px" }} />

        <textarea
          placeholder="Describe your issue in detail..."
          rows={5}
          style={{ ...inputStyle, resize: "vertical", marginBottom: "12px", lineHeight: 1.5 }}
        />

        {/* File attachment */}
        <div
          style={{
            border: `1.5px dashed ${COLORS.borderLight}`, borderRadius: "12px",
            padding: "20px", textAlign: "center", marginBottom: "20px",
            color: COLORS.muted, fontSize: "14px", cursor: "pointer",
          }}
        >
          📎 Attach a file (screenshot, log) — optional
        </div>

        <button style={btnPrimary}>Submit Ticket →</button>

        <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", marginTop: "14px" }}>
          You'll receive a confirmation email with your ticket ID.
        </p>
      </div>
    </div>
  );
}