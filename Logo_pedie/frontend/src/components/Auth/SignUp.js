// src/components/Auth/SignUp.js
import React, { useState, useRef } from 'react';

const TEAL = '#0D9373';

// ─── Step indicator ───────────────────────────────────────────────────────────
const Steps = ({ current }) => {
  const labels = ['Informations', 'Abonnement', 'Paiement'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
      {labels.map((label, i) => {
        const active = i === current;
        const done = i < current;
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: done ? TEAL : active ? TEAL : '#e2e8f0',
                color: done || active ? '#fff' : '#94a3b8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: 10, transition: 'all 0.3s',
                boxShadow: active ? `0 0 0 3px ${TEAL}25` : 'none',
              }}>
                {done ? '✓' : i + 1}
              </div>
              <span style={{ fontSize: 9, fontWeight: 700, color: active ? TEAL : done ? TEAL : '#94a3b8' }}>
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div style={{
                flex: 1, height: 2, margin: '0 6px', marginBottom: 12,
                background: done ? TEAL : '#e2e8f0', transition: 'background 0.3s',
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ─── Plans data ───────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: 'free', label: 'Free', price: { monthly: 0, biannual: 0, annual: 0, biennial: 0 },
    description: 'Découvrez ce que l\'IA peut faire',
    features: ['Modèle de base', 'Limites pour les messages', 'Création d\'images limitée', 'Mémoire limitée'],
    highlight: false,
  },
  {
    id: 'go', label: 'Go', price: { monthly: 5, biannual: 27, annual: 48, biennial: 90 },
    description: 'Continuez à discuter avec un accès étendu',
    features: ['Modèle de base', 'Limites étendues pour les messages', 'Limites étendues pour les images', 'Mémoire étendue', 'Accès étendu au mode vocal'],
    highlight: false,
  },
  {
    id: 'plus', label: 'Plus', price: { monthly: 20, biannual: 108, annual: 192, biennial: 360 },
    description: 'Bénéficiez d\'une expérience complète',
    features: ['Modèles avancés', 'Limites plus étendues', 'Création d\'images rapide', 'Mémoire étendue dans les chats', 'Agent de codage Codex'],
    highlight: true,
    badge: 'POPULAIRE',
  },
  {
    id: 'pro', label: 'Pro', price: { monthly: 100, biannual: 540, annual: 960, biennial: 1800 },
    description: 'Maximisez votre productivité',
    features: ['Toutes les fonctionnalités Plus', 'Limite d\'utilisation 5x ou 20x plus élevée', 'Modèle phare Pro', 'Accès maximal à Codex', 'Recherche approfondie maximale'],
    highlight: false,
  },
];

const BILLING = [
  { id: 'biannual', label: '6 Mois',  suffix: '/ 6 mois',  discount: '10% OFF' },
  { id: 'annual',   label: '1 An',    suffix: '/ an',     discount: '20% OFF' },
  { id: 'biennial', label: '2 Ans',   suffix: '/ 2 ans',  discount: '25% OFF' },   // ← ajout 2 ans
];

// ─── Step 1 : Informations (kifah) ───────────────────────────────────────────
const StepInfo = ({ formData, setFormData, onNext }) => {
  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData(prev => ({ ...prev, photo: file }));
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.motDePasse !== formData.confirmationMotDePasse) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    onNext();   // yemchi directement lel abonnement
  };

  const inputStyle = {
    width: '100%', padding: '7px 12px', border: '1.5px solid #e2e8f0',
    borderRadius: 10, fontSize: 13, background: '#f8fafc', outline: 'none',
    boxSizing: 'border-box', transition: 'border-color 0.2s',
  };
  const labelStyle = { fontSize: 12, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' };

  return (
    <form onSubmit={handleNext}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 12, alignItems: 'center' }}>
        {/* Photo upload kifah */}
        <div onClick={() => fileRef.current.click()} style={{
          width: 56, height: 56, borderRadius: '50%', cursor: 'pointer', flexShrink: 0,
          border: `2px dashed ${TEAL}`, background: '#f0fdf9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', position: 'relative',
        }}>
          {preview ? (
            <img src={preview} alt="Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ textAlign: 'center', color: TEAL }}>
              <div style={{ fontSize: 16, marginBottom: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.8">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 800 }}>Photo</div>
            </div>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />

        {/* Noms */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 12, flex: 1 }}>
          <div>
            <label style={labelStyle}>Nom</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre nom" required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Prénom</label>
            <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Votre prénom" required style={inputStyle} />
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 12, rowGap: 10 }}>
        <div>
          <label style={labelStyle}>Adresse email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Type de compte</label>
          <div style={{ display: 'flex', gap: 8 }}>
            {['eleve', 'client'].map(type => (
              <button key={type} type="button" onClick={() => setFormData(p => ({ ...p, typeCompte: type }))}
                style={{
                  flex: 1, padding: '6px 0', border: `1.5px solid ${formData.typeCompte === type ? TEAL : '#e2e8f0'}`,
                  borderRadius: 10, background: formData.typeCompte === type ? `${TEAL}15` : '#f8fafc',
                  color: formData.typeCompte === type ? TEAL : '#64748b', fontWeight: 700, fontSize: 12, cursor: 'pointer',
                }}>
                {type === 'eleve' ? 'Élève' : 'Client'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label style={labelStyle}>Mot de passe</label>
          <div style={{ position: 'relative' }}>
            <input type={showPass ? 'text' : 'password'} name="motDePasse" value={formData.motDePasse} onChange={handleChange}
              placeholder="Créer un mot de passe" required style={{ ...inputStyle, paddingRight: 36 }} />
            <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>

        <div>
          <label style={labelStyle}>Confirmer mot de passe</label>
          <div style={{ position: 'relative' }}>
            <input type={showConf ? 'text' : 'password'} name="confirmationMotDePasse" value={formData.confirmationMotDePasse} onChange={handleChange}
              placeholder="Confirmer votre mot de passe" required style={{ ...inputStyle, paddingRight: 36 }} />
            <button type="button" onClick={() => setShowConf(!showConf)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
      </div>

      {error && <p style={{ color: '#ef4444', fontSize: 12, textAlign: 'center', margin: '4px 0 0' }}>{error}</p>}

      <button type="submit" style={{
        marginTop: 12, width: '100%', padding: '9px', border: 'none', borderRadius: 10,
        background: `linear-gradient(135deg, ${TEAL}, #0F6E56)`, color: '#fff',
        fontSize: 14, fontWeight: 800, cursor: 'pointer',
      }}>
        Suivant → Choisir l'abonnement
      </button>
    </form>
  );
};

// ─── Step 2 : Abonnement (3 choix + 2 ans) ───────────────────────────────────
const StepSubscription = ({ formData, setFormData, onNext, onBack }) => {
  const [billing, setBilling] = useState('annual');   // default 1 an (t7eb tbadlo?)
  const selectedPlan = formData.plan || 'plus';

  const getPrice = (plan) => plan.price[billing] || 0;

  const selectPlan = (planId) => {
    setFormData(prev => ({ ...prev, plan: planId, billing }));
  };

  const handleNext = () => {
    setFormData(prev => ({ ...prev, plan: selectedPlan, billing }));
    onNext();
  };

  return (
    <div>
      {/* Billing toggle — 3 boutons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {BILLING.map(b => (
          <button key={b.id} type="button" onClick={() => setBilling(b.id)}
            style={{
              padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer',
              fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
              background: billing === b.id ? TEAL : '#f1f5f9',
              color: billing === b.id ? '#fff' : '#64748b',
              position: 'relative',
            }}>
            {b.label}
            {b.discount && (
              <span style={{
                position: 'absolute', top: -6, right: -6,
                background: '#f59e0b', color: '#fff', fontSize: 9,
                fontWeight: 800, padding: '2px 6px', borderRadius: 8,
              }}>{b.discount}</span>
            )}
          </button>
        ))}
      </div>

      {/* Plans grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {PLANS.map(plan => {
          const active = selectedPlan === plan.id;
          const price = getPrice(plan);
          return (
            <div key={plan.id} onClick={() => selectPlan(plan.id)}
              style={{
                borderRadius: 12, padding: '10px 12px', cursor: 'pointer',
                border: `1.5px solid ${active ? TEAL : plan.highlight ? '#6366f1' : '#e2e8f0'}`,
                background: active ? `${TEAL}08` : plan.highlight ? '#1e1b4b' : '#fff',
                position: 'relative', transition: 'all 0.2s',
                boxShadow: active ? `0 0 0 3px ${TEAL}20` : plan.highlight ? '0 4px 16px #6366f130' : 'none',
              }}>
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
                  background: '#6366f1', color: '#fff', fontSize: 9, fontWeight: 800,
                  padding: '2px 8px', borderRadius: 20,
                }}>{plan.badge}</div>
              )}

              {active && (
                <div style={{
                  position: 'absolute', top: 8, right: 8, width: 16, height: 16,
                  borderRadius: '50%', background: TEAL, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800,
                }}>✓</div>
              )}

              <div style={{ fontSize: 14, fontWeight: 800, color: plan.highlight ? '#c7d2fe' : '#1e293b', marginBottom: 4 }}>
                {plan.label}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: plan.highlight ? '#a5b4fc' : '#94a3b8' }}>$</span>
                <span style={{ fontSize: 20, fontWeight: 900, color: plan.highlight ? '#fff' : '#0f172a' }}>
                  {price}
                </span>
                <span style={{ fontSize: 11, color: plan.highlight ? '#a5b4fc' : '#94a3b8' }}>
                  {BILLING.find(b => b.id === billing).suffix}
                </span>
              </div>

              <div style={{ fontSize: 11, color: plan.highlight ? '#a5b4fc' : '#64748b', marginBottom: 8, lineHeight: 1.3 }}>
                {plan.description}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {plan.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                    <span style={{ color: plan.highlight ? '#818cf8' : TEAL, fontSize: 12 }}>—</span>
                    <span style={{ fontSize: 10, color: plan.highlight ? '#c7d2fe' : '#475569', lineHeight: 1.3 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
        <button onClick={onBack} style={{
          flex: 1, padding: '9px', border: `1.5px solid ${TEAL}`, borderRadius: 10,
          background: 'transparent', color: TEAL, fontSize: 14, fontWeight: 800, cursor: 'pointer',
        }}>
          Retour
        </button>
        <button onClick={handleNext} style={{
          flex: 2, padding: '9px', border: 'none', borderRadius: 10,
          background: `linear-gradient(135deg, ${TEAL}, #0F6E56)`, color: '#fff',
          fontSize: 14, fontWeight: 800, cursor: 'pointer',
        }}>
          Suivant → Paiement
        </button>
      </div>
    </div>
  );
};

// ─── Step 3 : Paiement (kifah) ───────────────────────────────────────────────
const StepPayment = ({ formData, onBack, onSubmit, loading, error, success }) => {
  const [pay, setPay] = useState({ cardNumber: '', name: '', expiry: '', cvv: '' });

  const handleChange = (e) => setPay(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const formatCard = (val) => val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  const formatExpiry = (val) => {
    let v = val.replace(/\D/g, '').slice(0, 4);
    return v.length > 2 ? v.slice(0, 2) + '/' + v.slice(2) : v;
  };

  const plan = PLANS.find(p => p.id === (formData.plan || 'plus'));
  const billingObj = BILLING.find(b => b.id === (formData.billing || 'annual'));
  const price = plan?.price[formData.billing || 'annual'] || 0;

  const inputStyle = {
    width: '100%', padding: '6px 10px', border: '1.5px solid #e2e8f0',
    borderRadius: 8, fontSize: 13, background: '#f8fafc', outline: 'none',
  };
  const labelStyle = { fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 2, display: 'block' };

  return (
    <div>
      {/* Récapitulatif */}
      <div style={{ background: `${TEAL}0d`, border: `1px solid ${TEAL}30`, borderRadius: 8, padding: '8px 12px', marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 2 }}>Récapitulatif</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800 }}>Plan {plan?.label}</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>Facturation : {billingObj?.label}</div>
          </div>
          <div style={{ fontSize: 18, fontWeight: 900, color: TEAL }}>
            ${price}<span style={{ fontSize: 11, fontWeight: 600, color: '#64748b' }}>{billingObj?.suffix}</span>
          </div>
        </div>
      </div>

      {/* Formulaire carte */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 10, rowGap: 8 }}>
        <div style={{ gridColumn: 'span 2' }}>
          <label style={labelStyle}>Numéro de carte</label>
          <input name="cardNumber" value={pay.cardNumber}
            onChange={e => setPay(p => ({ ...p, cardNumber: formatCard(e.target.value) }))}
            placeholder="0000 0000 0000 0000" style={inputStyle} />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <label style={labelStyle}>Nom sur la carte</label>
          <input name="name" value={pay.name} onChange={handleChange} placeholder="Jean Dupont" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Date d'expiration (MM/AA)</label>
          <input name="expiry" value={pay.expiry}
            onChange={e => setPay(p => ({ ...p, expiry: formatExpiry(e.target.value) }))}
            placeholder="MM/AA" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>CVV</label>
          <input name="cvv" value={pay.cvv}
            onChange={e => setPay(p => ({ ...p, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) }))}
            placeholder="123" style={inputStyle} />
        </div>
      </div>

      {error && <p style={{ color: '#ef4444', fontSize: 12, textAlign: 'center', margin: '4px 0' }}>{error}</p>}
      {success && <p style={{ color: '#10b981', fontSize: 12, textAlign: 'center', margin: '4px 0' }}>✅ Compte créé avec succès !</p>}

      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <button onClick={onBack} style={{
          flex: 1, padding: '8px', border: `1.5px solid ${TEAL}`, borderRadius: 10,
          background: 'transparent', color: TEAL, fontSize: 13, fontWeight: 800,
        }}>
          Retour
        </button>
        <button onClick={onSubmit} disabled={loading} style={{
          flex: 2, padding: '8px', border: 'none', borderRadius: 10,
          background: loading ? '#94a3b8' : `linear-gradient(135deg, ${TEAL}, #0F6E56)`,
          color: '#fff', fontSize: 13, fontWeight: 800, cursor: loading ? 'not-allowed' : 'pointer',
        }}>
          {loading ? 'Création...' : 'Créer mon compte'}
        </button>
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────
const SignUp = ({ onStepChange }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSetStep = (newStep) => {
    setStep(newStep);
    if (onStepChange) onStepChange(newStep);
  };

  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '',
    motDePasse: '', confirmationMotDePasse: '',
    typeCompte: 'eleve', photo: null,
    plan: 'plus', billing: 'annual',   // default 1 an
  });

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => {
        if (v !== null && v !== undefined) body.append(k, v);
      });

      const response = await fetch('http://localhost:3001/eleve', {
        method: 'POST',
        body,
      });

      if (!response.ok) {
        const text = await response.text();
        let msg = 'Erreur lors de la création du compte';
        try { msg = JSON.parse(text).message || msg; } catch {}
        throw new Error(msg);
      }

      setSuccess(true);
      // optionnel: setTimeout(() => window.location.href = '/login', 2000);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const titles = ['Créer un compte', 'Choisir votre abonnement', 'Informations de paiement'];

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0f172a', textAlign: 'center', marginBottom: 2 }}>
        {titles[step]}
      </h2>
      <p style={{ fontSize: 12, color: '#64748b', textAlign: 'center', marginBottom: 12 }}>
        {step === 0 && "Renseignez vos informations personnelles"}
        {step === 1 && "Sélectionnez le forfait et la durée qui vous conviennent"}
        {step === 2 && "Finalisez votre inscription en toute sécurité"}
      </p>

      <Steps current={step} />

      {step === 0 && <StepInfo formData={formData} setFormData={setFormData} onNext={() => handleSetStep(1)} />}
      {step === 1 && <StepSubscription formData={formData} setFormData={setFormData} onNext={() => handleSetStep(2)} onBack={() => handleSetStep(0)} />}
      {step === 2 && <StepPayment formData={formData} onBack={() => handleSetStep(1)} onSubmit={handleSubmit} loading={loading} error={error} success={success} />}
    </div>
  );
};

export default SignUp;