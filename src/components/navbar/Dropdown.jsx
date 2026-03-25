import { COLORS, FONT } from "../../styles/shared";

export default function Dropdown({ items, visible }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(-8px)",
        background: "#fff",
        border: `1px solid ${COLORS.borderLight}`,
        borderRadius: "16px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
        padding: "10px",
        minWidth: "290px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        zIndex: 1000,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          onClick={() => item.path && (window.location.href = item.path)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 12px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "background 0.15s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = COLORS.bgHover)}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: COLORS.bgLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              flexShrink: 0,
            }}
          >
            {item.icon}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "14px", fontWeight: 600, color: COLORS.dark, fontFamily: FONT }}>
              {item.title}
            </div>
            <div style={{ fontSize: "12px", color: COLORS.muted, marginTop: "1px", fontFamily: FONT }}>
              {item.desc}
            </div>
          </div>

          <div style={{ color: "#bbb", fontSize: "14px" }}>›</div>
        </div>
      ))}
    </div>
  );
}