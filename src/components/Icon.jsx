import React from "react";

export default function Icon({ name, className }) {
  const common = { className, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2" };

  if (name === "sun") return (
    <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
  );

  if (name === "moon") return (
    <svg {...common}><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
  );

  if (name === "trash") return (
    <svg {...common}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
  );

  if (name === "plus") return (
    <svg {...common}><path d="M12 5v14M5 12h14"/></svg>
  );

  if (name === "drag") return (
    <svg {...common}><path d="M10 6h.01M14 6h.01M10 12h.01M14 12h.01M10 18h.01M14 18h.01"/></svg>
  );

  return null;
}
