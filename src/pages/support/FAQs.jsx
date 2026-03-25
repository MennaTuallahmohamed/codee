import { useState } from "react";
import { COLORS, FONT } from "../../styles/shared";

const FAQS = [
  {
    category: "Vehicles",
    items: [
      { q: "How do I register my vehicle?", a: "Go to your dashboard → Vehicles → Add Vehicle. Enter your plate number, vehicle type, and confirm. The vehicle will be added to your whitelist immediately." },
      { q: "Can I register more than one vehicle?", a: "Yes. Admins can configure the maximum number of vehicles per resident. By default, up to 2 vehicles per resident are allowed." },
      { q: "What happens if my plate is not recognized?", a: "If the ANPR camera can't read your plate, the system flags it. A security guard will verify your identity manually and can approve entry from their device." },
    ],
  },
  {
    category: "Visitors",
    items: [
      { q: "How do I invite a visitor?", a: "Open the app → Visitors → Invite Visitor. Enter the visitor's name, phone number, and visit date. They'll receive a QR code via SMS." },
      { q: "How does the QR code work?", a: "The QR code is unique per visit. The security guard scans it at the gate. It's valid only for the specified date and time window." },
      { q: "Can a visitor come without a QR code?", a: "No. Visitors require a valid QR code or must be manually approved by security. This is enforced for security compliance." },
    ],
  },
  {
    category: "Payments",
    items: [
      { q: "How are parking fees calculated?", a: "Fees are calculated based on entry and exit times. The system records both timestamps and computes the fee according to the configured rate." },
      { q: "Can I view my payment history?", a: "Yes. Go to Dashboard → Parking History. You'll see a full log of all sessions with fees, entry/exit times, and payment status." },
      { q: "What happens if I exit without paying?", a: "The system flags the session as unpaid. The barrier may remain closed until payment is settled, or the incident is escalated to a security guard." },
    ],
  },
  {
    category: "Gates & Access",
    items: [
      { q: "What should I do if the gate doesn't open?", a: "Press the intercom button at the gate to reach a security guard. They can verify your plate and manually open the barrier from the admin panel." },
      { q: "Who can manually override the gate?", a: "Security guards and parking operators can open or close gates manually from the SmartPark mobile or web interface." },
      { q: "What if the ANPR camera malfunctions?", a: "The system automatically alerts the operations team. Guards can switch to manual QR-based verification as a fallback until the camera is restored." },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: `1px solid ${open ? COLORS.accent : COLORS.borderLight}`,
        borderRadius: "12px", overflow: "hidden",
        transition: "border-color 0.2s ease", background: "#fff",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 20px", background: "none", border: "none", cursor: "pointer",
          fontFamily: FONT, textAlign: "left",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: 600, color: COLORS.dark }}>{q}</span>
        <span
          style={{
            fontSize: "18px", color: COLORS.accent, flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease", display: "inline-block", marginLeft: "12px",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 16px", fontSize: "14px", color: "#555", lineHeight: 1.7, fontFamily: FONT }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <div style={{ fontFamily: FONT, maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.accent, letterSpacing: "2px", marginBottom: "14px" }}>
          FAQs
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: COLORS.dark, letterSpacing: "-0.8px", marginBottom: "16px" }}>
          Frequently asked questions
        </h1>
        <p style={{ fontSize: "16px", color: "#555", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
          Quick answers to the most common questions about SmartPark.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {FAQS.map((section, i) => (
          <div key={i}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: COLORS.muted, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
              {section.category}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {section.items.map((item, j) => (
                <FAQItem key={j} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}