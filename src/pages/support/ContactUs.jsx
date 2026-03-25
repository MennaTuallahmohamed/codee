import { COLORS, FONT, inputStyle, btnPrimary } from "../../styles/shared";

const INQUIRY_TYPES = [
  "General Inquiry", "Technical Support", "Billing Issue",
  "Access Problem", "Partnership / Business", "Feedback",
];

const CONTACT_INFO = [
  { icon: "✉️", label: "Email",          value: "support@smartpark.io" },
  { icon: "📞", label: "Phone",          value: "+20 100 000 0000" },
  { icon: "🕐", label: "Support hours",  value: "Sun – Thu, 9am – 6pm" },
  { icon: "⚡", label: "Response time",  value: "Within 24 hours" },
];

export default function ContactUs() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "14px" }}>
          CONTACT US
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: COLORS.dark, letterSpacing: "-0.8px", marginBottom: "16px" }}>
          Get in touch
        </h1>
        <p style={{ fontSize: "16px", color: "#555", maxWidth: "460px", margin: "0 auto", lineHeight: 1.7 }}>
          Have a question or need help? We're here for you.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "40px", alignItems: "start" }}>

        {/* Left: contact info */}
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: COLORS.dark, marginBottom: "20px" }}>
            Contact info
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {CONTACT_INFO.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: COLORS.bgLight, display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: COLORS.muted, marginBottom: "1px" }}>{c.label}</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: COLORS.dark }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{ background: "#fff", border: `1px solid ${COLORS.borderLight}`, borderRadius: "18px", padding: "28px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: COLORS.dark, marginBottom: "20px" }}>
            Send a message
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            <input placeholder="Your name"   style={inputStyle} />
            <input placeholder="Email"       type="email" style={inputStyle} />
          </div>

          <input placeholder="Phone (optional)" type="tel" style={{ ...inputStyle, marginBottom: "12px" }} />

          <select
            style={{ ...inputStyle, marginBottom: "12px", appearance: "none", background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23888' d='M6 8L0 0h12z'/%3E%3C/svg%3E") no-repeat right 16px center`, backgroundSize: "10px", color: "#444" }}
            defaultValue=""
          >
            <option value="" disabled>Inquiry type</option>
            {INQUIRY_TYPES.map((t, i) => <option key={i} value={t}>{t}</option>)}
          </select>

          <input placeholder="Subject" style={{ ...inputStyle, marginBottom: "12px" }} />

          <textarea
            placeholder="Your message..."
            rows={4}
            style={{ ...inputStyle, resize: "vertical", marginBottom: "20px", lineHeight: 1.5 }}
          />

          <button style={btnPrimary}>Send Message →</button>
        </div>
      </div>
    </div>
  );
}