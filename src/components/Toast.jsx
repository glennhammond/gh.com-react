import React, { useEffect } from "react";

export default function Toast({ show, onClose, theme }) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="
        fixed bottom-6 right-6 
        px-4 py-3 rounded-xl shadow-lg
        animate-slide-up 
        text-sm font-medium
        z-50
      "
      style={{
        background: theme === "dark" ? "#1e293b" : "#fff",
        color: theme === "dark" ? "#f1f5f9" : "#0f172a",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      Message sent 👍
    </div>
  );
}
