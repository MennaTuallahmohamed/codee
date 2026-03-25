export const NAV_ITEMS = [
  {
    label: "About",
    dropdown: [
      { icon: "🏢", title: "About the Platform", desc: "Who we are & what we solve", path: "/about" },
      { icon: "⚙️", title: "How It Works",        desc: "Step-by-step gate & session flow", path: "/about/how-it-works" },
      { icon: "👥", title: "Who It's For",         desc: "Residents, guards, operators & more", path: "/about/who-its-for" },
      { icon: "✨", title: "System Features",      desc: "Smart parking & security tools", path: "/about/features" },
      { icon: "🔒", title: "Technology & Security",desc: "Stack, hardware & encryption", path: "/about/technology" },
    ],
  },
  {
    label: "Support",
    dropdown: [
      { icon: "🔍", title: "Help Center",    desc: "Search guides & popular topics", path: "/support/help-center" },
      { icon: "❓", title: "FAQs",           desc: "Quick answers to common questions", path: "/support/faqs" },
      { icon: "✉️", title: "Contact Us",     desc: "Reach our support team", path: "/support/contact" },
      { icon: "🎫", title: "Submit a Ticket",desc: "Report issues or request help", path: "/support/ticket" },
      { icon: "📡", title: "System Status",  desc: "Live status of all services", path: "/support/status" },
    ],
  },
];

export const ROLES = [
  { value: "resident", label: "Resident",         icon: "🏠", desc: "Manage vehicles & invite visitors" },
  { value: "visitor",  label: "Visitor",           icon: "👤", desc: "Access via QR code" },
  { value: "security", label: "Security Guard",    icon: "🛡️", desc: "Monitor gates & scan QR" },
  { value: "operator", label: "Parking Operator",  icon: "📊", desc: "Manage occupancy & sessions" },
  { value: "admin",    label: "System Admin",      icon: "⚙️", desc: "Full system control" },
];