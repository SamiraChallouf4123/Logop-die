// src/components/Auth/AuthModal.js
import React, { useEffect } from 'react';
import Auth from './Auth';

const AuthModal = ({ 
  isOpen, 
  defaultSignUp = false, 
  onClose, 
  onLoginSuccess   // ← Nouvelle prop importante
}) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { 
      document.body.style.overflow = ''; 
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', 
          inset: 0, 
          zIndex: 200,
          background: 'rgba(15,23,42,0.55)',
          backdropFilter: 'blur(6px)',
          animation: 'fadeBackdrop 0.25s ease both',
        }}
      />

      {/* Modal Container */}
      <div style={{
        position: 'fixed', 
        inset: 0, 
        zIndex: 201,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '1.5rem', 
        pointerEvents: 'none',
      }}>
        <div style={{
          pointerEvents: 'auto',
          width: '100%', 
          maxWidth: 640,
          animation: 'slideUpModal 0.32s cubic-bezier(0.34,1.56,0.64,1) both',
          position: 'relative',
        }}>
          
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', 
              top: -14, 
              right: -14, 
              zIndex: 10,
              width: 36, 
              height: 36, 
              borderRadius: '50%',
              background: '#fff', 
              border: 'none', 
              cursor: 'pointer',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: 16, 
              color: '#64748b',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = 'scale(1.12) rotate(90deg)'; 
            }}
            onMouseOut={(e) => { 
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; 
            }}
          >
            ✕
          </button>

          {/* Composant Auth qui contient SignIn et SignUp */}
          <Auth 
            defaultSignUp={defaultSignUp} 
            onClose={onClose}
            onLoginSuccess={onLoginSuccess}   // ← On passe la fonction ici
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeBackdrop { 
          from { opacity: 0 } 
          to { opacity: 1 } 
        }
        @keyframes slideUpModal { 
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95) 
          } 
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1) 
          } 
        }
      `}</style>
    </>
  );
};

export default AuthModal;