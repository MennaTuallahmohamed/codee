import { COLORS, FONT, inputStyle } from "../../styles/shared";

const CATEGORIES = [
  { icon: "🔐", label: "Account & Login" },
  { icon: "🚗", label: "Vehicle Registration" },
  { icon: "📲", label: "Visitor QR Access" },
  { icon: "🅿️", label: "Parking Sessions" },
  { icon: "💳", label: "Payments & Billing" },
  { icon: "🚧", label: "Gate & Access Issues" },
  { icon: "📊", label: "Reports & Admin" },
  { icon: "📷", label: "Security & Monitoring" },
];

const POPULAR = [
  "How do I register my vehicle?",
  "How do I invite a visitor?",
  "How does QR access work?",
  "How are parking fees calculated?",
  "What do I do if gate access fails?",
];

export default function HelpCenter() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

      {/* Hero + search */}
      <div
        style={{
          textAlign: "center", padding: "48px 40px", borderRadius: "24px",
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
          marginBottom: "48px", color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
          How can we help?
        </h1>
        <p style={{ fontSize: "15px", opacity: 0.85, marginBottom: "28px" }}>
          Search guides, articles, and answers
        </p>
        <div style={{ position: "relative", maxWidth: "460px", margin: "0 auto" }}>
          <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>🔍</span>
          <input
            placeholder="e.g. invite a visitor, pay fees..."
            style={{ ...inputStyle, paddingLeft: "44px", borderRadius: "12px", border: "none", fontSize: "15px" }}
          />
        </div>
      </div>

      {/* Categories */}
      <h2 style={{ fontSize: "20px", fontWeight: 700, color: COLORS.dark, marginBottom: "20px" }}>
        Browse by topic
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "48px" }}>
        {CATEGORIES.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
              padding: "20px 16px", borderRadius: "14px", cursor: "pointer",
              background: "#fff", border: `1px solid ${COLORS.borderLight}`,
              transition: "all 0.15s ease", textAlign: "center",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.background = COLORS.bgLight; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.borderLight; e.currentTarget.style.background = "#fff"; }}
          >
            <span style={{ fontSize: "28px" }}>{c.icon}</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: COLORS.dark }}>{c.label}</span>
          </div>
        ))}
      </div>

      {/* Popular */}
      <h2 style={{ fontSize: "20px", fontWeight: 700, color: COLORS.dark, marginBottom: "16px" }}>
        Popular questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
        {POPULAR.map((q, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 20px", borderRadius: "12px", cursor: "pointer",
              background: "#fff", border: `1px solid ${COLORS.borderLight}`,
              fontSize: "14px", color: COLORS.dark, fontWeight: 500,
              transition: "all 0.15s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.borderLight; e.currentTarget.style.color = COLORS.dark; }}
          >
            {q}
            <span style={{ fontSize: "16px", opacity: 0.4 }}>›</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 28px", borderRadius: "16px",
          background: COLORS.bgLight, border: `1px solid #d0dcff`,
        }}
      >
        <div>
          <div style={{ fontSize: "16px", fontWeight: 700, color: COLORS.dark, marginBottom: "4px" }}>
            Still need help?
          </div>
          <div style={{ fontSize: "14px", color: COLORS.muted }}>Our support team is ready to assist you.</div>
        </div>
        <button
          style={{
            padding: "12px 24px", borderRadius: "10px",
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
            color: "#fff", border: "none", fontSize: "14px",
            fontWeight: 600, fontFamily: FONT, cursor: "pointer",
          }}
        >
          Submit a ticket
        </button>
      </div>
    </div>
  );
}