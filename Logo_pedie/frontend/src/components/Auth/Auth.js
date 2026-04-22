// src/components/Auth/Auth.js
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { TEAL } from '../../constants/colors';

const Auth = ({ defaultSignUp = false, onClose, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(defaultSignUp);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');

    try {
      // ===================== CONNEXION =====================
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          motDePasse: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const msg = Array.isArray(result.message)
          ? result.message[0]
          : result.message || '';

        if (msg.toLowerCase().includes('email') || msg.toLowerCase().includes('existe')) {
          setError("Cet email n'existe pas");
        } else if (msg.toLowerCase().includes('mot de passe') || msg.toLowerCase().includes('incorrect')) {
          setError("Mot de passe incorrect");
        } else {
          setError(msg || "Erreur lors de la connexion");
        }
        return;
      }

      // ✅ Backend retourne { access_token, user: { id, nom, prenom, email, image, typeCompte } }
      const { access_token, user } = result;

      // Sauvegarder le token JWT
      localStorage.setItem('token', access_token);

      if (onLoginSuccess) onLoginSuccess(user);

    } catch (err) {
      console.error('Erreur connexion:', err);
      setError("Impossible de se connecter au serveur. Vérifiez que le backend tourne sur le port 3001.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 0,
      overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(15,23,42,0.18)',
      fontFamily: "'Atkinson Hyperlegible', sans-serif",
    }}>
      {/* Accent top bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${TEAL} 0%, #f59e0b 100%)` }} />

      {/* Logo + Title */}
      <div style={{ padding: '28px 32px 0', textAlign: 'center' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14, margin: '0 auto 12px',
          background: `linear-gradient(135deg, ${TEAL}, #0F6E56)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, boxShadow: `0 4px 14px ${TEAL}44`,
        }}>📖</div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 20, color: '#1A1A2E' }}>
          Logopédie
        </div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>
          {isSignUp ? 'Créez votre compte gratuitement' : 'Bon retour parmi nous !'}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', margin: '20px 32px 0', background: '#f1f5f9', borderRadius: 12, padding: 4 }}>
        {[
          { label: 'Se connecter', value: false },
          { label: "S'inscrire",   value: true  },
        ].map(({ label, value }) => (
          <button
            key={label}
            onClick={() => { setIsSignUp(value); setError(''); }}
            style={{
              flex: 1, padding: '10px 0', border: 'none', cursor: 'pointer',
              borderRadius: 9, fontSize: 14, fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
              background: isSignUp === value ? '#fff' : 'transparent',
              color:      isSignUp === value ? TEAL   : '#64748b',
              boxShadow:  isSignUp === value ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            }}
          >{label}</button>
        ))}
      </div>

      {/* Formulaire */}
      <div style={{ padding: '24px 32px 32px', height: 360, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {isSignUp
          ? <SignUp />
          : <SignIn onSubmit={handleSubmit} loading={loading} error={error} />
        }
      </div>
    </div>
  );
};

export default Auth;