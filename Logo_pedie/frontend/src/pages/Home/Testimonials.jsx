import React from 'react';
import { TESTIMONIALS } from '../../constants/content';
import { CORAL, DARK, CREAM } from '../../constants/colors';

export default function Testimonials() {
  return (
    <section style={{ padding: "4rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ color: CORAL, fontWeight: 700, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
            Edieur
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: DARK }}>
            Ils ont retrouvé confiance
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{
              background: CREAM, borderRadius: 20, padding: "1.75rem",
              border: `1.5px solid ${t.bg}`,
              position: "relative",
            }}>
              <div style={{
                fontSize: "3.5rem", lineHeight: 1, color: t.color, opacity: 0.25,
                position: "absolute", top: 16, right: 22,
                fontFamily: "Georgia, serif",
              }}>"</div>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.9, marginBottom: "1.5rem", position: "relative" }}>
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: t.bg, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: t.color,
                  border: `2px solid ${t.color}55`,
                }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: DARK }}>{t.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#888" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
