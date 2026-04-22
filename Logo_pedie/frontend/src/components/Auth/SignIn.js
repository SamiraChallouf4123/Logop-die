// src/components/Auth/SignIn.js
import React, { useState } from 'react';
import { TEAL } from '../../constants/colors';

const inputStyle = {
  width: '100%',
  padding: '12px 14px 12px 42px',
  border: '1.5px solid #e2e8f0',
  borderRadius: 12,
  fontSize: 15,
  fontFamily: "'Atkinson Hyperlegible', sans-serif",
  color: '#1A1A2E',
  background: '#f8fafc',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  fontSize: 13,
  fontWeight: 700,
  fontFamily: "'Nunito', sans-serif",
  color: '#475569',
  marginBottom: 6,
};

const IconWrap = ({ children }) => (
  <span style={{
    position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)',
    fontSize: 16, pointerEvents: 'none',
  }}>{children}</span>
);

const SignIn = ({ onSubmit, loading = false, error = '' }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;

    onSubmit({
      email: formData.email.trim(),
      password: formData.password,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Email */}
      <div>
        <label style={labelStyle}>Adresse email</label>
        <div style={{ position: 'relative' }}>
          <IconWrap>✉️</IconWrap>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
            disabled={loading}
            style={{
              ...inputStyle,
              borderColor: error ? '#ef4444' : '#e2e8f0',
            }}
          />
        </div>
      </div>

      {/* Mot de passe */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <label style={{ ...labelStyle, marginBottom: 0 }}>Mot de passe</label>
          <span style={{ fontSize: 12, color: TEAL, fontWeight: 600, cursor: 'pointer' }}>
            Mot de passe oublié ?
          </span>
        </div>
        <div style={{ position: 'relative' }}>
          <IconWrap>🔒</IconWrap>
          <input
            type={showPass ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Votre mot de passe"
            required
            disabled={loading}
            style={{
              ...inputStyle,
              paddingRight: 44,
              borderColor: error ? '#ef4444' : '#e2e8f0',
            }}
          />
          <button
            type="button"
            onClick={() => setShowPass(p => !p)}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer', fontSize: 16,
            }}
            disabled={loading}
          >
            {showPass ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      {/* Message d'erreur */}
      {error && (
        <p style={{
          color: '#ef4444',
          fontSize: 14,
          margin: '8px 0 0 0',
          textAlign: 'center',
          fontWeight: 600
        }}>
          {error}
        </p>
      )}

      {/* Bouton Connexion */}
      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '13px 0',
          border: 'none',
          borderRadius: 12,
          background: loading 
            ? '#94a3b8' 
            : `linear-gradient(135deg, ${TEAL}, #0F6E56)`,
          color: '#fff',
          fontSize: 16,
          fontWeight: 800,
          fontFamily: "'Nunito', sans-serif",
          cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: `0 4px 18px ${TEAL}44`,
          transition: 'all 0.2s',
          marginTop: 4,
          opacity: loading ? 0.85 : 1,
        }}
      >
        {loading ? 'Connexion en cours...' : 'Se connecter →'}
      </button>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
        <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>ou continuer avec</span>
        <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
      </div>

      {/* Google */}
      <button
        type="button"
        style={{
          width: '100%', padding: '11px 0', border: '1.5px solid #e2e8f0',
          borderRadius: 12, background: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 14, fontWeight: 700,
          fontFamily: "'Nunito', sans-serif", color: '#374151',
        }}
        disabled={loading}
      >
        <span style={{ fontSize: 18 }}>🌐</span> Continuer avec Google
      </button>
    </form>
  );
};

export default SignIn;