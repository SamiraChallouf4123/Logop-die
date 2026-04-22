// src/components/Auth/SignUp.js
import React, { useState } from 'react';
import { TEAL } from '../../constants/colors';

const SignUp = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    confirmationMotDePasse: '',
    typeCompte: 'eleve',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(''); // Réinitialiser l'erreur quand l'utilisateur tape
  };

  const handleTypeChange = (type) => {
    setFormData({ ...formData, typeCompte: type });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  if (formData.motDePasse !== formData.confirmationMotDePasse) {
    setError('Les mots de passe ne correspondent pas !');
    setLoading(false);
    return;
  }

  try {
    // ==================== CORRECTION ICI ====================
    const response = await fetch('http://localhost:3001/eleve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: formData.nom.trim(),
        prenom: formData.prenom.trim(),
        email: formData.email.trim(),
        motDePasse: formData.motDePasse,
        confirmationMotDePasse: formData.confirmationMotDePasse,
        typeCompte: formData.typeCompte,
      }),
    });

    // Vérification importante
    if (!response.ok) {
      const text = await response.text(); // Lire en texte d'abord
      console.error('Réponse brute du serveur:', text);
      
      let errorMessage = 'Erreur lors de la création du compte';
      try {
        const data = JSON.parse(text);
        errorMessage = data.message || errorMessage;
      } catch (e) {
        // Si ce n'est pas du JSON (erreur HTML par exemple)
        errorMessage = 'Le serveur ne répond pas correctement. Vérifiez que le backend est démarré sur le port 3001.';
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    setSuccess(true);
    console.log('Compte créé avec succès:', data);

  } catch (err) {
    setError(err.message);
    console.error('Erreur inscription:', err);
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 16, rowGap: 12 }}>

      {/* Nom */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' }}>
          Nom
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            style={{
              width: '100%',
              padding: '8px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 12,
              fontSize: 14,
              background: '#f8fafc',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Prénom */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' }}>
          Prénom
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Votre prénom"
            required
            style={{
              width: '100%',
              padding: '8px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 12,
              fontSize: 14,
              background: '#f8fafc',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' }}>
          Adresse email
        </label>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16 }}>✉️</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
            style={{
              width: '100%',
              padding: '8px 14px 8px 40px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 12,
              fontSize: 14,
              background: '#f8fafc',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Type de compte */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' }}>
          Type de compte
        </label>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            type="button"
            onClick={() => handleTypeChange('eleve')}
            style={{
              flex: 1,
              padding: '8px 0',
              border: `1.5px solid ${formData.typeCompte === 'eleve' ? TEAL : '#e2e8f0'}`,
              borderRadius: 10,
              background: formData.typeCompte === 'eleve' ? `${TEAL}15` : '#f8fafc',
              color: formData.typeCompte === 'eleve' ? TEAL : '#64748b',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
             Élève
          </button>
          <button
            type="button"
            onClick={() => handleTypeChange('client')}
            style={{
              flex: 1,
              padding: '8px 0',
              border: `1.5px solid ${formData.typeCompte === 'client' ? TEAL : '#e2e8f0'}`,
              borderRadius: 10,
              background: formData.typeCompte === 'client' ? `${TEAL}15` : '#f8fafc',
              color: formData.typeCompte === 'client' ? TEAL : '#64748b',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            🧑‍💼 Client
          </button>
        </div>
      </div>

      {/* Mot de passe */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' }}>
          Mot de passe
        </label>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16 }}>🔒</span>
          <input
            type={showPass ? 'text' : 'password'}
            name="motDePasse"
            value={formData.motDePasse}
            onChange={handleChange}
            placeholder="Créer un mot de passe"
            required
            style={{
              width: '100%',
              padding: '8px 40px 8px 40px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 12,
              fontSize: 14,
              background: '#f8fafc',
              outline: 'none',
            }}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            style={{ 
              position: 'absolute', 
              right: 14, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              background: 'none', 
              border: 'none', 
              fontSize: 18, 
              cursor: 'pointer' 
            }}
          >
            {showPass ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      {/* Confirmer mot de passe */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' }}>
          Confirmer le mot de passe
        </label>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16 }}>🔒</span>
          <input
            type={showConf ? 'text' : 'password'}
            name="confirmationMotDePasse"
            value={formData.confirmationMotDePasse}
            onChange={handleChange}
            placeholder="Confirmer votre mot de passe"
            required
            style={{
              width: '100%',
              padding: '8px 40px 8px 40px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 12,
              fontSize: 14,
              background: '#f8fafc',
              outline: 'none',
            }}
          />
          <button
            type="button"
            onClick={() => setShowConf(!showConf)}
            style={{ 
              position: 'absolute', 
              right: 14, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              background: 'none', 
              border: 'none', 
              fontSize: 18, 
              cursor: 'pointer' 
            }}
          >
            {showConf ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      {/* Submit Button & Messages - spans both columns */}
      <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
        {/* Messages d'erreur et succès */}
        {error && (
          <p style={{ color: '#ef4444', fontSize: 13, margin: 0, textAlign: 'center' }}>
            {error}
          </p>
        )}
        {success && (
          <p style={{ color: '#10b981', fontSize: 13, margin: 0, textAlign: 'center' }}>
            ✅ Compte créé avec succès !
          </p>
        )}

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: 12,
            background: loading 
              ? '#94a3b8' 
              : `linear-gradient(135deg, ${TEAL}, #0F6E56)`,
            color: '#fff',
            fontSize: 15,
            fontWeight: 800,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.85 : 1,
            transition: 'all 0.2s',
            width: '100%'
          }}
        >
          {loading ? 'Création...' : '✨ Créer mon compte'}
        </button>
      </div>
    </form>
  );
};

export default SignUp;