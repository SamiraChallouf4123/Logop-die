import React from 'react';
import { FEATURES } from '../../constants/content';
import { TEAL, DARK } from '../../constants/colors';

export default function Features() {
  return (
    <section id="features" style={{ padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ color: TEAL, fontWeight: 700, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
            Fonctionnalités
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: DARK }}>
            Des outils pensés pour vous
          </h2>
          <p style={{ color: "#666", marginTop: 12, maxWidth: 560, margin: "12px auto 0", lineHeight: 1.8 }}>
            Chaque fonctionnalité a été conçue avec des personnes dyslexiques pour répondre aux vrais défis du quotidien.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card" style={{
              background: "#fff", borderRadius: 20, padding: "1.75rem",
              border: `1.5px solid ${f.color}`,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 16,
                background: f.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, marginBottom: "1rem",
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: DARK, marginBottom: 8 }}>
                {f.title}
              </h3>
              <p style={{ color: "#666", fontSize: "0.92rem", lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
