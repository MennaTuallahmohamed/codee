import { useState } from "react";
import Navbar    from "./components/navbar/Navbar";
import AuthModal from "./components/auth/AuthModal";

// About pages
import AboutPlatform  from "./pages/about/AboutPlatform";
import HowItWorks     from "./pages/about/HowItWorks";
import WhoItsFor      from "./pages/about/WhoItsFor";
import SystemFeatures from "./pages/about/SystemFeatures";
import Technology     from "./pages/about/Technology";

// Support pages
import HelpCenter    from "./pages/support/HelpCenter";
import FAQs          from "./pages/support/FAQs";
import ContactUs     from "./pages/support/ContactUs";
import SubmitTicket  from "./pages/support/SubmitTicket";
import SystemStatus  from "./pages/support/SystemStatus";

// ─── simple in-app router (replace with React Router when ready) ───────────
const ROUTES = {
  "/":                     () => <Hero />,
  "/about":                () => <AboutPlatform />,
  "/about/how-it-works":   () => <HowItWorks />,
  "/about/who-its-for":    () => <WhoItsFor />,
  "/about/features":       () => <SystemFeatures />,
  "/about/technology":     () => <Technology />,
  "/support/help-center":  () => <HelpCenter />,
  "/support/faqs":         () => <FAQs />,
  "/support/contact":      () => <ContactUs />,
  "/support/ticket":       () => <SubmitTicket />,
  "/support/status":       () => <SystemStatus />,
};

function Hero({ onAuthOpen }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(160deg, #f0f5ff 0%, #e8eeff 50%, #f5f0ff 100%)",
        textAlign: "center", padding: "40px", fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#2d6ef5", letterSpacing: "2px", marginBottom: "16px" }}>
        SMART PARKING & ACCESS CONTROL
      </div>
      <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "#1a1a2e", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-1px" }}>
        Park smarter.<br />
        <span style={{ background: "linear-gradient(135deg, #1a3c8f, #2d6ef5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Access faster.
        </span>
      </h1>
      <p style={{ fontSize: "18px", color: "#666", maxWidth: "480px", lineHeight: 1.6, marginBottom: "36px" }}>
        Automated gate access, license plate recognition, and real-time parking management — all in one platform.
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => onAuthOpen?.("register")}
          style={{
            padding: "14px 32px", borderRadius: "12px",
            background: "linear-gradient(135deg, #1a3c8f, #2d6ef5)",
            color: "#fff", border: "none", fontSize: "16px",
            fontWeight: 600, fontFamily: "'Outfit', sans-serif", cursor: "pointer",
            boxShadow: "0 8px 24px rgba(45,110,245,0.3)",
          }}
        >
          Get Started Free →
        </button>
        <button
          onClick={() => window.location.href = "/about/how-it-works"}
          style={{
            padding: "14px 32px", borderRadius: "12px",
            border: "1.5px solid #dde3f0", background: "#fff",
            fontSize: "16px", fontFamily: "'Outfit', sans-serif",
            fontWeight: 500, color: "#444", cursor: "pointer",
          }}
        >
          How It Works
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [authModal, setAuthModal] = useState(null); // 'login' | 'register' | null
  const [path, setPath]           = useState(window.location.pathname);

  // keep path in sync with browser nav
  window.addEventListener("popstate", () => setPath(window.location.pathname));

  // override <a> / location.href changes inside the SPA
  const originalPush = window.history.pushState.bind(window.history);
  window.history.pushState = (...args) => {
    originalPush(...args);
    setPath(args[2] ?? window.location.pathname);
  };

  const PageComponent = ROUTES[path] ?? (() => <AboutPlatform />);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Outfit', sans-serif; background: #f5f7ff; }
        input:focus, textarea:focus, select:focus { border-color: #2d6ef5 !important; }
      `}</style>

      <Navbar onAuthOpen={setAuthModal} />

      <main>
        {path === "/" ? <Hero onAuthOpen={setAuthModal} /> : <PageComponent />}
      </main>

      {authModal && (
        <AuthModal mode={authModal} onClose={() => setAuthModal(null)} />
      )}
    </>
  );
}