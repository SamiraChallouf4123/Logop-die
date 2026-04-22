import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAL, TEAL_LIGHT, AMBER, DARK } from '../../constants/colors';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "5rem 2rem 4rem" }}>
      {/* decorative blobs */}
      <div style={{
        position: "absolute", top: -80, right: -120, width: 480, height: 480,
        background: `radial-gradient(circle, ${TEAL}22, transparent 70%)`,
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -80, width: 380, height: 380,
        background: `radial-gradient(circle, ${AMBER}22, transparent 70%)`,
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}>
        {/* Left */}
        <div style={{ flex: 1, minWidth: 300, maxWidth: 600 }}>
          <div className="fade-in" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: TEAL_LIGHT, color: TEAL, border: `1.5px solid ${TEAL}33`,
            borderRadius: 50, padding: "0.4rem 1rem", fontSize: "0.82rem", fontWeight: 600,
            marginBottom: "1.5rem",
          }}>
            <span style={{ fontSize: 14 }}>✨</span> Intelligence Artificielle au service de tous
          </div>

          <h1 className="fade-in-1" style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 900,
            lineHeight: 1.18,
            color: DARK,
            marginBottom: "1.5rem",
            letterSpacing: "-0.5px",
          }}>
            Lire et écrire{" "}
            <span className="underline-anim" style={{ color: TEAL }}>sans barrières</span>
            {" "}pour chacun.
          </h1>

          <p className="fade-in-2" style={{
            fontSize: "1.1rem", color: "#555", lineHeight: 1.85,
            maxWidth: 520, marginBottom: "2.5rem",
          }}>
            Une application intelligente pensée pour les personnes dyslexiques,
            enfants comme adultes — pour lire plus facilement, écrire avec confiance
            et progresser à son propre rythme.
          </p>

          <div className="fade-in-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="pulse-btn" onClick={() => navigate('/editor')}
              style={{
              background: `linear-gradient(135deg, ${TEAL}, #0F6E56)`,
              color: "#fff", border: "none", padding: "0.9rem 2rem",
              borderRadius: 50, fontSize: "1rem", fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              boxShadow: `0 6px 24px ${TEAL}44`,
              display: "flex", alignItems: "center", gap: 8,
            }}>
               Commencer gratuitement
            </button>
            <button style={{
              background: "transparent", color: DARK, border: `2px solid ${DARK}22`,
              padding: "0.9rem 1.8rem", borderRadius: 50, fontSize: "1rem",
              fontWeight: 600, fontFamily: "'Nunito', sans-serif", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8,
              transition: "border-color 0.2s",
            }}>
              ▶ Voir la démo
            </button>
          </div>

          <div className="fade-in-4" style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "2rem" }}>
            <div style={{ display: "flex" }}>
              {["#FFB347","#85C1E9","#82E0AA","#F1948A"].map((c, i) => (
                <div key={i} style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: c, border: "3px solid #fff",
                  marginLeft: i > 0 ? -10 : 0,
                }} />
              ))}
            </div>
            <div style={{ fontSize: "0.85rem", color: "#666" }}>
              <b style={{ color: DARK }}>50 000+</b> familles accompagnées ⭐ 4.9/5
            </div>
          </div>
        </div>

        {/* Right — visual mockup */}
        <div className="float" style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "min(380px, 90vw)",
            background: "#fff",
            borderRadius: 28,
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            overflow: "hidden",
            border: `1px solid ${TEAL}22`,
          }}>
            {/* mockup header */}
            <div style={{ background: TEAL, padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#fff", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
                📖 Mode Lecture
              </span>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF6B6B","#FFC107","#4CAF50"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
            </div>
            {/* toolbar */}
            <div style={{ background: TEAL_LIGHT, padding: "0.6rem 1.25rem", display: "flex", gap: 10 }}>
              {["🔊 Écouter", "🔤 Police", "🎨 Couleur"].map((t) => (
                <span key={t} style={{
                  background: "#fff", color: TEAL, fontSize: "0.75rem",
                  padding: "0.3rem 0.75rem", borderRadius: 50, fontWeight: 600,
                  border: `1px solid ${TEAL}33`,
                }}>{t}</span>
              ))}
            </div>
            {/* text area */}
            <div style={{ padding: "1.25rem", lineHeight: 2.1, fontSize: "0.97rem" }}>
              {["La ", "dyslexie ", "est une ", "difficulté ", "d'apprentissage "].map((w, i) => (
                <span key={i} style={{
                  background: i === 3 ? `${AMBER}55` : "transparent",
                  borderRadius: 4, padding: "0 1px",
                  borderBottom: i === 3 ? `2.5px solid ${AMBER}` : "none",
                  fontWeight: i === 3 ? 700 : 400,
                }}>{w}</span>
              ))}
              <span>qui touche la lecture et l'écriture. Avec les bons outils, chacun peut progresser à son rythme.</span>
            </div>
            {/* progress */}
            <div style={{ padding: "0 1.25rem 1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#888", marginBottom: 6 }}>
                <span>Progression de lecture</span><span style={{ color: TEAL, fontWeight: 700 }}>68%</span>
              </div>
              <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: "68%", height: "100%", background: `linear-gradient(90deg, ${TEAL}, ${AMBER})`, borderRadius: 4 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
