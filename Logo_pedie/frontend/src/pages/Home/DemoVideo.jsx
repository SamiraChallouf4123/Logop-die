import React from 'react';
import { DARK, TEAL } from '../../constants/colors';

export default function DemoVideo() {
  return (
    <section style={{ padding: "4rem 2rem", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Nunito', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 900, color: DARK, marginBottom: "1rem"
        }}>
          Découvrez l'éditeur en action
        </h2>
        <p style={{ color: "#666", fontSize: "1.05rem", marginBottom: "3rem", maxWidth: 600, margin: "0 auto 3rem" }}>
          Regardez cette courte vidéo pour comprendre comment nos outils peuvent vous aider à lire et écrire plus facilement.
        </p>
        
        {/* Conteneur de la vidéo */}
        <div style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 ratio */,
          height: 0,
          overflow: "hidden",
          borderRadius: 24,
          boxShadow: `0 20px 40px rgba(0,0,0,0.1)`,
          border: `4px solid ${TEAL}22`,
          background: "#000"
        }}>
          <video 
            style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", objectFit: "cover"
            }}
            src="/demo.mp4" 
            controls 
            autoPlay 
            muted 
            loop
          >
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </div>
    </section>
  );
}